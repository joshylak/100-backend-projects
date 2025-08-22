import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Run a scrolling search. IMPORTANT: The scroll API is no longer recommend for deep pagination. If you need to preserve the index state while paging through more than 10,000 hits, use the `search_after` parameter with a point in time (PIT). The scroll API gets large sets of results from a single scrolling search request. To get the necessary scroll ID, submit a search API request that includes an argument for the `scroll` query parameter. The `scroll` parameter indicates how long Elasticsearch should retain the search context for the request. The search response returns a scroll ID in the `_scroll_id` response body parameter. You can then use the scroll ID with the scroll API to retrieve the next batch of results for the request. If the Elasticsearch security features are enabled, the access to the results of a specific scroll ID is restricted to the user or API key that submitted the search. You can also use the scroll API to specify a new scroll parameter that extends or shortens the retention period for the search context. IMPORTANT: Results from a scrolling search reflect the state of the index at the time of the initial search request. Subsequent indexing or document changes only affect later search and scroll requests.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/scroll-api.html | Elasticsearch API documentation}
  */
export default function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ScrollResponse<TDocument, TAggregations>>;
export default function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ScrollResponse<TDocument, TAggregations>, unknown>>;
export default function ScrollApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.ScrollRequest | TB.ScrollRequest, options?: TransportRequestOptions): Promise<T.ScrollResponse<TDocument, TAggregations>>;
export {};
