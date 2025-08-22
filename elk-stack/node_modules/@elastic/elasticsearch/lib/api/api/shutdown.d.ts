import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Shutdown {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Cancel node shutdown preparations. Remove a node from the shutdown list so it can resume normal operations. You must explicitly clear the shutdown request when a node rejoins the cluster or when a node has permanently left the cluster. Shutdown requests are never removed automatically by Elasticsearch. NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported. If the operator privileges feature is enabled, you must be an operator to use this API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-shutdown.html | Elasticsearch API documentation}
      */
    deleteNode(this: That, params: T.ShutdownDeleteNodeRequest | TB.ShutdownDeleteNodeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ShutdownDeleteNodeResponse>;
    deleteNode(this: That, params: T.ShutdownDeleteNodeRequest | TB.ShutdownDeleteNodeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ShutdownDeleteNodeResponse, unknown>>;
    deleteNode(this: That, params: T.ShutdownDeleteNodeRequest | TB.ShutdownDeleteNodeRequest, options?: TransportRequestOptions): Promise<T.ShutdownDeleteNodeResponse>;
    /**
      * Get the shutdown status. Get information about nodes that are ready to be shut down, have shut down preparations still in progress, or have stalled. The API returns status information for each part of the shut down process. NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported. If the operator privileges feature is enabled, you must be an operator to use this API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-shutdown.html | Elasticsearch API documentation}
      */
    getNode(this: That, params?: T.ShutdownGetNodeRequest | TB.ShutdownGetNodeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ShutdownGetNodeResponse>;
    getNode(this: That, params?: T.ShutdownGetNodeRequest | TB.ShutdownGetNodeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ShutdownGetNodeResponse, unknown>>;
    getNode(this: That, params?: T.ShutdownGetNodeRequest | TB.ShutdownGetNodeRequest, options?: TransportRequestOptions): Promise<T.ShutdownGetNodeResponse>;
    /**
      * Prepare a node to be shut down. NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported. If you specify a node that is offline, it will be prepared for shut down when it rejoins the cluster. If the operator privileges feature is enabled, you must be an operator to use this API. The API migrates ongoing tasks and index shards to other nodes as needed to prepare a node to be restarted or shut down and removed from the cluster. This ensures that Elasticsearch can be stopped safely with minimal disruption to the cluster. You must specify the type of shutdown: `restart`, `remove`, or `replace`. If a node is already being prepared for shutdown, you can use this API to change the shutdown type. IMPORTANT: This API does NOT terminate the Elasticsearch process. Monitor the node shutdown status to determine when it is safe to stop Elasticsearch.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-shutdown.html | Elasticsearch API documentation}
      */
    putNode(this: That, params: T.ShutdownPutNodeRequest | TB.ShutdownPutNodeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ShutdownPutNodeResponse>;
    putNode(this: That, params: T.ShutdownPutNodeRequest | TB.ShutdownPutNodeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ShutdownPutNodeResponse, unknown>>;
    putNode(this: That, params: T.ShutdownPutNodeRequest | TB.ShutdownPutNodeRequest, options?: TransportRequestOptions): Promise<T.ShutdownPutNodeResponse>;
}
export {};
