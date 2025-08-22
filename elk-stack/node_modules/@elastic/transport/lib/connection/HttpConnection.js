"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const hpagent_1 = tslib_1.__importDefault(require("hpagent"));
const node_http_1 = tslib_1.__importDefault(require("node:http"));
const node_https_1 = tslib_1.__importDefault(require("node:https"));
const debug_1 = tslib_1.__importDefault(require("debug"));
const node_buffer_1 = tslib_1.__importDefault(require("node:buffer"));
const BaseConnection_1 = tslib_1.__importStar(require("./BaseConnection"));
const symbols_1 = require("../symbols");
const node_stream_1 = require("node:stream");
const errors_1 = require("../errors");
const promises_1 = require("node:timers/promises");
const debug = (0, debug_1.default)('elasticsearch');
const INVALID_PATH_REGEX = /[^\u0021-\u00ff]/;
const MAX_BUFFER_LENGTH = node_buffer_1.default.constants.MAX_LENGTH;
const MAX_STRING_LENGTH = node_buffer_1.default.constants.MAX_STRING_LENGTH;
const noop = () => { };
/**
 * A connection to an Elasticsearch node, managed by the `http` client in the standard library
 */
class HttpConnection extends BaseConnection_1.default {
    constructor(opts) {
        super(opts);
        Object.defineProperty(this, "agent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "makeRequest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (typeof opts.agent === 'function') {
            this.agent = opts.agent(opts);
        }
        else if (typeof opts.agent === 'boolean') {
            this.agent = undefined;
        }
        else {
            if (opts.agent != null && !isHttpAgentOptions(opts.agent)) {
                throw new errors_1.ConfigurationError('Bad agent configuration for Http agent');
            }
            const agentOptions = Object.assign({}, {
                keepAlive: true,
                keepAliveMsecs: 1000,
                maxSockets: 256,
                maxFreeSockets: 256,
                scheduling: 'lifo'
            }, opts.agent);
            if (opts.proxy != null) {
                const proxyAgentOptions = {
                    ...agentOptions,
                    proxy: opts.proxy
                };
                this.agent = this.url.protocol === 'http:'
                    ? new hpagent_1.default.HttpProxyAgent(proxyAgentOptions)
                    : new hpagent_1.default.HttpsProxyAgent(Object.assign({}, proxyAgentOptions, this.tls));
            }
            else {
                this.agent = this.url.protocol === 'http:'
                    ? new node_http_1.default.Agent(agentOptions)
                    : new node_https_1.default.Agent(Object.assign({}, agentOptions, this.tls));
            }
        }
        this.makeRequest = this.url.protocol === 'http:'
            ? node_http_1.default.request
            : node_https_1.default.request;
    }
    async request(params, options) {
        return await new Promise((resolve, reject) => {
            var _a, _b;
            let cleanedListeners = false;
            const maxResponseSize = (_a = options.maxResponseSize) !== null && _a !== void 0 ? _a : MAX_STRING_LENGTH;
            const maxCompressedResponseSize = (_b = options.maxCompressedResponseSize) !== null && _b !== void 0 ? _b : MAX_BUFFER_LENGTH;
            const requestParams = this.buildRequestObject(params, options);
            // https://github.com/nodejs/node/commit/b961d9fd83
            if (INVALID_PATH_REGEX.test(requestParams.path)) {
                return reject(new TypeError(`ERR_UNESCAPED_CHARACTERS: ${requestParams.path}`));
            }
            debug('Starting a new request', params);
            // tracking response.end, request.finish and the value of the returnable response object here is necessary:
            // we only know a request is truly finished when one of the following is true:
            // - request.finish and response.end have both fired (success)
            // - request.error has fired (failure)
            // - response.close has fired (failure)
            let responseEnded = false;
            let requestFinished = false;
            let connectionRequestResponse;
            let request;
            try {
                request = this.makeRequest(requestParams);
            }
            catch (err) {
                return reject(err);
            }
            const abortListener = () => {
                request.destroy(new errors_1.RequestAbortedError('Request aborted'));
            };
            this._openRequests++;
            if (options.signal != null) {
                options.signal.addEventListener('abort', abortListener, { once: true });
            }
            let response;
            const onResponseClose = () => {
                return reject(new errors_1.ConnectionError('Connection closed while reading the body'));
            };
            const onResponse = (res) => {
                var _a, _b;
                response = res;
                cleanListeners();
                if (options.asStream === true) {
                    return resolve({
                        body: response,
                        statusCode: response.statusCode,
                        headers: response.headers
                    });
                }
                const contentEncoding = ((_a = response.headers['content-encoding']) !== null && _a !== void 0 ? _a : '').toLowerCase();
                const isCompressed = contentEncoding.includes('gzip') || contentEncoding.includes('deflate');
                const bodyIsBinary = (0, BaseConnection_1.isBinary)((_b = response.headers['content-type']) !== null && _b !== void 0 ? _b : '');
                /* istanbul ignore else */
                if (response.headers['content-length'] !== undefined) {
                    const contentLength = Number(response.headers['content-length']);
                    if (isCompressed && contentLength > maxCompressedResponseSize) {
                        response.destroy();
                        return reject(new errors_1.RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed buffer (${maxCompressedResponseSize})`));
                    }
                    else if (contentLength > maxResponseSize) {
                        response.destroy();
                        return reject(new errors_1.RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed string (${maxResponseSize})`));
                    }
                }
                // if the response is compressed, we must handle it
                // as buffer for allowing decompression later
                let payload = isCompressed || bodyIsBinary ? new Array() : '';
                const onData = isCompressed || bodyIsBinary ? onDataAsBuffer : onDataAsString;
                let currentLength = 0;
                function onDataAsBuffer(chunk) {
                    currentLength += Buffer.byteLength(chunk);
                    if (currentLength > maxCompressedResponseSize) {
                        response.destroy(new errors_1.RequestAbortedError(`The content length (${currentLength}) is bigger than the maximum allowed buffer (${maxCompressedResponseSize})`));
                    }
                    else {
                        payload.push(chunk);
                    }
                }
                function onDataAsString(chunk) {
                    currentLength += Buffer.byteLength(chunk);
                    if (currentLength > maxResponseSize) {
                        response.destroy(new errors_1.RequestAbortedError(`The content length (${currentLength}) is bigger than the maximum allowed string (${maxResponseSize})`));
                    }
                    else {
                        payload = `${payload}${chunk}`;
                    }
                }
                const onEnd = () => {
                    response.removeListener('data', onData);
                    response.removeListener('end', onEnd);
                    responseEnded = true;
                    connectionRequestResponse = {
                        body: isCompressed || bodyIsBinary ? Buffer.concat(payload) : payload,
                        statusCode: response.statusCode,
                        headers: response.headers
                    };
                    if (requestFinished) {
                        response.removeListener('close', onResponseClose);
                        return resolve(connectionRequestResponse);
                    }
                };
                if (!isCompressed && !bodyIsBinary) {
                    response.setEncoding('utf8');
                }
                this.diagnostic.emit('deserialization', null, options);
                response.on('data', onData);
                response.on('end', onEnd);
                response.on('close', onResponseClose);
            };
            const onTimeout = () => {
                cleanListeners();
                request.once('error', noop); // we need to catch the request aborted error
                request.destroy();
                return reject(new errors_1.TimeoutError('Request timed out'));
            };
            const onError = (err) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                // @ts-expect-error
                let { name, message, code } = err;
                // ignore this error, it means we got a response body for a request that didn't expect a body (e.g. HEAD)
                // rather than failing, let it return a response with an empty string as body
                if (code === 'HPE_INVALID_CONSTANT' && message.startsWith('Parse Error: Expected HTTP/'))
                    return;
                cleanListeners();
                if (name === 'RequestAbortedError') {
                    return reject(err);
                }
                if (code === 'ECONNRESET') {
                    message += ` - Local: ${(_b = (_a = request.socket) === null || _a === void 0 ? void 0 : _a.localAddress) !== null && _b !== void 0 ? _b : 'unknown'}:${(_d = (_c = request.socket) === null || _c === void 0 ? void 0 : _c.localPort) !== null && _d !== void 0 ? _d : 'unknown'}, Remote: ${(_f = (_e = request.socket) === null || _e === void 0 ? void 0 : _e.remoteAddress) !== null && _f !== void 0 ? _f : 'unknown'}:${(_h = (_g = request.socket) === null || _g === void 0 ? void 0 : _g.remotePort) !== null && _h !== void 0 ? _h : 'unknown'}`;
                }
                else if (code === 'EPIPE') {
                    message = 'Response aborted while reading the body';
                }
                return reject(new errors_1.ConnectionError(message));
            };
            const onSocket = (socket) => {
                /* istanbul ignore else */
                if (!socket.isSessionReused()) {
                    socket.once('secureConnect', () => {
                        const issuerCertificate = (0, BaseConnection_1.getIssuerCertificate)(socket);
                        /* istanbul ignore next */
                        if (issuerCertificate == null) {
                            onError(new Error('Invalid or malformed certificate'));
                            request.once('error', noop); // we need to catch the request aborted error
                            return request.destroy();
                        }
                        // Check if fingerprint matches
                        /* istanbul ignore else */
                        if (!(0, BaseConnection_1.isCaFingerprintMatch)(this[symbols_1.kCaFingerprint], issuerCertificate.fingerprint256)) {
                            onError(new Error('Server certificate CA fingerprint does not match the value configured in caFingerprint'));
                            request.once('error', noop); // we need to catch the request aborted error
                            return request.destroy();
                        }
                    });
                }
            };
            const onFinish = () => {
                requestFinished = true;
                if (responseEnded) {
                    response === null || response === void 0 ? void 0 : response.removeListener('close', onResponseClose);
                    if (connectionRequestResponse != null) {
                        return resolve(connectionRequestResponse);
                    }
                    else {
                        return reject(new Error('No response body received'));
                    }
                }
            };
            const cleanListeners = () => {
                if (cleanedListeners)
                    return;
                this._openRequests--;
                // we do NOT stop listening to request.error here
                // all errors we care about in the request/response lifecycle will bubble up to request.error, and may occur even after the request has been sent
                request.removeListener('response', onResponse);
                request.removeListener('timeout', onTimeout);
                request.removeListener('socket', onSocket);
                if (options.signal != null) {
                    if ('removeEventListener' in options.signal) {
                        options.signal.removeEventListener('abort', abortListener);
                    }
                    else {
                        options.signal.removeListener('abort', abortListener);
                    }
                }
                cleanedListeners = true;
            };
            request.on('response', onResponse);
            request.on('timeout', onTimeout);
            request.on('error', onError);
            request.on('finish', onFinish);
            if (this[symbols_1.kCaFingerprint] != null && requestParams.protocol === 'https:') {
                request.on('socket', onSocket);
            }
            // Disables the Nagle algorithm
            request.setNoDelay(true);
            // starts the request
            if (isStream(params.body)) {
                (0, node_stream_1.pipeline)(params.body, request, err => {
                    /* istanbul ignore if  */
                    if (err != null && !cleanedListeners) {
                        cleanListeners();
                        return reject(err);
                    }
                });
            }
            else {
                request.end(params.body);
            }
        });
    }
    async close() {
        debug('Closing connection', this.id);
        while (this._openRequests > 0) {
            await (0, promises_1.setTimeout)(1000);
        }
        /* istanbul ignore else */
        if (this.agent !== undefined) {
            this.agent.destroy();
        }
    }
    buildRequestObject(params, options) {
        var _a;
        const url = this.url;
        let search = url.search;
        let pathname = url.pathname;
        const request = {
            protocol: url.protocol,
            hostname: url.hostname[0] === '['
                ? url.hostname.slice(1, -1)
                : url.hostname,
            path: '',
            // https://github.com/elastic/elasticsearch-js/issues/843
            port: url.port !== '' ? url.port : undefined,
            headers: this.headers,
            agent: this.agent,
            timeout: (_a = options.timeout) !== null && _a !== void 0 ? _a : this.timeout
        };
        const paramsKeys = Object.keys(params);
        for (let i = 0, len = paramsKeys.length; i < len; i++) {
            const key = paramsKeys[i];
            if (key === 'path') {
                pathname = resolve(pathname, params[key]);
            }
            else if (key === 'querystring' && Boolean(params[key])) {
                if (search === '') {
                    search = `?${params[key]}`;
                }
                else {
                    search += `&${params[key]}`;
                }
            }
            else if (key === 'headers') {
                request.headers = Object.assign({}, request.headers, params.headers);
            }
            else {
                // @ts-expect-error
                request[key] = params[key];
            }
        }
        request.path = pathname + search;
        return request;
    }
}
exports.default = HttpConnection;
function isStream(obj) {
    return obj != null && typeof obj.pipe === 'function';
}
function resolve(host, path) {
    const hostEndWithSlash = host[host.length - 1] === '/';
    const pathStartsWithSlash = path[0] === '/';
    if (hostEndWithSlash && pathStartsWithSlash) {
        return host + path.slice(1);
    }
    else if (hostEndWithSlash !== pathStartsWithSlash) {
        return host + path;
    }
    else {
        return host + '/' + path;
    }
}
/* istanbul ignore next */
function isHttpAgentOptions(opts) {
    if (opts.keepAliveTimeout != null)
        return false;
    if (opts.keepAliveMaxTimeout != null)
        return false;
    if (opts.keepAliveTimeoutThreshold != null)
        return false;
    if (opts.pipelining != null)
        return false;
    if (opts.maxHeaderSize != null)
        return false;
    if (opts.connections != null)
        return false;
    return true;
}
//# sourceMappingURL=HttpConnection.js.map