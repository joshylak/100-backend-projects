import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Count search results. Get the number of documents matching a query. The query can be provided either by using a simple query string as a parameter, or by defining Query DSL within the request body. The query is optional. When no query is provided, the API uses `match_all` to count all the documents. The count API supports multi-target syntax. You can run a single count API search across multiple data streams and indices. The operation is broadcast across all shards. For each shard ID group, a replica is chosen and the search is run against it. This means that replicas increase the scalability of the count.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-count.html | Elasticsearch API documentation}
  */
export default function CountApi(this: That, params?: T.CountRequest | TB.CountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CountResponse>;
export default function CountApi(this: That, params?: T.CountRequest | TB.CountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CountResponse, unknown>>;
export default function CountApi(this: That, params?: T.CountRequest | TB.CountRequest, options?: TransportRequestOptions): Promise<T.CountResponse>;
export {};
