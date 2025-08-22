"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kOtelOptions = exports.kOtelTracer = exports.kRetryBackoff = exports.kRedaction = exports.kAcceptHeader = exports.kNdjsonContentType = exports.kJsonContentType = exports.kMaxCompressedResponseSize = exports.kMaxResponseSize = exports.kCaFingerprint = exports.kProductCheck = exports.kStatus = exports.kJsonOptions = exports.kNodeSelector = exports.kNodeFilter = exports.kHeaders = exports.kDiagnostic = exports.kSerializer = exports.kConnectionPool = exports.kContext = exports.kGenerateRequestId = exports.kOpaqueIdPrefix = exports.kName = exports.kMaxRetries = exports.kCompression = exports.kRetryOnTimeout = exports.kRequestTimeout = exports.kSniffEndpoint = exports.kSniffOnConnectionFault = exports.kSniffInterval = exports.kIsSniffing = exports.kNextSniff = exports.kSniffEnabled = void 0;
exports.kSniffEnabled = Symbol('sniff enabled');
exports.kNextSniff = Symbol('next sniff');
exports.kIsSniffing = Symbol('is sniffing');
exports.kSniffInterval = Symbol('sniff interval');
exports.kSniffOnConnectionFault = Symbol('sniff on connection fault');
exports.kSniffEndpoint = Symbol('sniff endpoint');
exports.kRequestTimeout = Symbol('request timeout');
exports.kRetryOnTimeout = Symbol('retry on timeout');
exports.kCompression = Symbol('compression');
exports.kMaxRetries = Symbol('max retries');
exports.kName = Symbol('name');
exports.kOpaqueIdPrefix = Symbol('opaque id prefix');
exports.kGenerateRequestId = Symbol('generate request id');
exports.kContext = Symbol('context');
exports.kConnectionPool = Symbol('connection pool');
exports.kSerializer = Symbol('serializer');
exports.kDiagnostic = Symbol('diagnostics');
exports.kHeaders = Symbol('headers');
exports.kNodeFilter = Symbol('node filter');
exports.kNodeSelector = Symbol('node selector');
exports.kJsonOptions = Symbol('secure json parse options');
exports.kStatus = Symbol('status');
exports.kProductCheck = Symbol('product check');
exports.kCaFingerprint = Symbol('ca fingerprint');
exports.kMaxResponseSize = Symbol('max response size');
exports.kMaxCompressedResponseSize = Symbol('max compressed response size');
exports.kJsonContentType = Symbol('json content type');
exports.kNdjsonContentType = Symbol('ndjson content type');
exports.kAcceptHeader = Symbol('accept header');
exports.kRedaction = Symbol('redaction');
exports.kRetryBackoff = Symbol('retry backoff');
exports.kOtelTracer = Symbol('opentelemetry tracer');
exports.kOtelOptions = Symbol('opentelemetry options');
//# sourceMappingURL=symbols.js.map