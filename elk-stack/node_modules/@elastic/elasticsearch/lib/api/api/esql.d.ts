import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Esql {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Run an async ES|QL query. Asynchronously run an ES|QL (Elasticsearch query language) query, monitor its progress, and retrieve results when they become available. The API accepts the same parameters and request body as the synchronous query API, along with additional async related properties.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/esql-async-query-api.html | Elasticsearch API documentation}
      */
    asyncQuery(this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryResponse>;
    asyncQuery(this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryResponse, unknown>>;
    asyncQuery(this: That, params: T.EsqlAsyncQueryRequest | TB.EsqlAsyncQueryRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryResponse>;
    /**
      * Delete an async ES|QL query. If the query is still running, it is cancelled. Otherwise, the stored results are deleted. If the Elasticsearch security features are enabled, only the following users can use this API to delete a query: * The authenticated user that submitted the original query request * Users with the `cancel_task` cluster privilege
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/esql-async-query-delete-api.html | Elasticsearch API documentation}
      */
    asyncQueryDelete(this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryDeleteResponse>;
    asyncQueryDelete(this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryDeleteResponse, unknown>>;
    asyncQueryDelete(this: That, params: T.EsqlAsyncQueryDeleteRequest | TB.EsqlAsyncQueryDeleteRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryDeleteResponse>;
    /**
      * Get async ES|QL query results. Get the current status and available results or stored results for an ES|QL asynchronous query. If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can retrieve the results using this API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/esql-async-query-get-api.html | Elasticsearch API documentation}
      */
    asyncQueryGet(this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryGetResponse>;
    asyncQueryGet(this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryGetResponse, unknown>>;
    asyncQueryGet(this: That, params: T.EsqlAsyncQueryGetRequest | TB.EsqlAsyncQueryGetRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryGetResponse>;
    /**
      * Stop async ES|QL query. This API interrupts the query execution and returns the results so far. If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can stop it.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/esql-async-query-stop-api.html | Elasticsearch API documentation}
      */
    asyncQueryStop(this: That, params: T.EsqlAsyncQueryStopRequest | TB.EsqlAsyncQueryStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlAsyncQueryStopResponse>;
    asyncQueryStop(this: That, params: T.EsqlAsyncQueryStopRequest | TB.EsqlAsyncQueryStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlAsyncQueryStopResponse, unknown>>;
    asyncQueryStop(this: That, params: T.EsqlAsyncQueryStopRequest | TB.EsqlAsyncQueryStopRequest, options?: TransportRequestOptions): Promise<T.EsqlAsyncQueryStopResponse>;
    /**
      * Run an ES|QL query. Get search results for an ES|QL (Elasticsearch query language) query.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/esql-rest.html | Elasticsearch API documentation}
      */
    query(this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EsqlQueryResponse>;
    query(this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EsqlQueryResponse, unknown>>;
    query(this: That, params: T.EsqlQueryRequest | TB.EsqlQueryRequest, options?: TransportRequestOptions): Promise<T.EsqlQueryResponse>;
}
export {};
