"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareHeaders = prepareHeaders;
exports.getIssuerCertificate = getIssuerCertificate;
exports.isCaFingerprintMatch = isCaFingerprintMatch;
exports.isBinary = isBinary;
const tslib_1 = require("tslib");
const node_util_1 = require("node:util");
const Diagnostic_1 = tslib_1.__importDefault(require("../Diagnostic"));
const errors_1 = require("../errors");
const symbols_1 = require("../symbols");
/**
 * An HTTP connection to a single Elasticsearch node.
 */
class BaseConnection {
    constructor(opts) {
        var _d, _e, _f, _g, _h, _j, _k;
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tls", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deadCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resurrectTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_openRequests", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "weight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxEventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "roles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        this.url = opts.url;
        this.tls = (_d = opts.tls) !== null && _d !== void 0 ? _d : null;
        this.id = (_e = opts.id) !== null && _e !== void 0 ? _e : stripAuth(opts.url.href);
        this.headers = prepareHeaders(opts.headers, opts.auth);
        this.timeout = (_f = opts.timeout) !== null && _f !== void 0 ? _f : 30000;
        this.deadCount = 0;
        this.resurrectTimeout = 0;
        this.weight = 0;
        this._openRequests = 0;
        this.maxEventListeners = (_g = opts.maxEventListeners) !== null && _g !== void 0 ? _g : 100;
        if (opts.roles != null)
            this.roles = opts.roles;
        this[symbols_1.kStatus] = (_h = opts.status) !== null && _h !== void 0 ? _h : BaseConnection.statuses.ALIVE;
        this[symbols_1.kDiagnostic] = (_j = opts.diagnostic) !== null && _j !== void 0 ? _j : new Diagnostic_1.default();
        this[symbols_1.kCaFingerprint] = (_k = opts.caFingerprint) !== null && _k !== void 0 ? _k : null;
        if (!['http:', 'https:'].includes(this.url.protocol)) {
            throw new errors_1.ConfigurationError(`Invalid protocol: '${this.url.protocol}'`);
        }
    }
    get status() {
        return this[symbols_1.kStatus];
    }
    set status(status) {
        if (!validStatuses.includes(status)) {
            throw new errors_1.ConfigurationError(`Unsupported status: '${status}'`);
        }
        this[symbols_1.kStatus] = status;
    }
    get diagnostic() {
        return this[symbols_1.kDiagnostic];
    }
    async request(params, options) {
        throw new errors_1.ConfigurationError('The request method should be implemented by extended classes');
    }
    /* istanbul ignore next */
    async close() {
        throw new errors_1.ConfigurationError('The close method should be implemented by extended classes');
    }
    // Handles console.log and utils.inspect invocations.
    // We want to hide `auth`, `agent` and `tls` since they made
    // the logs very hard to read. The user can still
    // access them with `instance.agent` and `instance.tls`.
    [(_a = symbols_1.kStatus, _b = symbols_1.kCaFingerprint, _c = symbols_1.kDiagnostic, node_util_1.inspect.custom)](depth, options) {
        const { authorization, ...headers } = this.headers;
        return {
            url: stripAuth(this.url.toString()),
            id: this.id,
            headers,
            status: this.status
        };
    }
    toJSON() {
        const { authorization, ...headers } = this.headers;
        return {
            url: stripAuth(this.url.toString()),
            id: this.id,
            headers,
            status: this.status
        };
    }
}
Object.defineProperty(BaseConnection, "statuses", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        ALIVE: 'alive',
        DEAD: 'dead'
    }
});
exports.default = BaseConnection;
const validStatuses = Object.keys(BaseConnection.statuses)
    // @ts-expect-error
    .map(k => BaseConnection.statuses[k]);
function stripAuth(url) {
    if (!url.includes('@'))
        return url;
    return url.slice(0, url.indexOf('//') + 2) + url.slice(url.indexOf('@') + 1);
}
function prepareHeaders(headers = {}, auth) {
    if (auth != null && headers.authorization == null) {
        /* istanbul ignore else */
        if (isApiKeyAuth(auth)) {
            if (typeof auth.apiKey === 'object') {
                headers.authorization = 'ApiKey ' + Buffer.from(`${auth.apiKey.id}:${auth.apiKey.api_key}`).toString('base64');
            }
            else {
                headers.authorization = `ApiKey ${auth.apiKey}`;
            }
        }
        else if (isBearerAuth(auth)) {
            headers.authorization = `Bearer ${auth.bearer}`;
        }
        else if (auth.username != null && auth.password != null) {
            headers.authorization = 'Basic ' + Buffer.from(`${auth.username}:${auth.password}`).toString('base64');
        }
    }
    return headers;
}
function isApiKeyAuth(auth) {
    return auth.apiKey != null;
}
function isBearerAuth(auth) {
    return auth.bearer != null;
}
function getIssuerCertificate(socket) {
    let certificate = socket.getPeerCertificate(true);
    while (certificate !== null && Object.keys(certificate).length > 0) {
        // invalid certificate
        if (certificate.issuerCertificate == null) {
            return null;
        }
        // We have reached the root certificate.
        // In case of self-signed certificates, `issuerCertificate` may be a circular reference.
        if (certificate.fingerprint256 === certificate.issuerCertificate.fingerprint256) {
            break;
        }
        // continue the loop
        certificate = certificate.issuerCertificate;
    }
    return certificate;
}
function isCaFingerprintMatch(cert1, cert2) {
    if (typeof cert1 === 'string' && typeof cert2 === 'string') {
        const c1 = cert1.toLowerCase().replace(/:/g, '');
        const c2 = cert2.toLowerCase().replace(/:/g, '');
        return c1 === c2;
    }
    return cert1 === cert2;
}
function isBinary(contentType) {
    const binaryTypes = [
        'application/vnd.mapbox-vector-tile',
        'application/vnd.apache.arrow.stream',
        'application/vnd.elasticsearch+arrow+stream',
        'application/smile',
        'application/vnd.elasticsearch+smile',
        'application/cbor',
        'application/vnd.elasticsearch+cbor'
    ];
    return binaryTypes
        .map(type => contentType.includes(type))
        .includes(true);
}
//# sourceMappingURL=BaseConnection.js.map