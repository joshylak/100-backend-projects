import BaseConnection, { ConnectionOptions, ConnectionRequestParams, ConnectionRequestOptions, ConnectionRequestOptionsAsStream, ConnectionRequestResponse, ConnectionRequestResponseAsStream } from './BaseConnection';
import { Pool } from 'undici';
/**
 * A connection to an Elasticsearch node, managed by the Undici HTTP client library
 */
export default class Connection extends BaseConnection {
    pool: Pool;
    constructor(opts: ConnectionOptions);
    request(params: ConnectionRequestParams, options: ConnectionRequestOptions): Promise<ConnectionRequestResponse>;
    request(params: ConnectionRequestParams, options: ConnectionRequestOptionsAsStream): Promise<ConnectionRequestResponseAsStream>;
    close(): Promise<void>;
}
