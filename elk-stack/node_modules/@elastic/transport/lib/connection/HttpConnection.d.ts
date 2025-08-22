import hpagent from 'hpagent';
import http from 'node:http';
import https from 'node:https';
import BaseConnection, { ConnectionOptions, ConnectionRequestParams, ConnectionRequestOptions, ConnectionRequestOptionsAsStream, ConnectionRequestResponse, ConnectionRequestResponseAsStream } from './BaseConnection';
/**
 * A connection to an Elasticsearch node, managed by the `http` client in the standard library
 */
export default class HttpConnection extends BaseConnection {
    agent?: http.Agent | https.Agent | hpagent.HttpProxyAgent | hpagent.HttpsProxyAgent;
    makeRequest: typeof http.request | typeof https.request;
    constructor(opts: ConnectionOptions);
    request(params: ConnectionRequestParams, options: ConnectionRequestOptions): Promise<ConnectionRequestResponse>;
    request(params: ConnectionRequestParams, options: ConnectionRequestOptionsAsStream): Promise<ConnectionRequestResponseAsStream>;
    close(): Promise<void>;
    buildRequestObject(params: ConnectionRequestParams, options: ConnectionRequestOptions): http.ClientRequestArgs;
}
