import { inspect } from 'node:util';
import * as http from 'node:http';
import { URL } from 'node:url';
import { ConnectionOptions as TlsConnectionOptions, TLSSocket, DetailedPeerCertificate } from 'node:tls';
import { Readable as ReadableStream } from 'node:stream';
import Diagnostic from '../Diagnostic';
import { ApiKeyAuth, BasicAuth, BearerAuth, HttpAgentOptions, UndiciAgentOptions, agentFn } from '../types';
import { kStatus, kDiagnostic, kCaFingerprint } from '../symbols';
export interface ConnectionRoles {
    master: boolean;
    data: boolean;
    ingest: boolean;
    ml: boolean;
}
export interface ConnectionOptions {
    url: URL;
    tls?: TlsConnectionOptions;
    id?: string;
    headers?: http.IncomingHttpHeaders;
    status?: string;
    auth?: BasicAuth | ApiKeyAuth | BearerAuth;
    diagnostic?: Diagnostic;
    timeout?: number;
    agent?: HttpAgentOptions | UndiciAgentOptions | agentFn | boolean;
    proxy?: string | URL;
    caFingerprint?: string;
    maxEventListeners?: number;
    roles?: ConnectionRoles;
}
export interface ConnectionRequestParams {
    method: string;
    path: string;
    headers?: http.IncomingHttpHeaders;
    body?: string | Buffer | ReadableStream | null;
    querystring?: string;
}
export interface ConnectionRequestOptions {
    requestId: string | number;
    name: string | symbol;
    context: any;
    maxResponseSize?: number;
    maxCompressedResponseSize?: number;
    signal?: AbortSignal;
    timeout?: number;
}
export interface ConnectionRequestOptionsAsStream extends ConnectionRequestOptions {
    asStream: true;
}
export interface ConnectionRequestResponse {
    body: string | Buffer;
    headers: http.IncomingHttpHeaders;
    statusCode: number;
}
export interface ConnectionRequestResponseAsStream {
    body: ReadableStream;
    headers: http.IncomingHttpHeaders;
    statusCode: number;
}
/**
 * An HTTP connection to a single Elasticsearch node.
 */
export default class BaseConnection {
    url: URL;
    tls: TlsConnectionOptions | null;
    id: string;
    timeout: number;
    headers: http.IncomingHttpHeaders;
    deadCount: number;
    resurrectTimeout: number;
    _openRequests: number;
    weight: number;
    maxEventListeners: number;
    roles?: ConnectionRoles;
    [kStatus]: string;
    [kCaFingerprint]: string | null;
    [kDiagnostic]: Diagnostic;
    static statuses: {
        ALIVE: string;
        DEAD: string;
    };
    constructor(opts: ConnectionOptions);
    get status(): string;
    set status(status: string);
    get diagnostic(): Diagnostic;
    request(params: ConnectionRequestParams, options: ConnectionRequestOptions): Promise<ConnectionRequestResponse>;
    request(params: ConnectionRequestParams, options: ConnectionRequestOptionsAsStream): Promise<ConnectionRequestResponseAsStream>;
    close(): Promise<void>;
    [inspect.custom](depth: number, options: Record<string, any>): Record<string, any>;
    toJSON(): Record<string, any>;
}
export declare function prepareHeaders(headers?: http.IncomingHttpHeaders, auth?: BasicAuth | ApiKeyAuth | BearerAuth): http.IncomingHttpHeaders;
export declare function getIssuerCertificate(socket: TLSSocket): DetailedPeerCertificate | null;
export declare function isCaFingerprintMatch(cert1: string | null, cert2: string | null): boolean;
export declare function isBinary(contentType: string | string[]): boolean;
