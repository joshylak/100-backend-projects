"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotSupportedError = exports.RequestAbortedError = exports.ResponseError = exports.ConfigurationError = exports.DeserializationError = exports.SerializationError = exports.NoLivingConnectionsError = exports.ConnectionError = exports.TimeoutError = exports.ElasticsearchClientError = void 0;
const security_1 = require("./security");
class ElasticsearchClientError extends Error {
    constructor(message, options) {
        super(message);
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'ElasticsearchClientError';
        this.options = {
            redaction: {
                type: 'replace',
                additionalKeys: []
            }
        };
        if (isObject(options)) {
            this.options.redaction = { ...this.options.redaction, ...options.redaction };
        }
    }
}
exports.ElasticsearchClientError = ElasticsearchClientError;
class TimeoutError extends ElasticsearchClientError {
    constructor(message, meta, options) {
        super(message, options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, TimeoutError);
        this.name = 'TimeoutError';
        this.message = message !== null && message !== void 0 ? message : 'Timeout Error';
        if (isObject(meta))
            meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
        this.meta = meta;
    }
}
exports.TimeoutError = TimeoutError;
class ConnectionError extends ElasticsearchClientError {
    constructor(message, meta, options) {
        super(message, options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, ConnectionError);
        this.name = 'ConnectionError';
        this.message = message !== null && message !== void 0 ? message : 'Connection Error';
        if (isObject(meta))
            meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
        this.meta = meta;
    }
}
exports.ConnectionError = ConnectionError;
class NoLivingConnectionsError extends ElasticsearchClientError {
    constructor(message, meta, options) {
        super(message, options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, NoLivingConnectionsError);
        this.name = 'NoLivingConnectionsError';
        this.message = message !== null && message !== void 0 ? message : 'Given the configuration, the ConnectionPool was not able to find a usable Connection for this request.';
        this.meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
    }
}
exports.NoLivingConnectionsError = NoLivingConnectionsError;
class SerializationError extends ElasticsearchClientError {
    constructor(message, data) {
        super(message);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, SerializationError);
        this.name = 'SerializationError';
        this.message = message !== null && message !== void 0 ? message : 'Serialization Error';
        this.data = data;
    }
}
exports.SerializationError = SerializationError;
class DeserializationError extends ElasticsearchClientError {
    constructor(message, data) {
        super(message);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, DeserializationError);
        this.name = 'DeserializationError';
        this.message = message !== null && message !== void 0 ? message : 'Deserialization Error';
        this.data = data;
    }
}
exports.DeserializationError = DeserializationError;
class ConfigurationError extends ElasticsearchClientError {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this, ConfigurationError);
        this.name = 'ConfigurationError';
        this.message = message !== null && message !== void 0 ? message : 'Configuration Error';
    }
}
exports.ConfigurationError = ConfigurationError;
class ResponseError extends ElasticsearchClientError {
    constructor(meta, options) {
        var _a;
        super('Response Error', options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, ResponseError);
        this.name = 'ResponseError';
        if (meta.statusCode === 410) {
            this.message = 'This API is unavailable in the version of Elasticsearch you are using.';
        }
        else if (isObject(meta.body) && meta.body.error != null && meta.body.error.type != null) {
            this.message = meta.body.error.type;
            if (isObject(meta.body.error.caused_by)) {
                const { type, reason } = meta.body.error.caused_by;
                const causedBy = [
                    '\tCaused by:',
                    `\t\t${type}: ${reason}`
                ].join('\n');
                this.message += `\n${causedBy}`;
            }
            if (Array.isArray(meta.body.error.root_cause) && meta.body.error.root_cause.length !== 0) {
                const formatRootCause = (entry) => `\t\t${entry.type}: ${entry.reason}`;
                const rootCauses = [
                    '\tRoot causes:',
                    ...meta.body.error.root_cause.map(formatRootCause)
                ].join('\n');
                this.message += `\n${rootCauses}`;
            }
        }
        else if (typeof meta.body === 'object' && meta.body != null) {
            this.message = JSON.stringify(meta.body);
        }
        else {
            this.message = (_a = meta.body) !== null && _a !== void 0 ? _a : 'Response Error';
        }
        this.meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
    }
    get body() {
        return this.meta.body;
    }
    get statusCode() {
        if (isObject(this.meta.body) && typeof this.meta.body.status === 'number') {
            return this.meta.body.status;
        }
        return this.meta.statusCode;
    }
    get headers() {
        return this.meta.headers;
    }
}
exports.ResponseError = ResponseError;
class RequestAbortedError extends ElasticsearchClientError {
    constructor(message, meta, options) {
        super(message, options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, RequestAbortedError);
        this.name = 'RequestAbortedError';
        this.message = message !== null && message !== void 0 ? message : 'Request aborted';
        if (isObject(meta))
            meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
        this.meta = meta;
    }
}
exports.RequestAbortedError = RequestAbortedError;
class ProductNotSupportedError extends ElasticsearchClientError {
    constructor(product, meta, options) {
        super('Product Not Supported Error', options);
        Object.defineProperty(this, "meta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Error.captureStackTrace(this, ProductNotSupportedError);
        this.name = 'ProductNotSupportedError';
        this.message = `The client noticed that the server is not ${product} and we do not support this unknown product.`;
        if (isObject(meta))
            meta = (0, security_1.redactDiagnostic)(meta, this.options.redaction);
        this.meta = meta;
    }
}
exports.ProductNotSupportedError = ProductNotSupportedError;
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
//# sourceMappingURL=errors.js.map