"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestId = generateRequestId;
exports.lowerCaseHeaders = lowerCaseHeaders;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const node_os_1 = tslib_1.__importDefault(require("node:os"));
const node_zlib_1 = tslib_1.__importDefault(require("node:zlib"));
const node_buffer_1 = tslib_1.__importDefault(require("node:buffer"));
const node_util_1 = require("node:util");
const node_process_1 = tslib_1.__importDefault(require("node:process"));
const ms_1 = tslib_1.__importDefault(require("ms"));
const errors_1 = require("./errors");
const BaseConnection_1 = require("./connection/BaseConnection");
const Diagnostic_1 = tslib_1.__importDefault(require("./Diagnostic"));
const Serializer_1 = tslib_1.__importDefault(require("./Serializer"));
const symbols_1 = require("./symbols");
const promises_1 = require("node:timers/promises");
const api_1 = tslib_1.__importStar(require("@opentelemetry/api"));
const core_1 = require("@opentelemetry/core");
const { version: clientVersion } = require('../package.json'); // eslint-disable-line
const debug = (0, debug_1.default)('elasticsearch');
const gzip = (0, node_util_1.promisify)(node_zlib_1.default.gzip);
const unzip = (0, node_util_1.promisify)(node_zlib_1.default.unzip);
const { createGzip } = node_zlib_1.default;
const userAgent = `elastic-transport-js/${clientVersion} (${node_os_1.default.platform()} ${node_os_1.default.release()}-${node_os_1.default.arch()}; Node.js ${node_process_1.default.version})`; // eslint-disable-line
class Transport {
    constructor(opts) {
        var _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28;
        Object.defineProperty(this, _a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _b, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _c, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _d, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _e, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _f, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _g, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _h, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _j, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _k, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _l, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _m, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _o, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _p, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _q, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _r, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _s, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _t, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _u, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _v, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _w, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _x, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _y, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _z, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _0, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _1, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _2, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _3, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _4, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _5, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (opts.connectionPool == null) {
            throw new errors_1.ConfigurationError('The Connection Pool option is not defined');
        }
        if (typeof opts.maxRetries === 'number' && opts.maxRetries < 0 && Number.isInteger(opts.maxRetries)) {
            throw new errors_1.ConfigurationError('The maxRetries option must be a positive integer or zero');
        }
        if (opts.sniffInterval === true ||
            (typeof opts.sniffInterval === 'number' && opts.sniffInterval < 0 && Number.isInteger(opts.sniffInterval))) {
            throw new errors_1.ConfigurationError('The sniffInterval option must be false or a positive integer');
        }
        if (opts.maxResponseSize != null && opts.maxResponseSize > node_buffer_1.default.constants.MAX_STRING_LENGTH) {
            throw new errors_1.ConfigurationError(`The maxResponseSize cannot be bigger than ${node_buffer_1.default.constants.MAX_STRING_LENGTH}`);
        }
        if (opts.maxCompressedResponseSize != null && opts.maxCompressedResponseSize > node_buffer_1.default.constants.MAX_LENGTH) {
            throw new errors_1.ConfigurationError(`The maxCompressedResponseSize cannot be bigger than ${node_buffer_1.default.constants.MAX_LENGTH}`);
        }
        this[symbols_1.kNodeFilter] = (_6 = opts.nodeFilter) !== null && _6 !== void 0 ? _6 : defaultNodeFilter;
        this[symbols_1.kNodeSelector] = (_7 = opts.nodeSelector) !== null && _7 !== void 0 ? _7 : roundRobinSelector();
        this[symbols_1.kHeaders] = Object.assign({}, { 'user-agent': userAgent }, opts.compression === true ? { 'accept-encoding': 'gzip,deflate' } : null, lowerCaseHeaders(opts.headers));
        this[symbols_1.kDiagnostic] = (_8 = opts.diagnostic) !== null && _8 !== void 0 ? _8 : new Diagnostic_1.default();
        this[symbols_1.kConnectionPool] = opts.connectionPool;
        this[symbols_1.kSerializer] = (_9 = opts.serializer) !== null && _9 !== void 0 ? _9 : new Serializer_1.default();
        this[symbols_1.kContext] = (_10 = opts.context) !== null && _10 !== void 0 ? _10 : null;
        this[symbols_1.kGenerateRequestId] = (_11 = opts.generateRequestId) !== null && _11 !== void 0 ? _11 : generateRequestId();
        this[symbols_1.kOpaqueIdPrefix] = (_12 = opts.opaqueIdPrefix) !== null && _12 !== void 0 ? _12 : null;
        this[symbols_1.kName] = (_13 = opts.name) !== null && _13 !== void 0 ? _13 : 'elastic-transport-js';
        this[symbols_1.kMaxRetries] = typeof opts.maxRetries === 'number' ? opts.maxRetries : 3;
        this[symbols_1.kCompression] = opts.compression === true;
        this[symbols_1.kRequestTimeout] = opts.requestTimeout != null ? toMs(opts.requestTimeout) : 30000;
        this[symbols_1.kRetryOnTimeout] = opts.retryOnTimeout != null ? opts.retryOnTimeout : false;
        this[symbols_1.kSniffInterval] = (_14 = opts.sniffInterval) !== null && _14 !== void 0 ? _14 : false;
        this[symbols_1.kSniffEnabled] = typeof this[symbols_1.kSniffInterval] === 'number';
        this[symbols_1.kNextSniff] = this[symbols_1.kSniffEnabled] ? (Date.now() + this[symbols_1.kSniffInterval]) : 0;
        this[symbols_1.kIsSniffing] = false;
        this[symbols_1.kSniffOnConnectionFault] = (_15 = opts.sniffOnConnectionFault) !== null && _15 !== void 0 ? _15 : false;
        this[symbols_1.kSniffEndpoint] = (_16 = opts.sniffEndpoint) !== null && _16 !== void 0 ? _16 : null;
        this[symbols_1.kProductCheck] = (_17 = opts.productCheck) !== null && _17 !== void 0 ? _17 : null;
        this[symbols_1.kMaxResponseSize] = (_18 = opts.maxResponseSize) !== null && _18 !== void 0 ? _18 : node_buffer_1.default.constants.MAX_STRING_LENGTH;
        this[symbols_1.kMaxCompressedResponseSize] = (_19 = opts.maxCompressedResponseSize) !== null && _19 !== void 0 ? _19 : node_buffer_1.default.constants.MAX_LENGTH;
        this[symbols_1.kJsonContentType] = (_21 = (_20 = opts.vendoredHeaders) === null || _20 === void 0 ? void 0 : _20.jsonContentType) !== null && _21 !== void 0 ? _21 : 'application/json';
        this[symbols_1.kNdjsonContentType] = (_23 = (_22 = opts.vendoredHeaders) === null || _22 === void 0 ? void 0 : _22.ndjsonContentType) !== null && _23 !== void 0 ? _23 : 'application/x-ndjson';
        this[symbols_1.kAcceptHeader] = (_25 = (_24 = opts.vendoredHeaders) === null || _24 === void 0 ? void 0 : _24.accept) !== null && _25 !== void 0 ? _25 : 'application/json, text/plain';
        this[symbols_1.kRedaction] = (_26 = opts.redaction) !== null && _26 !== void 0 ? _26 : { type: 'replace', additionalKeys: [] };
        this[symbols_1.kRetryBackoff] = (_27 = opts.retryBackoff) !== null && _27 !== void 0 ? _27 : retryBackoff;
        this[symbols_1.kOtelTracer] = api_1.default.trace.getTracer('@elastic/transport', clientVersion);
        const otelEnabledDefault = node_process_1.default.env.OTEL_ELASTICSEARCH_ENABLED != null ? (node_process_1.default.env.OTEL_ELASTICSEARCH_ENABLED.toLowerCase() !== 'false') : true;
        this[symbols_1.kOtelOptions] = Object.assign({}, {
            enabled: otelEnabledDefault,
            suppressInternalInstrumentation: false
        }, (_28 = opts.openTelemetry) !== null && _28 !== void 0 ? _28 : {});
        if (opts.sniffOnStart === true) {
            this.sniff({
                reason: Transport.sniffReasons.SNIFF_ON_START,
                requestId: this[symbols_1.kGenerateRequestId]({ method: 'GET', path: this[symbols_1.kSniffEndpoint] }, { context: this[symbols_1.kContext] }),
                context: this[symbols_1.kContext]
            });
        }
    }
    get connectionPool() {
        return this[symbols_1.kConnectionPool];
    }
    get sniffEnabled() {
        return this[symbols_1.kSniffEnabled];
    }
    get nextSniff() {
        return this[symbols_1.kNextSniff];
    }
    get sniffEndpoint() {
        return this[symbols_1.kSniffEndpoint];
    }
    get isSniffing() {
        return this[symbols_1.kIsSniffing];
    }
    set isSniffing(val) {
        if (typeof val !== 'boolean') {
            throw new errors_1.ConfigurationError(`isSniffing must be a boolean, instead got ${typeof val}`);
        }
        this[symbols_1.kIsSniffing] = val;
    }
    get diagnostic() {
        return this[symbols_1.kDiagnostic];
    }
    async _request(params, options = {}, otelSpan) {
        var _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22;
        const connectionParams = {
            method: params.method,
            path: params.path
        };
        const meta = {
            context: null,
            request: {
                params: connectionParams,
                options,
                id: (_6 = options.id) !== null && _6 !== void 0 ? _6 : this[symbols_1.kGenerateRequestId](params, options)
            },
            name: this[symbols_1.kName],
            connection: null,
            attempts: 0,
            aborted: false
        };
        const returnMeta = (_7 = options.meta) !== null && _7 !== void 0 ? _7 : false;
        if (this[symbols_1.kContext] != null && options.context != null) {
            meta.context = Object.assign({}, this[symbols_1.kContext], options.context);
        }
        else if (this[symbols_1.kContext] !== null) {
            meta.context = this[symbols_1.kContext];
        }
        else if (options.context != null) {
            meta.context = options.context;
        }
        const result = {
            // the default body value can't be `null`
            // as it's a valid JSON value
            body: undefined,
            statusCode: 0,
            headers: {},
            meta,
            get warnings() {
                var _6;
                if (((_6 = this.headers) === null || _6 === void 0 ? void 0 : _6.warning) == null) {
                    return null;
                }
                const { warning } = this.headers;
                // if multiple HTTP headers have the same name, Undici represents them as an array
                const warnings = Array.isArray(warning) ? warning : [warning];
                return warnings
                    .flatMap(w => w.split(/(?!\B"[^"]*),(?![^"]*"\B)/))
                    .filter((warning) => warning.match(/^\d\d\d Elasticsearch-/));
            }
        };
        // We should not retry if we are sending a stream body, because we should store in memory
        // a copy of the stream to be able to send it again, but since we don't know in advance
        // the size of the stream, we risk to take too much memory.
        // Furthermore, copying every time the stream is very a expensive operation.
        const maxRetries = isStream((_8 = params.body) !== null && _8 !== void 0 ? _8 : params.bulkBody) ? 0 : (typeof options.maxRetries === 'number' ? options.maxRetries : this[symbols_1.kMaxRetries]);
        const compression = typeof options.compression === 'boolean' ? options.compression : this[symbols_1.kCompression];
        const signal = options.signal;
        const maxResponseSize = (_9 = options.maxResponseSize) !== null && _9 !== void 0 ? _9 : this[symbols_1.kMaxResponseSize];
        const maxCompressedResponseSize = (_10 = options.maxCompressedResponseSize) !== null && _10 !== void 0 ? _10 : this[symbols_1.kMaxCompressedResponseSize];
        const errorOptions = {
            redaction: typeof options.redaction === 'object' ? options.redaction : this[symbols_1.kRedaction]
        };
        this[symbols_1.kDiagnostic].emit('serialization', null, result);
        const headers = Object.assign({}, this[symbols_1.kHeaders], lowerCaseHeaders(options.headers));
        if (options.opaqueId !== undefined) {
            headers['x-opaque-id'] = typeof this[symbols_1.kOpaqueIdPrefix] === 'string'
                ? this[symbols_1.kOpaqueIdPrefix] + options.opaqueId // eslint-disable-line
                : options.opaqueId;
        }
        // handle json body
        if (params.body != null) {
            if (shouldSerialize(params.body)) {
                try {
                    connectionParams.body = this[symbols_1.kSerializer].serialize(params.body);
                }
                catch (err) {
                    this[symbols_1.kDiagnostic].emit('request', err, result);
                    throw err;
                }
                headers['content-type'] = (_11 = headers['content-type']) !== null && _11 !== void 0 ? _11 : this[symbols_1.kJsonContentType];
                headers.accept = (_12 = headers.accept) !== null && _12 !== void 0 ? _12 : this[symbols_1.kJsonContentType];
            }
            else {
                if (params.body !== '') {
                    headers['content-type'] = (_13 = headers['content-type']) !== null && _13 !== void 0 ? _13 : 'text/plain';
                    headers.accept = (_14 = headers.accept) !== null && _14 !== void 0 ? _14 : this[symbols_1.kAcceptHeader];
                }
                connectionParams.body = params.body;
            }
            // handle ndjson body
        }
        else if (params.bulkBody != null) {
            if (shouldSerialize(params.bulkBody)) {
                try {
                    connectionParams.body = this[symbols_1.kSerializer].ndserialize(params.bulkBody);
                }
                catch (err) {
                    this[symbols_1.kDiagnostic].emit('request', err, result);
                    throw err;
                }
            }
            else {
                connectionParams.body = params.bulkBody;
            }
            if (connectionParams.body !== '') {
                headers['content-type'] = (_15 = headers['content-type']) !== null && _15 !== void 0 ? _15 : this[symbols_1.kNdjsonContentType];
                headers.accept = (_16 = headers.accept) !== null && _16 !== void 0 ? _16 : this[symbols_1.kJsonContentType];
            }
        }
        // serializes the querystring
        if (options.querystring == null) {
            connectionParams.querystring = this[symbols_1.kSerializer].qserialize(params.querystring);
        }
        else {
            connectionParams.querystring = this[symbols_1.kSerializer].qserialize(Object.assign({}, params.querystring, options.querystring));
        }
        // handle compression
        if (connectionParams.body !== '' && connectionParams.body != null) {
            if (isStream(connectionParams.body)) {
                if (compression) {
                    headers['content-encoding'] = 'gzip';
                    connectionParams.body = connectionParams.body.pipe(createGzip());
                }
            }
            else if (compression) {
                try {
                    connectionParams.body = await gzip(connectionParams.body);
                }
                catch (err) {
                    /* istanbul ignore next */
                    this[symbols_1.kDiagnostic].emit('request', err, result);
                    /* istanbul ignore next */
                    throw err;
                }
                headers['content-encoding'] = 'gzip';
                headers['content-length'] = '' + Buffer.byteLength(connectionParams.body); // eslint-disable-line
            }
            else {
                headers['content-length'] = '' + Buffer.byteLength(connectionParams.body); // eslint-disable-line
            }
        }
        headers.accept = (_17 = headers.accept) !== null && _17 !== void 0 ? _17 : this[symbols_1.kAcceptHeader];
        connectionParams.headers = headers;
        while (meta.attempts <= maxRetries) {
            try {
                if (signal === null || signal === void 0 ? void 0 : signal.aborted) { // eslint-disable-line
                    throw new errors_1.RequestAbortedError('Request has been aborted by the user', result, errorOptions);
                }
                meta.connection = this.getConnection({
                    requestId: meta.request.id,
                    context: meta.context
                });
                if (meta.connection === null) {
                    throw new errors_1.NoLivingConnectionsError('There are no living connections', result, errorOptions);
                }
                // generate required OpenTelemetry attributes from the request URL
                const requestUrl = meta.connection.url;
                otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttributes({
                    'url.full': requestUrl.toString(),
                    'server.address': requestUrl.hostname
                });
                if (requestUrl.port === '') {
                    if (requestUrl.protocol === 'https:') {
                        otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('server.port', 443);
                    }
                    else if (requestUrl.protocol === 'http:') {
                        otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('server.port', 80);
                    }
                }
                else {
                    const port = parseInt(requestUrl.port, 10);
                    if (!Number.isNaN(port))
                        otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('server.port', port);
                }
                this[symbols_1.kDiagnostic].emit('request', null, result);
                // perform the actual http request
                let { statusCode, headers, body } = await meta.connection.request(connectionParams, {
                    requestId: meta.request.id,
                    name: this[symbols_1.kName],
                    context: meta.context,
                    maxResponseSize,
                    maxCompressedResponseSize,
                    signal,
                    timeout: toMs(options.requestTimeout != null ? options.requestTimeout : this[symbols_1.kRequestTimeout]),
                    ...(options.asStream === true ? { asStream: true } : null)
                });
                result.statusCode = statusCode;
                result.headers = headers;
                otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('db.response.status_code', statusCode.toString());
                if (headers['x-found-handling-cluster'] != null) {
                    otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('db.namespace', headers['x-found-handling-cluster']);
                }
                if (headers['x-found-handling-instance'] != null) {
                    otelSpan === null || otelSpan === void 0 ? void 0 : otelSpan.setAttribute('elasticsearch.node.name', headers['x-found-handling-instance']);
                }
                if (this[symbols_1.kProductCheck] != null && headers['x-elastic-product'] !== this[symbols_1.kProductCheck] && statusCode >= 200 && statusCode < 300) {
                    /* eslint-disable @typescript-eslint/prefer-ts-expect-error */
                    // @ts-ignore
                    throw new errors_1.ProductNotSupportedError(this[symbols_1.kProductCheck], result, errorOptions);
                    /* eslint-enable @typescript-eslint/prefer-ts-expect-error */
                }
                if (options.asStream === true) {
                    result.body = body;
                    this[symbols_1.kDiagnostic].emit('response', null, result);
                    return returnMeta ? result : body;
                }
                const contentEncoding = ((_18 = headers['content-encoding']) !== null && _18 !== void 0 ? _18 : '').toLowerCase();
                if (contentEncoding.includes('gzip') || contentEncoding.includes('deflate')) {
                    body = await unzip(body);
                }
                if (Buffer.isBuffer(body) && !(0, BaseConnection_1.isBinary)((_19 = headers['content-type']) !== null && _19 !== void 0 ? _19 : '')) {
                    body = body.toString();
                }
                const isHead = params.method === 'HEAD';
                // we should attempt the payload deserialization only if:
                //    - a `content-type` is defined and is equal to `application/json`
                //    - the request is not a HEAD request
                //    - the payload is not an empty string
                if (headers['content-type'] !== undefined &&
                    (((_20 = headers['content-type']) === null || _20 === void 0 ? void 0 : _20.includes('application/json')) ||
                        ((_21 = headers['content-type']) === null || _21 === void 0 ? void 0 : _21.includes('application/vnd.elasticsearch+json'))) &&
                    !isHead && body !== '') { // eslint-disable-line
                    result.body = this[symbols_1.kSerializer].deserialize(body);
                }
                else {
                    // cast to boolean if the request method was HEAD and there was no error
                    result.body = isHead && statusCode < 400 ? true : body;
                }
                // we should ignore the statusCode if the user has configured the `ignore` field with
                // the statusCode we just got or if the request method is HEAD and the statusCode is 404
                const ignoreStatusCode = (Array.isArray(options.ignore) && options.ignore.includes(statusCode)) ||
                    (isHead && statusCode === 404);
                if (!ignoreStatusCode && (statusCode === 502 || statusCode === 503 || statusCode === 504)) {
                    // if the statusCode is 502/3/4 we should run our retry strategy
                    // and mark the connection as dead
                    this[symbols_1.kConnectionPool].markDead(meta.connection);
                    // retry logic
                    if (meta.attempts < maxRetries) {
                        meta.attempts++;
                        debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params);
                        continue;
                    }
                }
                else {
                    // everything has worked as expected, let's mark
                    // the connection as alive (or confirm it)
                    this[symbols_1.kConnectionPool].markAlive(meta.connection);
                }
                if (!ignoreStatusCode && statusCode >= 400) {
                    throw new errors_1.ResponseError(result, errorOptions);
                }
                else {
                    // cast to boolean if the request method was HEAD
                    if (isHead && statusCode === 404) {
                        result.body = false;
                    }
                    this[symbols_1.kDiagnostic].emit('response', null, result);
                    return returnMeta ? result : result.body;
                }
            }
            catch (error) {
                switch (error.name) {
                    // should not retry
                    case 'ProductNotSupportedError':
                    case 'NoLivingConnectionsError':
                    case 'DeserializationError':
                    case 'ResponseError':
                        this[symbols_1.kDiagnostic].emit('response', error, result);
                        throw error;
                    case 'RequestAbortedError': {
                        meta.aborted = true;
                        // Wrap the error to get a clean stack trace
                        const wrappedError = new errors_1.RequestAbortedError(error.message, result, errorOptions);
                        this[symbols_1.kDiagnostic].emit('response', wrappedError, result);
                        throw wrappedError;
                    }
                    // should maybe retry
                    // @ts-expect-error `case` fallthrough is intentional: should retry if retryOnTimeout is true
                    case 'TimeoutError':
                        if (!this[symbols_1.kRetryOnTimeout]) {
                            const wrappedError = new errors_1.TimeoutError(error.message, result, errorOptions);
                            this[symbols_1.kDiagnostic].emit('response', wrappedError, result);
                            throw wrappedError;
                        }
                    // should retry
                    // eslint-disable-next-line no-fallthrough
                    case 'ConnectionError': {
                        // if there is an error in the connection
                        // let's mark the connection as dead
                        this[symbols_1.kConnectionPool].markDead(meta.connection);
                        if (this[symbols_1.kSniffOnConnectionFault]) {
                            this.sniff({
                                reason: Transport.sniffReasons.SNIFF_ON_CONNECTION_FAULT,
                                requestId: meta.request.id,
                                context: meta.context
                            });
                        }
                        // retry logic
                        if (meta.attempts < maxRetries) {
                            meta.attempts++;
                            debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params);
                            // don't use exponential backoff until retrying on each node
                            if (meta.attempts >= this[symbols_1.kConnectionPool].size) {
                                // exponential backoff on retries, with jitter
                                const backoff = (_22 = options.retryBackoff) !== null && _22 !== void 0 ? _22 : this[symbols_1.kRetryBackoff];
                                const backoffWait = backoff(0, 4, meta.attempts);
                                if (backoffWait > 0) {
                                    await (0, promises_1.setTimeout)(backoffWait * 1000);
                                }
                            }
                            continue;
                        }
                        // Wrap the error to get a clean stack trace
                        const wrappedError = error.name === 'TimeoutError'
                            ? new errors_1.TimeoutError(error.message, result, errorOptions)
                            : new errors_1.ConnectionError(error.message, result, errorOptions);
                        this[symbols_1.kDiagnostic].emit('response', wrappedError, result);
                        throw wrappedError;
                    }
                    // edge cases, such as bad compression
                    default:
                        this[symbols_1.kDiagnostic].emit('response', error, result);
                        throw error;
                }
            }
        }
        return returnMeta ? result : result.body;
    }
    async request(params, options = {}) {
        var _6, _7, _8, _9, _10, _11;
        const otelOptions = Object.assign({}, this[symbols_1.kOtelOptions], (_6 = options.openTelemetry) !== null && _6 !== void 0 ? _6 : {});
        // wrap in OpenTelemetry span
        if (((_7 = otelOptions === null || otelOptions === void 0 ? void 0 : otelOptions.enabled) !== null && _7 !== void 0 ? _7 : true) && ((_8 = params.meta) === null || _8 === void 0 ? void 0 : _8.name) != null) {
            let context = api_1.default.context.active();
            if ((_9 = otelOptions.suppressInternalInstrumentation) !== null && _9 !== void 0 ? _9 : false) {
                context = (0, core_1.suppressTracing)(context);
            }
            // gather OpenTelemetry attributes
            const attributes = {
                'db.system': 'elasticsearch',
                'http.request.method': params.method,
                'db.operation.name': (_10 = params.meta) === null || _10 === void 0 ? void 0 : _10.name
            };
            // add path params as otel attributes
            if (((_11 = params.meta) === null || _11 === void 0 ? void 0 : _11.pathParts) != null) {
                for (const [key, value] of Object.entries(params.meta.pathParts)) {
                    if (value == null)
                        continue;
                    attributes[`db.operation.parameter.${key}`] = value.toString();
                    if (['index', '_index', 'indices'].includes(key)) {
                        let indices = [];
                        if (typeof value === 'string') {
                            indices.push(value);
                        }
                        else if (Array.isArray(value)) {
                            indices = indices.concat(value.map(v => v.toString()));
                        }
                        else if (typeof value === 'object') {
                            try {
                                const keys = Object.keys(value);
                                indices = indices.concat(keys.map(v => v.toString()));
                            }
                            catch {
                                // ignore
                            }
                        }
                        if (indices.length > 0)
                            attributes['db.collection.name'] = indices.join(', ');
                    }
                }
            }
            return await this[symbols_1.kOtelTracer].startActiveSpan(params.meta.name, { attributes, kind: api_1.SpanKind.CLIENT }, context, async (otelSpan) => {
                var _6;
                let response;
                try {
                    response = await this._request(params, options, otelSpan);
                }
                catch (err) {
                    otelSpan.recordException(err);
                    otelSpan.setStatus({ code: api_1.SpanStatusCode.ERROR });
                    otelSpan.setAttribute('error.type', (_6 = err.name) !== null && _6 !== void 0 ? _6 : 'Error');
                    throw err;
                }
                finally {
                    otelSpan.end();
                }
                return response;
            });
        }
        else {
            return await this._request(params, options);
        }
    }
    getConnection(opts) {
        const now = Date.now();
        if (this[symbols_1.kSniffEnabled] && now > this[symbols_1.kNextSniff]) {
            this[symbols_1.kNextSniff] = now + this[symbols_1.kSniffInterval];
            this.sniff({
                reason: Transport.sniffReasons.SNIFF_INTERVAL,
                requestId: opts.requestId,
                context: opts.context
            });
        }
        return this[symbols_1.kConnectionPool].getConnection({
            filter: this[symbols_1.kNodeFilter],
            selector: this[symbols_1.kNodeSelector],
            requestId: opts.requestId,
            name: this[symbols_1.kName],
            context: opts.context,
            now
        });
    }
    /* istanbul ignore next */
    sniff(opts) { }
}
_a = symbols_1.kNodeFilter, _b = symbols_1.kNodeSelector, _c = symbols_1.kHeaders, _d = symbols_1.kDiagnostic, _e = symbols_1.kConnectionPool, _f = symbols_1.kSerializer, _g = symbols_1.kContext, _h = symbols_1.kGenerateRequestId, _j = symbols_1.kOpaqueIdPrefix, _k = symbols_1.kName, _l = symbols_1.kMaxRetries, _m = symbols_1.kCompression, _o = symbols_1.kRequestTimeout, _p = symbols_1.kRetryOnTimeout, _q = symbols_1.kSniffEnabled, _r = symbols_1.kNextSniff, _s = symbols_1.kIsSniffing, _t = symbols_1.kSniffInterval, _u = symbols_1.kSniffOnConnectionFault, _v = symbols_1.kSniffEndpoint, _w = symbols_1.kProductCheck, _x = symbols_1.kMaxResponseSize, _y = symbols_1.kMaxCompressedResponseSize, _z = symbols_1.kJsonContentType, _0 = symbols_1.kNdjsonContentType, _1 = symbols_1.kAcceptHeader, _2 = symbols_1.kRedaction, _3 = symbols_1.kRetryBackoff, _4 = symbols_1.kOtelTracer, _5 = symbols_1.kOtelOptions;
Object.defineProperty(Transport, "sniffReasons", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        SNIFF_ON_START: 'sniff-on-start',
        SNIFF_INTERVAL: 'sniff-interval',
        SNIFF_ON_CONNECTION_FAULT: 'sniff-on-connection-fault',
        DEFAULT: 'default'
    }
});
exports.default = Transport;
function toMs(time) {
    if (typeof time === 'string') {
        return (0, ms_1.default)(time);
    }
    return time;
}
function shouldSerialize(obj) {
    return typeof obj !== 'string' &&
        typeof obj.pipe !== 'function' &&
        !Buffer.isBuffer(obj);
}
function isStream(obj) {
    return obj != null && typeof obj.pipe === 'function';
}
function defaultNodeFilter(node) {
    return true;
}
function roundRobinSelector() {
    let current = -1;
    return function _roundRobinSelector(connections) {
        if (++current >= connections.length) {
            current = 0;
        }
        return connections[current];
    };
}
function generateRequestId() {
    const maxInt = 2147483647;
    let nextReqId = 0;
    return function genReqId(params, options) {
        return (nextReqId = (nextReqId + 1) & maxInt);
    };
}
function lowerCaseHeaders(oldHeaders) {
    if (oldHeaders == null)
        return null;
    const newHeaders = {};
    for (const header in oldHeaders) {
        // @ts-expect-error
        newHeaders[header.toLowerCase()] = oldHeaders[header];
    }
    return newHeaders;
}
/**
 * Function for calculating how long to sleep, in seconds, before the next request retry
 * Uses the AWS "equal jitter" algorithm noted in this post:
 * https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
 * @param min The minimum number of seconds to wait
 * @param max The maximum number of seconds to wait
 * @param attempt How many retry attempts have been made
 * @returns The number of seconds to wait before the next retry
 */
function retryBackoff(min, max, attempt) {
    const ceiling = Math.min(max, 2 ** attempt) / 2;
    return ceiling + ((Math.random() * (ceiling - min)) + min);
}
//# sourceMappingURL=Transport.js.map