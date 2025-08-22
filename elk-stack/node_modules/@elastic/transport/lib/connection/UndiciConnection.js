"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const debug_1 = tslib_1.__importDefault(require("debug"));
const node_buffer_1 = tslib_1.__importDefault(require("node:buffer"));
const BaseConnection_1 = tslib_1.__importStar(require("./BaseConnection"));
const undici_1 = require("undici");
const errors_1 = require("../errors");
const symbols_1 = require("../symbols");
const debug = (0, debug_1.default)('elasticsearch');
const INVALID_PATH_REGEX = /[^\u0021-\u00ff]/;
const MAX_BUFFER_LENGTH = node_buffer_1.default.constants.MAX_LENGTH;
const MAX_STRING_LENGTH = node_buffer_1.default.constants.MAX_STRING_LENGTH;
/**
 * A connection to an Elasticsearch node, managed by the Undici HTTP client library
 */
class Connection extends BaseConnection_1.default {
    constructor(opts) {
        var _a;
        super(opts);
        Object.defineProperty(this, "pool", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (opts.proxy != null) {
            throw new errors_1.ConfigurationError('Undici connection can\'t work with proxies');
        }
        if (typeof opts.agent === 'function' || typeof opts.agent === 'boolean') {
            throw new errors_1.ConfigurationError('Undici connection agent options can\'t be a function or a boolean');
        }
        if (opts.agent != null && !isUndiciAgentOptions(opts.agent)) {
            throw new errors_1.ConfigurationError('Bad agent configuration for Undici agent');
        }
        const undiciOptions = {
            keepAliveTimeout: 600e3,
            keepAliveMaxTimeout: 600e3,
            keepAliveTimeoutThreshold: 1000,
            pipelining: 1,
            maxHeaderSize: 16384,
            connections: 256,
            headersTimeout: this.timeout,
            bodyTimeout: this.timeout,
            ...opts.agent
        };
        if (this[symbols_1.kCaFingerprint] !== null) {
            const caFingerprint = this[symbols_1.kCaFingerprint];
            const connector = (0, undici_1.buildConnector)(((_a = this.tls) !== null && _a !== void 0 ? _a : {}));
            undiciOptions.connect = function (opts, cb) {
                connector(opts, (err, socket) => {
                    if (err != null) {
                        return cb(err, null);
                    }
                    if (caFingerprint !== null && isTlsSocket(opts, socket)) {
                        const issuerCertificate = (0, BaseConnection_1.getIssuerCertificate)(socket);
                        /* istanbul ignore next */
                        if (issuerCertificate == null) {
                            socket.destroy();
                            return cb(new Error('Invalid or malformed certificate'), null);
                        }
                        // Certificate will be empty if a session is reused. In this case, getPeerCertificate
                        // will return an empty object, causing a fingeprint check to fail. But, if the session
                        // is being reused, it means this socket's peer certificate fingerprint has already been
                        // checked, so we can skip it and assume the connection is secure.
                        // See https://github.com/nodejs/node/issues/3940#issuecomment-166696776
                        if (Object.keys(issuerCertificate).length === 0 && socket.isSessionReused()) {
                            return cb(null, socket);
                        }
                        // Check if fingerprint matches
                        /* istanbul ignore else */
                        if (!(0, BaseConnection_1.isCaFingerprintMatch)(caFingerprint, issuerCertificate.fingerprint256)) {
                            socket.destroy();
                            return cb(new Error('Server certificate CA fingerprint does not match the value configured in caFingerprint'), null);
                        }
                    }
                    return cb(null, socket);
                });
            };
        }
        else if (this.tls !== null) {
            undiciOptions.connect = this.tls;
        }
        this.pool = new undici_1.Pool(this.url.toString(), undiciOptions);
    }
    async request(params, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const maxResponseSize = (_a = options.maxResponseSize) !== null && _a !== void 0 ? _a : MAX_STRING_LENGTH;
        const maxCompressedResponseSize = (_b = options.maxCompressedResponseSize) !== null && _b !== void 0 ? _b : MAX_BUFFER_LENGTH;
        const requestParams = {
            method: params.method,
            path: params.path + (params.querystring == null || params.querystring === '' ? '' : `?${params.querystring}`),
            headers: Object.assign({}, this.headers, params.headers),
            body: params.body,
            signal: (_c = options.signal) !== null && _c !== void 0 ? _c : new AbortController().signal
        };
        if (requestParams.path[0] !== '/') {
            requestParams.path = `/${requestParams.path}`;
        }
        // undici does not support per-request timeouts,
        // to address this issue, we default to the constructor
        // timeout (which is handled by undici) and create a local
        // setTimeout callback if the request-specific timeout
        // is different from the constructor timeout.
        let timedout = false;
        let timeoutId;
        if (options.timeout != null && options.timeout !== this.timeout) {
            timeoutId = setTimeout(() => {
                timedout = true;
                requestParams.signal.dispatchEvent(new Event('abort'));
            }, options.timeout);
        }
        // https://github.com/nodejs/node/commit/b961d9fd83
        if (INVALID_PATH_REGEX.test(requestParams.path)) {
            throw new TypeError(`ERR_UNESCAPED_CHARACTERS: ${requestParams.path}`);
        }
        debug('Starting a new request', params);
        let response;
        try {
            // @ts-expect-error
            response = (await this.pool.request(requestParams));
            if (timeoutId != null)
                clearTimeout(timeoutId);
        }
        catch (err) {
            if (timeoutId != null)
                clearTimeout(timeoutId);
            switch (err.code) {
                case 'UND_ERR_ABORTED':
                case DOMException.ABORT_ERR:
                    throw (timedout ? new errors_1.TimeoutError('Request timed out') : new errors_1.RequestAbortedError('Request aborted'));
                case 'UND_ERR_HEADERS_TIMEOUT':
                    throw new errors_1.TimeoutError('Request timed out');
                case 'UND_ERR_SOCKET':
                    throw new errors_1.ConnectionError(`${err.message} - Local: ${(_e = (_d = err.socket) === null || _d === void 0 ? void 0 : _d.localAddress) !== null && _e !== void 0 ? _e : 'unknown'}:${(_g = (_f = err.socket) === null || _f === void 0 ? void 0 : _f.localPort) !== null && _g !== void 0 ? _g : 'unknown'}, Remote: ${(_j = (_h = err.socket) === null || _h === void 0 ? void 0 : _h.remoteAddress) !== null && _j !== void 0 ? _j : 'unknown'}:${(_l = (_k = err.socket) === null || _k === void 0 ? void 0 : _k.remotePort) !== null && _l !== void 0 ? _l : 'unknown'}`); // eslint-disable-line
                default:
                    throw new errors_1.ConnectionError(err.message);
            }
        }
        if (options.asStream === true) {
            return {
                statusCode: response.statusCode,
                headers: response.headers,
                body: response.body
            };
        }
        // @ts-expect-error Assume header is not string[] for now.
        const contentEncoding = ((_m = response.headers['content-encoding']) !== null && _m !== void 0 ? _m : '').toLowerCase();
        const isCompressed = contentEncoding.includes('gzip') || contentEncoding.includes('deflate'); // eslint-disable-line
        const bodyIsBinary = (0, BaseConnection_1.isBinary)((_o = response.headers['content-type']) !== null && _o !== void 0 ? _o : '');
        /* istanbul ignore else */
        if (response.headers['content-length'] !== undefined) {
            const contentLength = Number(response.headers['content-length']);
            if (isCompressed && contentLength > maxCompressedResponseSize) { // eslint-disable-line
                response.body.destroy();
                throw new errors_1.RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed buffer (${maxCompressedResponseSize})`);
            }
            else if (contentLength > maxResponseSize) {
                response.body.destroy();
                throw new errors_1.RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed string (${maxResponseSize})`);
            }
        }
        this.diagnostic.emit('deserialization', null, options);
        try {
            if (isCompressed || bodyIsBinary) { // eslint-disable-line
                let currentLength = 0;
                const payload = [];
                for await (const chunk of response.body) {
                    currentLength += Buffer.byteLength(chunk);
                    if (currentLength > maxCompressedResponseSize) {
                        response.body.destroy();
                        throw new errors_1.RequestAbortedError(`The content length (${currentLength}) is bigger than the maximum allowed buffer (${maxCompressedResponseSize})`);
                    }
                    payload.push(chunk);
                }
                return {
                    statusCode: response.statusCode,
                    headers: response.headers,
                    body: Buffer.concat(payload)
                };
            }
            else {
                let payload = '';
                let currentLength = 0;
                response.body.setEncoding('utf8');
                for await (const chunk of response.body) {
                    currentLength += Buffer.byteLength(chunk);
                    if (currentLength > maxResponseSize) {
                        response.body.destroy();
                        throw new errors_1.RequestAbortedError(`The content length (${currentLength}) is bigger than the maximum allowed string (${maxResponseSize})`);
                    }
                    payload += chunk;
                }
                return {
                    statusCode: response.statusCode,
                    headers: response.headers,
                    body: payload
                };
            }
        }
        catch (err) {
            if (err.name === 'RequestAbortedError') {
                throw err;
            }
            throw new errors_1.ConnectionError(err.message);
        }
    }
    async close() {
        debug('Closing connection', this.id);
        await this.pool.close();
    }
}
exports.default = Connection;
/* istanbul ignore next */
function isUndiciAgentOptions(opts) {
    if (opts.keepAlive != null)
        return false;
    if (opts.keepAliveMsecs != null)
        return false;
    if (opts.maxSockets != null)
        return false;
    if (opts.maxFreeSockets != null)
        return false;
    if (opts.scheduling != null)
        return false;
    if (opts.proxy != null)
        return false;
    return true;
}
function isTlsSocket(opts, socket) {
    return socket !== null && opts.protocol === 'https:';
}
//# sourceMappingURL=UndiciConnection.js.map