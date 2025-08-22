import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Graph {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Explore graph analytics. Extract and summarize information about the documents and terms in an Elasticsearch data stream or index. The easiest way to understand the behavior of this API is to use the Graph UI to explore connections. An initial request to the `_explore` API contains a seed query that identifies the documents of interest and specifies the fields that define the vertices and connections you want to include in the graph. Subsequent requests enable you to spider out from one more vertices of interest. You can exclude vertices that have already been returned.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/graph-explore-api.html | Elasticsearch API documentation}
      */
    explore(this: That, params: T.GraphExploreRequest | TB.GraphExploreRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GraphExploreResponse>;
    explore(this: That, params: T.GraphExploreRequest | TB.GraphExploreRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GraphExploreResponse, unknown>>;
    explore(this: That, params: T.GraphExploreRequest | TB.GraphExploreRequest, options?: TransportRequestOptions): Promise<T.GraphExploreResponse>;
}
export {};
