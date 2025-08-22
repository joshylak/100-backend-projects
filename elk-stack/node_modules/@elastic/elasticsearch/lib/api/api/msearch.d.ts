import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Run multiple searches. The format of the request is similar to the bulk API format and makes use of the newline delimited JSON (NDJSON) format. The structure is as follows: ``` header\n body\n header\n body\n ``` This structure is specifically optimized to reduce parsing if a specific search ends up redirected to another node. IMPORTANT: The final line of data must end with a newline character `\n`. Each newline character may be preceded by a carriage return `\r`. When sending requests to this endpoint the `Content-Type` header should be set to `application/x-ndjson`.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-multi-search.html | Elasticsearch API documentation}
  */
export default function MsearchApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchRequest | TB.MsearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MsearchResponse<TDocument, TAggregations>>;
export default function MsearchApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchRequest | TB.MsearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MsearchResponse<TDocument, TAggregations>, unknown>>;
export default function MsearchApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchRequest | TB.MsearchRequest, options?: TransportRequestOptions): Promise<T.MsearchResponse<TDocument, TAggregations>>;
export {};
