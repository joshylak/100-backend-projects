import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class SearchApplication {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete a search application. Remove a search application and its associated alias. Indices attached to the search application are not removed.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-search-application.html | Elasticsearch API documentation}
      */
    delete(this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationDeleteResponse>;
    delete(this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationDeleteResponse, unknown>>;
    delete(this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationDeleteResponse>;
    /**
      * Delete a behavioral analytics collection. The associated data stream is also deleted.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-analytics-collection.html | Elasticsearch API documentation}
      */
    deleteBehavioralAnalytics(this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationDeleteBehavioralAnalyticsResponse>;
    deleteBehavioralAnalytics(this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationDeleteBehavioralAnalyticsResponse, unknown>>;
    deleteBehavioralAnalytics(this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationDeleteBehavioralAnalyticsResponse>;
    /**
      * Get search application details.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-search-application.html | Elasticsearch API documentation}
      */
    get(this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationGetResponse>;
    get(this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationGetResponse, unknown>>;
    get(this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationGetResponse>;
    /**
      * Get behavioral analytics collections.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/list-analytics-collection.html | Elasticsearch API documentation}
      */
    getBehavioralAnalytics(this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationGetBehavioralAnalyticsResponse>;
    getBehavioralAnalytics(this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationGetBehavioralAnalyticsResponse, unknown>>;
    getBehavioralAnalytics(this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationGetBehavioralAnalyticsResponse>;
    /**
      * Get search applications. Get information about search applications.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/list-analytics-collection.html | Elasticsearch API documentation}
      */
    list(this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationListResponse>;
    list(this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationListResponse, unknown>>;
    list(this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationListResponse>;
    /**
      * Create a behavioral analytics collection event.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/post-analytics-collection-event.html | Elasticsearch API documentation}
      */
    postBehavioralAnalyticsEvent(this: That, params: T.SearchApplicationPostBehavioralAnalyticsEventRequest | TB.SearchApplicationPostBehavioralAnalyticsEventRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationPostBehavioralAnalyticsEventResponse>;
    postBehavioralAnalyticsEvent(this: That, params: T.SearchApplicationPostBehavioralAnalyticsEventRequest | TB.SearchApplicationPostBehavioralAnalyticsEventRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationPostBehavioralAnalyticsEventResponse, unknown>>;
    postBehavioralAnalyticsEvent(this: That, params: T.SearchApplicationPostBehavioralAnalyticsEventRequest | TB.SearchApplicationPostBehavioralAnalyticsEventRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationPostBehavioralAnalyticsEventResponse>;
    /**
      * Create or update a search application.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-search-application.html | Elasticsearch API documentation}
      */
    put(this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationPutResponse>;
    put(this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationPutResponse, unknown>>;
    put(this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationPutResponse>;
    /**
      * Create a behavioral analytics collection.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-analytics-collection.html | Elasticsearch API documentation}
      */
    putBehavioralAnalytics(this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationPutBehavioralAnalyticsResponse>;
    putBehavioralAnalytics(this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationPutBehavioralAnalyticsResponse, unknown>>;
    putBehavioralAnalytics(this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationPutBehavioralAnalyticsResponse>;
    /**
      * Render a search application query. Generate an Elasticsearch query using the specified query parameters and the search template associated with the search application or a default template if none is specified. If a parameter used in the search template is not specified in `params`, the parameter's default value will be used. The API returns the specific Elasticsearch query that would be generated and run by calling the search application search API. You must have `read` privileges on the backing alias of the search application.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-application-render-query.html | Elasticsearch API documentation}
      */
    renderQuery(this: That, params: T.SearchApplicationRenderQueryRequest | TB.SearchApplicationRenderQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationRenderQueryResponse>;
    renderQuery(this: That, params: T.SearchApplicationRenderQueryRequest | TB.SearchApplicationRenderQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationRenderQueryResponse, unknown>>;
    renderQuery(this: That, params: T.SearchApplicationRenderQueryRequest | TB.SearchApplicationRenderQueryRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationRenderQueryResponse>;
    /**
      * Run a search application search. Generate and run an Elasticsearch query that uses the specified query parameteter and the search template associated with the search application or default template. Unspecified template parameters are assigned their default values if applicable.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-application-search.html | Elasticsearch API documentation}
      */
    search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationSearchResponse<TDocument, TAggregations>>;
    search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationSearchResponse<TDocument, TAggregations>, unknown>>;
    search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationSearchResponse<TDocument, TAggregations>>;
}
export {};
