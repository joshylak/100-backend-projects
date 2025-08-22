import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Sql {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Clear an SQL search cursor.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/clear-sql-cursor-api.html | Elasticsearch API documentation}
      */
    clearCursor(this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlClearCursorResponse>;
    clearCursor(this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlClearCursorResponse, unknown>>;
    clearCursor(this: That, params: T.SqlClearCursorRequest | TB.SqlClearCursorRequest, options?: TransportRequestOptions): Promise<T.SqlClearCursorResponse>;
    /**
      * Delete an async SQL search. Delete an async SQL search or a stored synchronous SQL search. If the search is still running, the API cancels it. If the Elasticsearch security features are enabled, only the following users can use this API to delete a search: * Users with the `cancel_task` cluster privilege. * The user who first submitted the search.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-async-sql-search-api.html | Elasticsearch API documentation}
      */
    deleteAsync(this: That, params: T.SqlDeleteAsyncRequest | TB.SqlDeleteAsyncRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlDeleteAsyncResponse>;
    deleteAsync(this: That, params: T.SqlDeleteAsyncRequest | TB.SqlDeleteAsyncRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlDeleteAsyncResponse, unknown>>;
    deleteAsync(this: That, params: T.SqlDeleteAsyncRequest | TB.SqlDeleteAsyncRequest, options?: TransportRequestOptions): Promise<T.SqlDeleteAsyncResponse>;
    /**
      * Get async SQL search results. Get the current status and available results for an async SQL search or stored synchronous SQL search. If the Elasticsearch security features are enabled, only the user who first submitted the SQL search can retrieve the search using this API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-async-sql-search-api.html | Elasticsearch API documentation}
      */
    getAsync(this: That, params: T.SqlGetAsyncRequest | TB.SqlGetAsyncRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlGetAsyncResponse>;
    getAsync(this: That, params: T.SqlGetAsyncRequest | TB.SqlGetAsyncRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlGetAsyncResponse, unknown>>;
    getAsync(this: That, params: T.SqlGetAsyncRequest | TB.SqlGetAsyncRequest, options?: TransportRequestOptions): Promise<T.SqlGetAsyncResponse>;
    /**
      * Get the async SQL search status. Get the current status of an async SQL search or a stored synchronous SQL search.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-async-sql-search-status-api.html | Elasticsearch API documentation}
      */
    getAsyncStatus(this: That, params: T.SqlGetAsyncStatusRequest | TB.SqlGetAsyncStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlGetAsyncStatusResponse>;
    getAsyncStatus(this: That, params: T.SqlGetAsyncStatusRequest | TB.SqlGetAsyncStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlGetAsyncStatusResponse, unknown>>;
    getAsyncStatus(this: That, params: T.SqlGetAsyncStatusRequest | TB.SqlGetAsyncStatusRequest, options?: TransportRequestOptions): Promise<T.SqlGetAsyncStatusResponse>;
    /**
      * Get SQL search results. Run an SQL request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/sql-search-api.html | Elasticsearch API documentation}
      */
    query(this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlQueryResponse>;
    query(this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlQueryResponse, unknown>>;
    query(this: That, params?: T.SqlQueryRequest | TB.SqlQueryRequest, options?: TransportRequestOptions): Promise<T.SqlQueryResponse>;
    /**
      * Translate SQL into Elasticsearch queries. Translate an SQL search into a search API request containing Query DSL. It accepts the same request body parameters as the SQL search API, excluding `cursor`.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/sql-translate-api.html | Elasticsearch API documentation}
      */
    translate(this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SqlTranslateResponse>;
    translate(this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SqlTranslateResponse, unknown>>;
    translate(this: That, params: T.SqlTranslateRequest | TB.SqlTranslateRequest, options?: TransportRequestOptions): Promise<T.SqlTranslateResponse>;
}
export {};
