import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class SearchableSnapshots {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Get cache statistics. Get statistics about the shared cache for partially mounted indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/searchable-snapshots-api-cache-stats.html | Elasticsearch API documentation}
      */
    cacheStats(this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsCacheStatsResponse>;
    cacheStats(this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsCacheStatsResponse, unknown>>;
    cacheStats(this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsCacheStatsResponse>;
    /**
      * Clear the cache. Clear indices and data streams from the shared cache for partially mounted indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/searchable-snapshots-api-clear-cache.html | Elasticsearch API documentation}
      */
    clearCache(this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsClearCacheResponse>;
    clearCache(this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsClearCacheResponse, unknown>>;
    clearCache(this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsClearCacheResponse>;
    /**
      * Mount a snapshot. Mount a snapshot as a searchable snapshot index. Do not use this API for snapshots managed by index lifecycle management (ILM). Manually mounting ILM-managed snapshots can interfere with ILM processes.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/searchable-snapshots-api-mount-snapshot.html | Elasticsearch API documentation}
      */
    mount(this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsMountResponse>;
    mount(this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsMountResponse, unknown>>;
    mount(this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsMountResponse>;
    /**
      * Get searchable snapshot statistics.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/searchable-snapshots-api-stats.html | Elasticsearch API documentation}
      */
    stats(this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsStatsResponse>;
    stats(this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsStatsResponse, unknown>>;
    stats(this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsStatsResponse>;
}
export {};
