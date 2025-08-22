import { ConnectionOptions as TlsConnectionOptions } from 'node:tls';
import { URL } from 'node:url';
import { Transport, Serializer, Diagnostic, BaseConnectionPool } from '@elastic/transport';
import { HttpAgentOptions, UndiciAgentOptions, agentFn, nodeFilterFn, nodeSelectorFn, generateRequestIdFn, BasicAuth, ApiKeyAuth, BearerAuth, Context } from '@elastic/transport/lib/types';
import { RedactionOptions } from '@elastic/transport/lib/Transport';
import BaseConnection from '@elastic/transport/lib/connection/BaseConnection';
import SniffingTransport from './sniffingTransport';
import Helpers from './helpers';
import API from './api';
export interface NodeOptions {
    /** @property url Elasticsearch node's location */
    url: URL;
    id?: string;
    /** @property agent Custom HTTP agent options */
    agent?: HttpAgentOptions | UndiciAgentOptions;
    /** @property ssl Overrides default TLS connection settings */
    ssl?: TlsConnectionOptions;
    /** @property headers Custom HTTP headers that should be sent with each request */
    headers?: Record<string, any>;
    /** @property roles Common Elasticsearch roles that can be assigned to this node. Can be helpful when writing custom nodeFilter or nodeSelector functions. */
    roles?: {
        master: boolean;
        data: boolean;
        ingest: boolean;
        ml: boolean;
    };
}
export interface ClientOptions {
    /** @property node Elasticsearch node settings, if there is only one node. Required if `nodes` or `cloud` is not set. */
    node?: string | string[] | NodeOptions | NodeOptions[];
    /** @property nodes Elasticsearch node settings, if there are multiple nodes. Required if `node` or `cloud` is not set. */
    nodes?: string | string[] | NodeOptions | NodeOptions[];
    /** @property Connection HTTP connection class to use
      * @defaultValue `UndiciConnection` */
    Connection?: typeof BaseConnection;
    /** @property ConnectionPool HTTP connection pool class to use
      * @defaultValue `CloudConnectionPool`, if connecting to Elastic Cloud, otherwise `WeightedConnectionPool` */
    ConnectionPool?: typeof BaseConnectionPool;
    /** @property Transport Elastic transport class to use
      * @defaultValue `Transport` */
    Transport?: typeof Transport;
    /** @property Serializer Serialization class to use
      * @defaultValue `Serializer` */
    Serializer?: typeof Serializer;
    /** @property maxRetries Max number of retries for each request
      * @defaultValue 3 */
    maxRetries?: number;
    /** @property requestTimeout Max request timeout in milliseconds for each request
      * @defaultValue 30000 */
    requestTimeout?: number;
    /** @property pingTimeout Max number of milliseconds a `ClusterConnectionPool` will wait when pinging nodes before marking them dead
      * @defaultValue 3000 */
    pingTimeout?: number;
    /** @property sniffInterval Perform a sniff operation every `n` milliseconds
      * @remarks Sniffing might not be the best solution for you. Read https://www.elastic.co/blog/elasticsearch-sniffing-best-practices-what-when-why-how to learn more.
      * @defaultValue */
    sniffInterval?: number | boolean;
    /** @property sniffOnStart Perform a sniff once the client is started
      * @remarks Sniffing might not be the best solution for you. Read https://www.elastic.co/blog/elasticsearch-sniffing-best-practices-what-when-why-how to learn more.
      * @defaultValue false */
    sniffOnStart?: boolean;
    /** @property sniffEndpoint Endpoint to ping during a sniff
      * @remarks Sniffing might not be the best solution for you. Read https://www.elastic.co/blog/elasticsearch-sniffing-best-practices-what-when-why-how to learn more.
      * @defaultValue "_nodes/_all/http" */
    sniffEndpoint?: string;
    /** @property sniffOnConnectionFault Perform a sniff on connection fault
      * @remarks Sniffing might not be the best solution for you. Read https://www.elastic.co/blog/elasticsearch-sniffing-best-practices-what-when-why-how to learn more.
      * @defaultValue false */
    sniffOnConnectionFault?: boolean;
    /** @property resurrectStrategy Strategy for resurrecting dead nodes when using `ClusterConnectionPool`. 'ping' will issue a test request to a node and resurrect it if it responds. 'optimistic' marks a node as alive without testing it. 'none` will never attempt to revive a dead connection.
      * @defaultValue 'ping' */
    resurrectStrategy?: 'ping' | 'optimistic' | 'none';
    /** @property compression Enables gzip request body compression
      * @defaultValue `true` if connecting to Elastic Cloud, otherwise `false`. */
    compression?: boolean;
    /** @property tls [TLS configuraton](https://nodejs.org/api/tls.html)
      * @defaultValue null */
    tls?: TlsConnectionOptions;
    /** @property agent Custom HTTP agent options
      * @defaultValue null */
    agent?: HttpAgentOptions | UndiciAgentOptions | agentFn | false;
    /** @property nodeFilter A custom function used by the connection pool to determine which nodes are qualified to receive a request
      * @defaultValue A function that uses the Connection `roles` property to avoid master-only nodes */
    nodeFilter?: nodeFilterFn;
    /** @property nodeSelector A custom function used by the connection pool to determine which node should receive the next request
      * @defaultValue A "round robin" function that loops sequentially through each node in the pool. */
    nodeSelector?: nodeSelectorFn;
    /** @property headers Custom HTTP headers that should be sent with each request
      * @defaultValue An object with a custom `user-agent` header */
    headers?: Record<string, any>;
    /** @property opaqueIdPrefix A string prefix to apply to every generated X-Opaque-Id header
      * @defaultValue null */
    opaqueIdPrefix?: string;
    /** @property generateRequestId A custom function for generating unique IDs for each request, to make it easier to associate each API request to a single response
      * @defaultValue A function that increments a number counter starting from 1 */
    generateRequestId?: generateRequestIdFn;
    /** @property name A name for this client
      * @defaultValue 'elasticsearch-js' */
    name?: string | symbol;
    /** @property auth Authentication options for this Elasticsearch cluster
      * @defaultValue null */
    auth?: BasicAuth | ApiKeyAuth | BearerAuth;
    /** @property context A custom object attached to each request that can be used to pass data to client events
      * @defaultValue null */
    context?: Context;
    /** @property proxy A proxy URL that, when provided, the client will automatically send all requests through
      * @defaultValue null */
    proxy?: string | URL;
    /** @property enableMetaHeader If true, adds an header named `x-elastic-client-meta`, containing a small amount of high-level telemetry data, such as the client and platform version
      * @defaultValue true */
    enableMetaHeader?: boolean;
    /** @property cloud Custom configuration for connecting to Elastic Cloud, in lieu of a `node` or `nodes` configuration
      * @remarks Read https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-connecting.html#client-usage for more details
      * @defaultValue null */
    cloud?: {
        id: string;
    };
    /** @property disablePrototypePoisoningProtection Disables safe JSON parsing that protects execution of prototype poisoning attacks; disabled by default, as it can introduce a performance penalty
      * @defaultValue true */
    disablePrototypePoisoningProtection?: boolean | 'proto' | 'constructor';
    /** @property caFingerprint If configured, verifies that the fingerprint of the CA certificate that has signed the certificate of the server matches the supplied fingerprint; only accepts SHA256 digest fingerprints
      * @defaultValue null */
    caFingerprint?: string;
    /** @property maxResponseSize When configured, verifies that the uncompressed response size is lower than the configured number. If it's higher, it will abort the request. It cannot be higher than `buffer.constants.MAX_STRING_LENGTH`
      * @defaultValue null */
    maxResponseSize?: number;
    /** @property maxCompressedResponseSize When configured, verifies that the compressed response size is lower than the configured number. If it's higher, it will abort the request. It cannot be higher than `buffer.constants.MAX_LENGTH`
      * @defaultValue null */
    maxCompressedResponseSize?: number;
    /** @property redaction Options for how to redact potentially sensitive data from metadata attached to `Error` objects
      * @remarks Read https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/advanced-config.html#redaction for more details
      * @defaultValue Configuration that will replace known sources of sensitive data */
    redaction?: RedactionOptions;
}
export default class Client extends API {
    diagnostic: Diagnostic;
    name: string | symbol;
    connectionPool: BaseConnectionPool;
    transport: SniffingTransport;
    serializer: Serializer;
    helpers: Helpers;
    constructor(opts: ClientOptions);
    /**
     * Creates a child client instance that shared its connection pool with the parent client
     * @see {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/child.html}
     */
    child(opts: ClientOptions): Client;
    /**
     * Closes all connections in the connection pool. Connections shared with any parent or child instances will also be closed.
     */
    close(): Promise<void>;
}
