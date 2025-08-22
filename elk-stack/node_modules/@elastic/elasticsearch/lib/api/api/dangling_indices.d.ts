import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class DanglingIndices {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete a dangling index. If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling. For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/dangling-index-delete.html | Elasticsearch API documentation}
      */
    deleteDanglingIndex(this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesDeleteDanglingIndexResponse>;
    deleteDanglingIndex(this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesDeleteDanglingIndexResponse, unknown>>;
    deleteDanglingIndex(this: That, params: T.DanglingIndicesDeleteDanglingIndexRequest | TB.DanglingIndicesDeleteDanglingIndexRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesDeleteDanglingIndexResponse>;
    /**
      * Import a dangling index. If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling. For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/dangling-index-import.html | Elasticsearch API documentation}
      */
    importDanglingIndex(this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesImportDanglingIndexResponse>;
    importDanglingIndex(this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesImportDanglingIndexResponse, unknown>>;
    importDanglingIndex(this: That, params: T.DanglingIndicesImportDanglingIndexRequest | TB.DanglingIndicesImportDanglingIndexRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesImportDanglingIndexResponse>;
    /**
      * Get the dangling indices. If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling. For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline. Use this API to list dangling indices, which you can then import or delete.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/dangling-indices-list.html | Elasticsearch API documentation}
      */
    listDanglingIndices(this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DanglingIndicesListDanglingIndicesResponse>;
    listDanglingIndices(this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DanglingIndicesListDanglingIndicesResponse, unknown>>;
    listDanglingIndices(this: That, params?: T.DanglingIndicesListDanglingIndicesRequest | TB.DanglingIndicesListDanglingIndicesRequest, options?: TransportRequestOptions): Promise<T.DanglingIndicesListDanglingIndicesResponse>;
}
export {};
