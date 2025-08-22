import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Indices {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Add an index block. Add an index block to an index. Index blocks limit the operations allowed on an index by blocking specific operation types.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/index-modules-blocks.html#add-index-block | Elasticsearch API documentation}
      */
    addBlock(this: That, params: T.IndicesAddBlockRequest | TB.IndicesAddBlockRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesAddBlockResponse>;
    addBlock(this: That, params: T.IndicesAddBlockRequest | TB.IndicesAddBlockRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesAddBlockResponse, unknown>>;
    addBlock(this: That, params: T.IndicesAddBlockRequest | TB.IndicesAddBlockRequest, options?: TransportRequestOptions): Promise<T.IndicesAddBlockResponse>;
    /**
      * Get tokens from text analysis. The analyze API performs analysis on a text string and returns the resulting tokens. Generating excessive amount of tokens may cause a node to run out of memory. The `index.analyze.max_token_count` setting enables you to limit the number of tokens that can be produced. If more than this limit of tokens gets generated, an error occurs. The `_analyze` endpoint without a specified index will always use `10000` as its limit.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-analyze | Elasticsearch API documentation}
      */
    analyze(this: That, params?: T.IndicesAnalyzeRequest | TB.IndicesAnalyzeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesAnalyzeResponse>;
    analyze(this: That, params?: T.IndicesAnalyzeRequest | TB.IndicesAnalyzeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesAnalyzeResponse, unknown>>;
    analyze(this: That, params?: T.IndicesAnalyzeRequest | TB.IndicesAnalyzeRequest, options?: TransportRequestOptions): Promise<T.IndicesAnalyzeResponse>;
    /**
      * Cancel a migration reindex operation. Cancel a migration reindex attempt for a data stream or index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/migrate-data-stream.html | Elasticsearch API documentation}
      */
    cancelMigrateReindex(this: That, params: T.IndicesCancelMigrateReindexRequest | TB.IndicesCancelMigrateReindexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCancelMigrateReindexResponse>;
    cancelMigrateReindex(this: That, params: T.IndicesCancelMigrateReindexRequest | TB.IndicesCancelMigrateReindexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCancelMigrateReindexResponse, unknown>>;
    cancelMigrateReindex(this: That, params: T.IndicesCancelMigrateReindexRequest | TB.IndicesCancelMigrateReindexRequest, options?: TransportRequestOptions): Promise<T.IndicesCancelMigrateReindexResponse>;
    /**
      * Clear the cache. Clear the cache of one or more indices. For data streams, the API clears the caches of the stream's backing indices. By default, the clear cache API clears all caches. To clear only specific caches, use the `fielddata`, `query`, or `request` parameters. To clear the cache only of specific fields, use the `fields` parameter.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-clearcache.html | Elasticsearch API documentation}
      */
    clearCache(this: That, params?: T.IndicesClearCacheRequest | TB.IndicesClearCacheRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesClearCacheResponse>;
    clearCache(this: That, params?: T.IndicesClearCacheRequest | TB.IndicesClearCacheRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesClearCacheResponse, unknown>>;
    clearCache(this: That, params?: T.IndicesClearCacheRequest | TB.IndicesClearCacheRequest, options?: TransportRequestOptions): Promise<T.IndicesClearCacheResponse>;
    /**
      * Clone an index. Clone an existing index into a new index. Each original primary shard is cloned into a new primary shard in the new index. IMPORTANT: Elasticsearch does not apply index templates to the resulting index. The API also does not copy index metadata from the original index. Index metadata includes aliases, index lifecycle management phase definitions, and cross-cluster replication (CCR) follower information. For example, if you clone a CCR follower index, the resulting clone will not be a follower index. The clone API copies most index settings from the source index to the resulting index, with the exception of `index.number_of_replicas` and `index.auto_expand_replicas`. To set the number of replicas in the resulting index, configure these settings in the clone request. Cloning works as follows: * First, it creates a new target index with the same definition as the source index. * Then it hard-links segments from the source index into the target index. If the file system does not support hard-linking, all segments are copied into the new index, which is a much more time consuming process. * Finally, it recovers the target index as though it were a closed index which had just been re-opened. IMPORTANT: Indices can only be cloned if they meet the following requirements: * The index must be marked as read-only and have a cluster health status of green. * The target index must not exist. * The source index must have the same number of primary shards as the target index. * The node handling the clone process must have sufficient free disk space to accommodate a second copy of the existing index. The current write index on a data stream cannot be cloned. In order to clone the current write index, the data stream must first be rolled over so that a new write index is created and then the previous write index can be cloned. NOTE: Mappings cannot be specified in the `_clone` request. The mappings of the source index will be used for the target index. **Monitor the cloning process** The cloning process can be monitored with the cat recovery API or the cluster health API can be used to wait until all primary shards have been allocated by setting the `wait_for_status` parameter to `yellow`. The `_clone` API returns as soon as the target index has been added to the cluster state, before any shards have been allocated. At this point, all shards are in the state unassigned. If, for any reason, the target index can't be allocated, its primary shard will remain unassigned until it can be allocated on that node. Once the primary shard is allocated, it moves to state initializing, and the clone process begins. When the clone operation completes, the shard will become active. At that point, Elasticsearch will try to allocate any replicas and may decide to relocate the primary shard to another node. **Wait for active shards** Because the clone operation creates a new index to clone the shards to, the wait for active shards setting on index creation applies to the clone index action as well.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-clone-index.html | Elasticsearch API documentation}
      */
    clone(this: That, params: T.IndicesCloneRequest | TB.IndicesCloneRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCloneResponse>;
    clone(this: That, params: T.IndicesCloneRequest | TB.IndicesCloneRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCloneResponse, unknown>>;
    clone(this: That, params: T.IndicesCloneRequest | TB.IndicesCloneRequest, options?: TransportRequestOptions): Promise<T.IndicesCloneResponse>;
    /**
      * Close an index. A closed index is blocked for read or write operations and does not allow all operations that opened indices allow. It is not possible to index documents or to search for documents in a closed index. Closed indices do not have to maintain internal data structures for indexing or searching documents, which results in a smaller overhead on the cluster. When opening or closing an index, the master node is responsible for restarting the index shards to reflect the new state of the index. The shards will then go through the normal recovery process. The data of opened and closed indices is automatically replicated by the cluster to ensure that enough shard copies are safely kept around at all times. You can open and close multiple indices. An error is thrown if the request explicitly refers to a missing index. This behaviour can be turned off using the `ignore_unavailable=true` parameter. By default, you must explicitly name the indices you are opening or closing. To open or close indices with `_all`, `*`, or other wildcard expressions, change the` action.destructive_requires_name` setting to `false`. This setting can also be changed with the cluster update settings API. Closed indices consume a significant amount of disk-space which can cause problems in managed environments. Closing indices can be turned off with the cluster settings API by setting `cluster.indices.close.enable` to `false`.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-close.html | Elasticsearch API documentation}
      */
    close(this: That, params: T.IndicesCloseRequest | TB.IndicesCloseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCloseResponse>;
    close(this: That, params: T.IndicesCloseRequest | TB.IndicesCloseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCloseResponse, unknown>>;
    close(this: That, params: T.IndicesCloseRequest | TB.IndicesCloseRequest, options?: TransportRequestOptions): Promise<T.IndicesCloseResponse>;
    /**
      * Create an index. You can use the create index API to add a new index to an Elasticsearch cluster. When creating an index, you can specify the following: * Settings for the index. * Mappings for fields in the index. * Index aliases **Wait for active shards** By default, index creation will only return a response to the client when the primary copies of each shard have been started, or the request times out. The index creation response will indicate what happened. For example, `acknowledged` indicates whether the index was successfully created in the cluster, `while shards_acknowledged` indicates whether the requisite number of shard copies were started for each shard in the index before timing out. Note that it is still possible for either `acknowledged` or `shards_acknowledged` to be `false`, but for the index creation to be successful. These values simply indicate whether the operation completed before the timeout. If `acknowledged` is false, the request timed out before the cluster state was updated with the newly created index, but it probably will be created sometime soon. If `shards_acknowledged` is false, then the request timed out before the requisite number of shards were started (by default just the primaries), even if the cluster state was successfully updated to reflect the newly created index (that is to say, `acknowledged` is `true`). You can change the default of only waiting for the primary shards to start through the index setting `index.write.wait_for_active_shards`. Note that changing this setting will also affect the `wait_for_active_shards` value on all subsequent write operations.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-create-index.html | Elasticsearch API documentation}
      */
    create(this: That, params: T.IndicesCreateRequest | TB.IndicesCreateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCreateResponse>;
    create(this: That, params: T.IndicesCreateRequest | TB.IndicesCreateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCreateResponse, unknown>>;
    create(this: That, params: T.IndicesCreateRequest | TB.IndicesCreateRequest, options?: TransportRequestOptions): Promise<T.IndicesCreateResponse>;
    /**
      * Create a data stream. You must have a matching index template with data stream enabled.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-create-data-stream.html | Elasticsearch API documentation}
      */
    createDataStream(this: That, params: T.IndicesCreateDataStreamRequest | TB.IndicesCreateDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCreateDataStreamResponse>;
    createDataStream(this: That, params: T.IndicesCreateDataStreamRequest | TB.IndicesCreateDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCreateDataStreamResponse, unknown>>;
    createDataStream(this: That, params: T.IndicesCreateDataStreamRequest | TB.IndicesCreateDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesCreateDataStreamResponse>;
    /**
      * Create an index from a source index. Copy the mappings and settings from the source index to a destination index while allowing request settings and mappings to override the source values.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/migrate-data-stream.html | Elasticsearch API documentation}
      */
    createFrom(this: That, params: T.IndicesCreateFromRequest | TB.IndicesCreateFromRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesCreateFromResponse>;
    createFrom(this: That, params: T.IndicesCreateFromRequest | TB.IndicesCreateFromRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesCreateFromResponse, unknown>>;
    createFrom(this: That, params: T.IndicesCreateFromRequest | TB.IndicesCreateFromRequest, options?: TransportRequestOptions): Promise<T.IndicesCreateFromResponse>;
    /**
      * Get data stream stats. Get statistics for one or more data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-stream-stats-api.html | Elasticsearch API documentation}
      */
    dataStreamsStats(this: That, params?: T.IndicesDataStreamsStatsRequest | TB.IndicesDataStreamsStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDataStreamsStatsResponse>;
    dataStreamsStats(this: That, params?: T.IndicesDataStreamsStatsRequest | TB.IndicesDataStreamsStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDataStreamsStatsResponse, unknown>>;
    dataStreamsStats(this: That, params?: T.IndicesDataStreamsStatsRequest | TB.IndicesDataStreamsStatsRequest, options?: TransportRequestOptions): Promise<T.IndicesDataStreamsStatsResponse>;
    /**
      * Delete indices. Deleting an index deletes its documents, shards, and metadata. It does not delete related Kibana components, such as data views, visualizations, or dashboards. You cannot delete the current write index of a data stream. To delete the index, you must roll over the data stream so a new write index is created. You can then use the delete index API to delete the previous write index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-delete-index.html | Elasticsearch API documentation}
      */
    delete(this: That, params: T.IndicesDeleteRequest | TB.IndicesDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteResponse>;
    delete(this: That, params: T.IndicesDeleteRequest | TB.IndicesDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteResponse, unknown>>;
    delete(this: That, params: T.IndicesDeleteRequest | TB.IndicesDeleteRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteResponse>;
    /**
      * Delete an alias. Removes a data stream or index from an alias.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-delete-alias.html | Elasticsearch API documentation}
      */
    deleteAlias(this: That, params: T.IndicesDeleteAliasRequest | TB.IndicesDeleteAliasRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteAliasResponse>;
    deleteAlias(this: That, params: T.IndicesDeleteAliasRequest | TB.IndicesDeleteAliasRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteAliasResponse, unknown>>;
    deleteAlias(this: That, params: T.IndicesDeleteAliasRequest | TB.IndicesDeleteAliasRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteAliasResponse>;
    /**
      * Delete data stream lifecycles. Removes the data stream lifecycle from a data stream, rendering it not managed by the data stream lifecycle.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams-delete-lifecycle.html | Elasticsearch API documentation}
      */
    deleteDataLifecycle(this: That, params: T.IndicesDeleteDataLifecycleRequest | TB.IndicesDeleteDataLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteDataLifecycleResponse>;
    deleteDataLifecycle(this: That, params: T.IndicesDeleteDataLifecycleRequest | TB.IndicesDeleteDataLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteDataLifecycleResponse, unknown>>;
    deleteDataLifecycle(this: That, params: T.IndicesDeleteDataLifecycleRequest | TB.IndicesDeleteDataLifecycleRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteDataLifecycleResponse>;
    /**
      * Delete data streams. Deletes one or more data streams and their backing indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-delete-data-stream.html | Elasticsearch API documentation}
      */
    deleteDataStream(this: That, params: T.IndicesDeleteDataStreamRequest | TB.IndicesDeleteDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteDataStreamResponse>;
    deleteDataStream(this: That, params: T.IndicesDeleteDataStreamRequest | TB.IndicesDeleteDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteDataStreamResponse, unknown>>;
    deleteDataStream(this: That, params: T.IndicesDeleteDataStreamRequest | TB.IndicesDeleteDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteDataStreamResponse>;
    /**
      * Deletes the data stream options of the selected data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/index.html | Elasticsearch API documentation}
      */
    deleteDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    deleteDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    deleteDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Delete an index template. The provided <index-template> may contain multiple template names separated by a comma. If multiple template names are specified then there is no wildcard support and the provided names should match completely with existing templates.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-delete-template.html | Elasticsearch API documentation}
      */
    deleteIndexTemplate(this: That, params: T.IndicesDeleteIndexTemplateRequest | TB.IndicesDeleteIndexTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteIndexTemplateResponse>;
    deleteIndexTemplate(this: That, params: T.IndicesDeleteIndexTemplateRequest | TB.IndicesDeleteIndexTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteIndexTemplateResponse, unknown>>;
    deleteIndexTemplate(this: That, params: T.IndicesDeleteIndexTemplateRequest | TB.IndicesDeleteIndexTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteIndexTemplateResponse>;
    /**
      * Delete a legacy index template. IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-delete-template-v1.html | Elasticsearch API documentation}
      */
    deleteTemplate(this: That, params: T.IndicesDeleteTemplateRequest | TB.IndicesDeleteTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDeleteTemplateResponse>;
    deleteTemplate(this: That, params: T.IndicesDeleteTemplateRequest | TB.IndicesDeleteTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDeleteTemplateResponse, unknown>>;
    deleteTemplate(this: That, params: T.IndicesDeleteTemplateRequest | TB.IndicesDeleteTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesDeleteTemplateResponse>;
    /**
      * Analyze the index disk usage. Analyze the disk usage of each field of an index or data stream. This API might not support indices created in previous Elasticsearch versions. The result of a small index can be inaccurate as some parts of an index might not be analyzed by the API. NOTE: The total size of fields of the analyzed shards of the index in the response is usually smaller than the index `store_size` value because some small metadata files are ignored and some parts of data files might not be scanned by the API. Since stored fields are stored together in a compressed format, the sizes of stored fields are also estimates and can be inaccurate. The stored size of the `_id` field is likely underestimated while the `_source` field is overestimated.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-disk-usage.html | Elasticsearch API documentation}
      */
    diskUsage(this: That, params: T.IndicesDiskUsageRequest | TB.IndicesDiskUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDiskUsageResponse>;
    diskUsage(this: That, params: T.IndicesDiskUsageRequest | TB.IndicesDiskUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDiskUsageResponse, unknown>>;
    diskUsage(this: That, params: T.IndicesDiskUsageRequest | TB.IndicesDiskUsageRequest, options?: TransportRequestOptions): Promise<T.IndicesDiskUsageResponse>;
    /**
      * Downsample an index. Aggregate a time series (TSDS) index and store pre-computed statistical summaries (`min`, `max`, `sum`, `value_count` and `avg`) for each metric field grouped by a configured time interval. For example, a TSDS index that contains metrics sampled every 10 seconds can be downsampled to an hourly index. All documents within an hour interval are summarized and stored as a single document in the downsample index. NOTE: Only indices in a time series data stream are supported. Neither field nor document level security can be defined on the source index. The source index must be read only (`index.blocks.write: true`).
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-downsample-data-stream.html | Elasticsearch API documentation}
      */
    downsample(this: That, params: T.IndicesDownsampleRequest | TB.IndicesDownsampleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesDownsampleResponse>;
    downsample(this: That, params: T.IndicesDownsampleRequest | TB.IndicesDownsampleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesDownsampleResponse, unknown>>;
    downsample(this: That, params: T.IndicesDownsampleRequest | TB.IndicesDownsampleRequest, options?: TransportRequestOptions): Promise<T.IndicesDownsampleResponse>;
    /**
      * Check indices. Check if one or more indices, index aliases, or data streams exist.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-exists.html | Elasticsearch API documentation}
      */
    exists(this: That, params: T.IndicesExistsRequest | TB.IndicesExistsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesExistsResponse>;
    exists(this: That, params: T.IndicesExistsRequest | TB.IndicesExistsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesExistsResponse, unknown>>;
    exists(this: That, params: T.IndicesExistsRequest | TB.IndicesExistsRequest, options?: TransportRequestOptions): Promise<T.IndicesExistsResponse>;
    /**
      * Check aliases. Check if one or more data stream or index aliases exist.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-exists-alias | Elasticsearch API documentation}
      */
    existsAlias(this: That, params: T.IndicesExistsAliasRequest | TB.IndicesExistsAliasRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesExistsAliasResponse>;
    existsAlias(this: That, params: T.IndicesExistsAliasRequest | TB.IndicesExistsAliasRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesExistsAliasResponse, unknown>>;
    existsAlias(this: That, params: T.IndicesExistsAliasRequest | TB.IndicesExistsAliasRequest, options?: TransportRequestOptions): Promise<T.IndicesExistsAliasResponse>;
    /**
      * Check index templates. Check whether index templates exist.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-exists-index-template | Elasticsearch API documentation}
      */
    existsIndexTemplate(this: That, params: T.IndicesExistsIndexTemplateRequest | TB.IndicesExistsIndexTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesExistsIndexTemplateResponse>;
    existsIndexTemplate(this: That, params: T.IndicesExistsIndexTemplateRequest | TB.IndicesExistsIndexTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesExistsIndexTemplateResponse, unknown>>;
    existsIndexTemplate(this: That, params: T.IndicesExistsIndexTemplateRequest | TB.IndicesExistsIndexTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesExistsIndexTemplateResponse>;
    /**
      * Check existence of index templates. Get information about whether index templates exist. Index templates define settings, mappings, and aliases that can be applied automatically to new indices. IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-template-exists-v1.html | Elasticsearch API documentation}
      */
    existsTemplate(this: That, params: T.IndicesExistsTemplateRequest | TB.IndicesExistsTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesExistsTemplateResponse>;
    existsTemplate(this: That, params: T.IndicesExistsTemplateRequest | TB.IndicesExistsTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesExistsTemplateResponse, unknown>>;
    existsTemplate(this: That, params: T.IndicesExistsTemplateRequest | TB.IndicesExistsTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesExistsTemplateResponse>;
    /**
      * Get the status for a data stream lifecycle. Get information about an index or data stream's current data stream lifecycle status, such as time since index creation, time since rollover, the lifecycle configuration managing the index, or any errors encountered during lifecycle execution.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams-explain-lifecycle.html | Elasticsearch API documentation}
      */
    explainDataLifecycle(this: That, params: T.IndicesExplainDataLifecycleRequest | TB.IndicesExplainDataLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesExplainDataLifecycleResponse>;
    explainDataLifecycle(this: That, params: T.IndicesExplainDataLifecycleRequest | TB.IndicesExplainDataLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesExplainDataLifecycleResponse, unknown>>;
    explainDataLifecycle(this: That, params: T.IndicesExplainDataLifecycleRequest | TB.IndicesExplainDataLifecycleRequest, options?: TransportRequestOptions): Promise<T.IndicesExplainDataLifecycleResponse>;
    /**
      * Get field usage stats. Get field usage information for each shard and field of an index. Field usage statistics are automatically captured when queries are running on a cluster. A shard-level search request that accesses a given field, even if multiple times during that request, is counted as a single use. The response body reports the per-shard usage count of the data structures that back the fields in the index. A given request will increment each count by a maximum value of 1, even if the request accesses the same field multiple times.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/field-usage-stats.html | Elasticsearch API documentation}
      */
    fieldUsageStats(this: That, params: T.IndicesFieldUsageStatsRequest | TB.IndicesFieldUsageStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesFieldUsageStatsResponse>;
    fieldUsageStats(this: That, params: T.IndicesFieldUsageStatsRequest | TB.IndicesFieldUsageStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesFieldUsageStatsResponse, unknown>>;
    fieldUsageStats(this: That, params: T.IndicesFieldUsageStatsRequest | TB.IndicesFieldUsageStatsRequest, options?: TransportRequestOptions): Promise<T.IndicesFieldUsageStatsResponse>;
    /**
      * Flush data streams or indices. Flushing a data stream or index is the process of making sure that any data that is currently only stored in the transaction log is also permanently stored in the Lucene index. When restarting, Elasticsearch replays any unflushed operations from the transaction log into the Lucene index to bring it back into the state that it was in before the restart. Elasticsearch automatically triggers flushes as needed, using heuristics that trade off the size of the unflushed transaction log against the cost of performing each flush. After each operation has been flushed it is permanently stored in the Lucene index. This may mean that there is no need to maintain an additional copy of it in the transaction log. The transaction log is made up of multiple files, called generations, and Elasticsearch will delete any generation files when they are no longer needed, freeing up disk space. It is also possible to trigger a flush on one or more indices using the flush API, although it is rare for users to need to call this API directly. If you call the flush API after indexing some documents then a successful response indicates that Elasticsearch has flushed all the documents that were indexed before the flush API was called.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-flush.html | Elasticsearch API documentation}
      */
    flush(this: That, params?: T.IndicesFlushRequest | TB.IndicesFlushRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesFlushResponse>;
    flush(this: That, params?: T.IndicesFlushRequest | TB.IndicesFlushRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesFlushResponse, unknown>>;
    flush(this: That, params?: T.IndicesFlushRequest | TB.IndicesFlushRequest, options?: TransportRequestOptions): Promise<T.IndicesFlushResponse>;
    /**
      * Force a merge. Perform the force merge operation on the shards of one or more indices. For data streams, the API forces a merge on the shards of the stream's backing indices. Merging reduces the number of segments in each shard by merging some of them together and also frees up the space used by deleted documents. Merging normally happens automatically, but sometimes it is useful to trigger a merge manually. WARNING: We recommend force merging only a read-only index (meaning the index is no longer receiving writes). When documents are updated or deleted, the old version is not immediately removed but instead soft-deleted and marked with a "tombstone". These soft-deleted documents are automatically cleaned up during regular segment merges. But force merge can cause very large (greater than 5 GB) segments to be produced, which are not eligible for regular merges. So the number of soft-deleted documents can then grow rapidly, resulting in higher disk usage and worse search performance. If you regularly force merge an index receiving writes, this can also make snapshots more expensive, since the new documents can't be backed up incrementally. **Blocks during a force merge** Calls to this API block until the merge is complete (unless request contains `wait_for_completion=false`). If the client connection is lost before completion then the force merge process will continue in the background. Any new requests to force merge the same indices will also block until the ongoing force merge is complete. **Running force merge asynchronously** If the request contains `wait_for_completion=false`, Elasticsearch performs some preflight checks, launches the request, and returns a task you can use to get the status of the task. However, you can not cancel this task as the force merge task is not cancelable. Elasticsearch creates a record of this task as a document at `_tasks/<task_id>`. When you are done with a task, you should delete the task document so Elasticsearch can reclaim the space. **Force merging multiple indices** You can force merge multiple indices with a single request by targeting: * One or more data streams that contain multiple backing indices * Multiple indices * One or more aliases * All data streams and indices in a cluster Each targeted shard is force-merged separately using the force_merge threadpool. By default each node only has a single `force_merge` thread which means that the shards on that node are force-merged one at a time. If you expand the `force_merge` threadpool on a node then it will force merge its shards in parallel Force merge makes the storage for the shard being merged temporarily increase, as it may require free space up to triple its size in case `max_num_segments parameter` is set to `1`, to rewrite all segments into a new one. **Data streams and time-based indices** Force-merging is useful for managing a data stream's older backing indices and other time-based indices, particularly after a rollover. In these cases, each index only receives indexing traffic for a certain period of time. Once an index receive no more writes, its shards can be force-merged to a single segment. This can be a good idea because single-segment shards can sometimes use simpler and more efficient data structures to perform searches. For example: ``` POST /.ds-my-data-stream-2099.03.07-000001/_forcemerge?max_num_segments=1 ```
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-forcemerge.html | Elasticsearch API documentation}
      */
    forcemerge(this: That, params?: T.IndicesForcemergeRequest | TB.IndicesForcemergeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesForcemergeResponse>;
    forcemerge(this: That, params?: T.IndicesForcemergeRequest | TB.IndicesForcemergeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesForcemergeResponse, unknown>>;
    forcemerge(this: That, params?: T.IndicesForcemergeRequest | TB.IndicesForcemergeRequest, options?: TransportRequestOptions): Promise<T.IndicesForcemergeResponse>;
    /**
      * Get index information. Get information about one or more indices. For data streams, the API returns information about the stream’s backing indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-index.html | Elasticsearch API documentation}
      */
    get(this: That, params: T.IndicesGetRequest | TB.IndicesGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetResponse>;
    get(this: That, params: T.IndicesGetRequest | TB.IndicesGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetResponse, unknown>>;
    get(this: That, params: T.IndicesGetRequest | TB.IndicesGetRequest, options?: TransportRequestOptions): Promise<T.IndicesGetResponse>;
    /**
      * Get aliases. Retrieves information for one or more data stream or index aliases.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-alias.html | Elasticsearch API documentation}
      */
    getAlias(this: That, params?: T.IndicesGetAliasRequest | TB.IndicesGetAliasRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetAliasResponse>;
    getAlias(this: That, params?: T.IndicesGetAliasRequest | TB.IndicesGetAliasRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetAliasResponse, unknown>>;
    getAlias(this: That, params?: T.IndicesGetAliasRequest | TB.IndicesGetAliasRequest, options?: TransportRequestOptions): Promise<T.IndicesGetAliasResponse>;
    /**
      * Get data stream lifecycles. Get the data stream lifecycle configuration of one or more data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams-get-lifecycle.html | Elasticsearch API documentation}
      */
    getDataLifecycle(this: That, params: T.IndicesGetDataLifecycleRequest | TB.IndicesGetDataLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetDataLifecycleResponse>;
    getDataLifecycle(this: That, params: T.IndicesGetDataLifecycleRequest | TB.IndicesGetDataLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetDataLifecycleResponse, unknown>>;
    getDataLifecycle(this: That, params: T.IndicesGetDataLifecycleRequest | TB.IndicesGetDataLifecycleRequest, options?: TransportRequestOptions): Promise<T.IndicesGetDataLifecycleResponse>;
    /**
      * Get data stream lifecycle stats. Get statistics about the data streams that are managed by a data stream lifecycle.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams-get-lifecycle-stats.html | Elasticsearch API documentation}
      */
    getDataLifecycleStats(this: That, params?: T.IndicesGetDataLifecycleStatsRequest | TB.IndicesGetDataLifecycleStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetDataLifecycleStatsResponse>;
    getDataLifecycleStats(this: That, params?: T.IndicesGetDataLifecycleStatsRequest | TB.IndicesGetDataLifecycleStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetDataLifecycleStatsResponse, unknown>>;
    getDataLifecycleStats(this: That, params?: T.IndicesGetDataLifecycleStatsRequest | TB.IndicesGetDataLifecycleStatsRequest, options?: TransportRequestOptions): Promise<T.IndicesGetDataLifecycleStatsResponse>;
    /**
      * Get data streams. Get information about one or more data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-data-stream.html | Elasticsearch API documentation}
      */
    getDataStream(this: That, params?: T.IndicesGetDataStreamRequest | TB.IndicesGetDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetDataStreamResponse>;
    getDataStream(this: That, params?: T.IndicesGetDataStreamRequest | TB.IndicesGetDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetDataStreamResponse, unknown>>;
    getDataStream(this: That, params?: T.IndicesGetDataStreamRequest | TB.IndicesGetDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesGetDataStreamResponse>;
    /**
      * Returns the data stream options of the selected data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/index.html | Elasticsearch API documentation}
      */
    getDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    getDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    getDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Gets a data stream's settings
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams.html | Elasticsearch API documentation}
      */
    getDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    getDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    getDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Get mapping definitions. Retrieves mapping definitions for one or more fields. For data streams, the API retrieves field mappings for the stream’s backing indices. This API is useful if you don't need a complete mapping or if an index mapping contains a large number of fields.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-field-mapping.html | Elasticsearch API documentation}
      */
    getFieldMapping(this: That, params: T.IndicesGetFieldMappingRequest | TB.IndicesGetFieldMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetFieldMappingResponse>;
    getFieldMapping(this: That, params: T.IndicesGetFieldMappingRequest | TB.IndicesGetFieldMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetFieldMappingResponse, unknown>>;
    getFieldMapping(this: That, params: T.IndicesGetFieldMappingRequest | TB.IndicesGetFieldMappingRequest, options?: TransportRequestOptions): Promise<T.IndicesGetFieldMappingResponse>;
    /**
      * Get index templates. Get information about one or more index templates.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-template.html | Elasticsearch API documentation}
      */
    getIndexTemplate(this: That, params?: T.IndicesGetIndexTemplateRequest | TB.IndicesGetIndexTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetIndexTemplateResponse>;
    getIndexTemplate(this: That, params?: T.IndicesGetIndexTemplateRequest | TB.IndicesGetIndexTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetIndexTemplateResponse, unknown>>;
    getIndexTemplate(this: That, params?: T.IndicesGetIndexTemplateRequest | TB.IndicesGetIndexTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesGetIndexTemplateResponse>;
    /**
      * Get mapping definitions. For data streams, the API retrieves mappings for the stream’s backing indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-mapping.html | Elasticsearch API documentation}
      */
    getMapping(this: That, params?: T.IndicesGetMappingRequest | TB.IndicesGetMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetMappingResponse>;
    getMapping(this: That, params?: T.IndicesGetMappingRequest | TB.IndicesGetMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetMappingResponse, unknown>>;
    getMapping(this: That, params?: T.IndicesGetMappingRequest | TB.IndicesGetMappingRequest, options?: TransportRequestOptions): Promise<T.IndicesGetMappingResponse>;
    /**
      * Get the migration reindexing status. Get the status of a migration reindex attempt for a data stream or index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/migrate-data-stream.html | Elasticsearch API documentation}
      */
    getMigrateReindexStatus(this: That, params: T.IndicesGetMigrateReindexStatusRequest | TB.IndicesGetMigrateReindexStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetMigrateReindexStatusResponse>;
    getMigrateReindexStatus(this: That, params: T.IndicesGetMigrateReindexStatusRequest | TB.IndicesGetMigrateReindexStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetMigrateReindexStatusResponse, unknown>>;
    getMigrateReindexStatus(this: That, params: T.IndicesGetMigrateReindexStatusRequest | TB.IndicesGetMigrateReindexStatusRequest, options?: TransportRequestOptions): Promise<T.IndicesGetMigrateReindexStatusResponse>;
    /**
      * Get index settings. Get setting information for one or more indices. For data streams, it returns setting information for the stream's backing indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-settings.html | Elasticsearch API documentation}
      */
    getSettings(this: That, params?: T.IndicesGetSettingsRequest | TB.IndicesGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetSettingsResponse>;
    getSettings(this: That, params?: T.IndicesGetSettingsRequest | TB.IndicesGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetSettingsResponse, unknown>>;
    getSettings(this: That, params?: T.IndicesGetSettingsRequest | TB.IndicesGetSettingsRequest, options?: TransportRequestOptions): Promise<T.IndicesGetSettingsResponse>;
    /**
      * Get legacy index templates. Get information about one or more index templates. IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-get-template-v1.html | Elasticsearch API documentation}
      */
    getTemplate(this: That, params?: T.IndicesGetTemplateRequest | TB.IndicesGetTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesGetTemplateResponse>;
    getTemplate(this: That, params?: T.IndicesGetTemplateRequest | TB.IndicesGetTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesGetTemplateResponse, unknown>>;
    getTemplate(this: That, params?: T.IndicesGetTemplateRequest | TB.IndicesGetTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesGetTemplateResponse>;
    /**
      * Reindex legacy backing indices. Reindex all legacy backing indices for a data stream. This operation occurs in a persistent task. The persistent task ID is returned immediately and the reindexing work is completed in that task.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/migrate-data-stream.html | Elasticsearch API documentation}
      */
    migrateReindex(this: That, params: T.IndicesMigrateReindexRequest | TB.IndicesMigrateReindexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesMigrateReindexResponse>;
    migrateReindex(this: That, params: T.IndicesMigrateReindexRequest | TB.IndicesMigrateReindexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesMigrateReindexResponse, unknown>>;
    migrateReindex(this: That, params: T.IndicesMigrateReindexRequest | TB.IndicesMigrateReindexRequest, options?: TransportRequestOptions): Promise<T.IndicesMigrateReindexResponse>;
    /**
      * Convert an index alias to a data stream. Converts an index alias to a data stream. You must have a matching index template that is data stream enabled. The alias must meet the following criteria: The alias must have a write index; All indices for the alias must have a `@timestamp` field mapping of a `date` or `date_nanos` field type; The alias must not have any filters; The alias must not use custom routing. If successful, the request removes the alias and creates a data stream with the same name. The indices for the alias become hidden backing indices for the stream. The write index for the alias becomes the write index for the stream.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-migrate-to-data-stream | Elasticsearch API documentation}
      */
    migrateToDataStream(this: That, params: T.IndicesMigrateToDataStreamRequest | TB.IndicesMigrateToDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesMigrateToDataStreamResponse>;
    migrateToDataStream(this: That, params: T.IndicesMigrateToDataStreamRequest | TB.IndicesMigrateToDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesMigrateToDataStreamResponse, unknown>>;
    migrateToDataStream(this: That, params: T.IndicesMigrateToDataStreamRequest | TB.IndicesMigrateToDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesMigrateToDataStreamResponse>;
    /**
      * Update data streams. Performs one or more data stream modification actions in a single atomic operation.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-modify-data-stream | Elasticsearch API documentation}
      */
    modifyDataStream(this: That, params: T.IndicesModifyDataStreamRequest | TB.IndicesModifyDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesModifyDataStreamResponse>;
    modifyDataStream(this: That, params: T.IndicesModifyDataStreamRequest | TB.IndicesModifyDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesModifyDataStreamResponse, unknown>>;
    modifyDataStream(this: That, params: T.IndicesModifyDataStreamRequest | TB.IndicesModifyDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesModifyDataStreamResponse>;
    /**
      * Open a closed index. For data streams, the API opens any closed backing indices. A closed index is blocked for read/write operations and does not allow all operations that opened indices allow. It is not possible to index documents or to search for documents in a closed index. This allows closed indices to not have to maintain internal data structures for indexing or searching documents, resulting in a smaller overhead on the cluster. When opening or closing an index, the master is responsible for restarting the index shards to reflect the new state of the index. The shards will then go through the normal recovery process. The data of opened or closed indices is automatically replicated by the cluster to ensure that enough shard copies are safely kept around at all times. You can open and close multiple indices. An error is thrown if the request explicitly refers to a missing index. This behavior can be turned off by using the `ignore_unavailable=true` parameter. By default, you must explicitly name the indices you are opening or closing. To open or close indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`. This setting can also be changed with the cluster update settings API. Closed indices consume a significant amount of disk-space which can cause problems in managed environments. Closing indices can be turned off with the cluster settings API by setting `cluster.indices.close.enable` to `false`. Because opening or closing an index allocates its shards, the `wait_for_active_shards` setting on index creation applies to the `_open` and `_close` index actions as well.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-open-close.html | Elasticsearch API documentation}
      */
    open(this: That, params: T.IndicesOpenRequest | TB.IndicesOpenRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesOpenResponse>;
    open(this: That, params: T.IndicesOpenRequest | TB.IndicesOpenRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesOpenResponse, unknown>>;
    open(this: That, params: T.IndicesOpenRequest | TB.IndicesOpenRequest, options?: TransportRequestOptions): Promise<T.IndicesOpenResponse>;
    /**
      * Promote a data stream. Promote a data stream from a replicated data stream managed by cross-cluster replication (CCR) to a regular data stream. With CCR auto following, a data stream from a remote cluster can be replicated to the local cluster. These data streams can't be rolled over in the local cluster. These replicated data streams roll over only if the upstream data stream rolls over. In the event that the remote cluster is no longer available, the data stream in the local cluster can be promoted to a regular data stream, which allows these data streams to be rolled over in the local cluster. NOTE: When promoting a data stream, ensure the local cluster has a data stream enabled index template that matches the data stream. If this is missing, the data stream will not be able to roll over until a matching index template is created. This will affect the lifecycle management of the data stream and interfere with the data stream size and retention.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-promote-data-stream | Elasticsearch API documentation}
      */
    promoteDataStream(this: That, params: T.IndicesPromoteDataStreamRequest | TB.IndicesPromoteDataStreamRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPromoteDataStreamResponse>;
    promoteDataStream(this: That, params: T.IndicesPromoteDataStreamRequest | TB.IndicesPromoteDataStreamRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPromoteDataStreamResponse, unknown>>;
    promoteDataStream(this: That, params: T.IndicesPromoteDataStreamRequest | TB.IndicesPromoteDataStreamRequest, options?: TransportRequestOptions): Promise<T.IndicesPromoteDataStreamResponse>;
    /**
      * Create or update an alias. Adds a data stream or index to an alias.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-put-alias | Elasticsearch API documentation}
      */
    putAlias(this: That, params: T.IndicesPutAliasRequest | TB.IndicesPutAliasRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutAliasResponse>;
    putAlias(this: That, params: T.IndicesPutAliasRequest | TB.IndicesPutAliasRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutAliasResponse, unknown>>;
    putAlias(this: That, params: T.IndicesPutAliasRequest | TB.IndicesPutAliasRequest, options?: TransportRequestOptions): Promise<T.IndicesPutAliasResponse>;
    /**
      * Update data stream lifecycles. Update the data stream lifecycle of the specified data streams.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-put-data-lifecycle | Elasticsearch API documentation}
      */
    putDataLifecycle(this: That, params: T.IndicesPutDataLifecycleRequest | TB.IndicesPutDataLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutDataLifecycleResponse>;
    putDataLifecycle(this: That, params: T.IndicesPutDataLifecycleRequest | TB.IndicesPutDataLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutDataLifecycleResponse, unknown>>;
    putDataLifecycle(this: That, params: T.IndicesPutDataLifecycleRequest | TB.IndicesPutDataLifecycleRequest, options?: TransportRequestOptions): Promise<T.IndicesPutDataLifecycleResponse>;
    /**
      * Updates the data stream options of the selected data streams.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/index.html | Elasticsearch API documentation}
      */
    putDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    putDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    putDataStreamOptions(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Updates a data stream's settings
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/data-streams.html | Elasticsearch API documentation}
      */
    putDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    putDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    putDataStreamSettings(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Create or update an index template. Index templates define settings, mappings, and aliases that can be applied automatically to new indices. Elasticsearch applies templates to new indices based on an wildcard pattern that matches the index name. Index templates are applied during data stream or index creation. For data streams, these settings and mappings are applied when the stream's backing indices are created. Settings and mappings specified in a create index API request override any settings or mappings specified in an index template. Changes to index templates do not affect existing indices, including the existing backing indices of a data stream. You can use C-style `/* *\/` block comments in index templates. You can include comments anywhere in the request body, except before the opening curly bracket. **Multiple matching templates** If multiple index templates match the name of a new index or data stream, the template with the highest priority is used. Multiple templates with overlapping index patterns at the same priority are not allowed and an error will be thrown when attempting to create a template matching an existing index template at identical priorities. **Composing aliases, mappings, and settings** When multiple component templates are specified in the `composed_of` field for an index template, they are merged in the order specified, meaning that later component templates override earlier component templates. Any mappings, settings, or aliases from the parent index template are merged in next. Finally, any configuration on the index request itself is merged. Mapping definitions are merged recursively, which means that later mapping components can introduce new field mappings and update the mapping configuration. If a field mapping is already contained in an earlier component, its definition will be completely overwritten by the later one. This recursive merging strategy applies not only to field mappings, but also root options like `dynamic_templates` and `meta`. If an earlier component contains a `dynamic_templates` block, then by default new `dynamic_templates` entries are appended onto the end. If an entry already exists with the same key, then it is overwritten by the new definition.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-put-index-template | Elasticsearch API documentation}
      */
    putIndexTemplate(this: That, params: T.IndicesPutIndexTemplateRequest | TB.IndicesPutIndexTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutIndexTemplateResponse>;
    putIndexTemplate(this: That, params: T.IndicesPutIndexTemplateRequest | TB.IndicesPutIndexTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutIndexTemplateResponse, unknown>>;
    putIndexTemplate(this: That, params: T.IndicesPutIndexTemplateRequest | TB.IndicesPutIndexTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesPutIndexTemplateResponse>;
    /**
      * Update field mappings. Add new fields to an existing data stream or index. You can also use this API to change the search settings of existing fields and add new properties to existing object fields. For data streams, these changes are applied to all backing indices by default. **Add multi-fields to an existing field** Multi-fields let you index the same field in different ways. You can use this API to update the fields mapping parameter and enable multi-fields for an existing field. WARNING: If an index (or data stream) contains documents when you add a multi-field, those documents will not have values for the new multi-field. You can populate the new multi-field with the update by query API. **Change supported mapping parameters for an existing field** The documentation for each mapping parameter indicates whether you can update it for an existing field using this API. For example, you can use the update mapping API to update the `ignore_above` parameter. **Change the mapping of an existing field** Except for supported mapping parameters, you can't change the mapping or field type of an existing field. Changing an existing field could invalidate data that's already indexed. If you need to change the mapping of a field in a data stream's backing indices, refer to documentation about modifying data streams. If you need to change the mapping of a field in other indices, create a new index with the correct mapping and reindex your data into that index. **Rename a field** Renaming a field would invalidate data already indexed under the old field name. Instead, add an alias field to create an alternate field name.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-put-mapping.html | Elasticsearch API documentation}
      */
    putMapping(this: That, params: T.IndicesPutMappingRequest | TB.IndicesPutMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutMappingResponse>;
    putMapping(this: That, params: T.IndicesPutMappingRequest | TB.IndicesPutMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutMappingResponse, unknown>>;
    putMapping(this: That, params: T.IndicesPutMappingRequest | TB.IndicesPutMappingRequest, options?: TransportRequestOptions): Promise<T.IndicesPutMappingResponse>;
    /**
      * Update index settings. Changes dynamic index settings in real time. For data streams, index setting changes are applied to all backing indices by default. To revert a setting to the default value, use a null value. The list of per-index settings that can be updated dynamically on live indices can be found in index settings documentation. To preserve existing settings from being updated, set the `preserve_existing` parameter to `true`. There are multiple valid ways to represent index settings in the request body. You can specify only the setting, for example: ``` { "number_of_replicas": 1 } ``` Or you can use an `index` setting object: ``` { "index": { "number_of_replicas": 1 } } ``` Or you can use dot annotation: ``` { "index.number_of_replicas": 1 } ``` Or you can embed any of the aforementioned options in a `settings` object. For example: ``` { "settings": { "index": { "number_of_replicas": 1 } } } ``` NOTE: You can only define new analyzers on closed indices. To add an analyzer, you must close the index, define the analyzer, and reopen the index. You cannot close the write index of a data stream. To update the analyzer for a data stream's write index and future backing indices, update the analyzer in the index template used by the stream. Then roll over the data stream to apply the new analyzer to the stream's write index and future backing indices. This affects searches and any new data added to the stream after the rollover. However, it does not affect the data stream's backing indices or their existing data. To change the analyzer for existing backing indices, you must create a new data stream and reindex your data into it.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-update-settings.html | Elasticsearch API documentation}
      */
    putSettings(this: That, params: T.IndicesPutSettingsRequest | TB.IndicesPutSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutSettingsResponse>;
    putSettings(this: That, params: T.IndicesPutSettingsRequest | TB.IndicesPutSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutSettingsResponse, unknown>>;
    putSettings(this: That, params: T.IndicesPutSettingsRequest | TB.IndicesPutSettingsRequest, options?: TransportRequestOptions): Promise<T.IndicesPutSettingsResponse>;
    /**
      * Create or update a legacy index template. Index templates define settings, mappings, and aliases that can be applied automatically to new indices. Elasticsearch applies templates to new indices based on an index pattern that matches the index name. IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8. Composable templates always take precedence over legacy templates. If no composable template matches a new index, matching legacy templates are applied according to their order. Index templates are only applied during index creation. Changes to index templates do not affect existing indices. Settings and mappings specified in create index API requests override any settings or mappings specified in an index template. You can use C-style `/* *\/` block comments in index templates. You can include comments anywhere in the request body, except before the opening curly bracket. **Indices matching multiple templates** Multiple index templates can potentially match an index, in this case, both the settings and mappings are merged into the final configuration of the index. The order of the merging can be controlled using the order parameter, with lower order being applied first, and higher orders overriding them. NOTE: Multiple matching templates with the same order value will result in a non-deterministic merging order.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-templates-v1.html | Elasticsearch API documentation}
      */
    putTemplate(this: That, params: T.IndicesPutTemplateRequest | TB.IndicesPutTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesPutTemplateResponse>;
    putTemplate(this: That, params: T.IndicesPutTemplateRequest | TB.IndicesPutTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesPutTemplateResponse, unknown>>;
    putTemplate(this: That, params: T.IndicesPutTemplateRequest | TB.IndicesPutTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesPutTemplateResponse>;
    /**
      * Get index recovery information. Get information about ongoing and completed shard recoveries for one or more indices. For data streams, the API returns information for the stream's backing indices. All recoveries, whether ongoing or complete, are kept in the cluster state and may be reported on at any time. Shard recovery is the process of initializing a shard copy, such as restoring a primary shard from a snapshot or creating a replica shard from a primary shard. When a shard recovery completes, the recovered shard is available for search and indexing. Recovery automatically occurs during the following processes: * When creating an index for the first time. * When a node rejoins the cluster and starts up any missing primary shard copies using the data that it holds in its data path. * Creation of new replica shard copies from the primary. * Relocation of a shard copy to a different node in the same cluster. * A snapshot restore operation. * A clone, shrink, or split operation. You can determine the cause of a shard recovery using the recovery or cat recovery APIs. The index recovery API reports information about completed recoveries only for shard copies that currently exist in the cluster. It only reports the last recovery for each shard copy and does not report historical information about earlier recoveries, nor does it report information about the recoveries of shard copies that no longer exist. This means that if a shard copy completes a recovery and then Elasticsearch relocates it onto a different node then the information about the original recovery will not be shown in the recovery API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-recovery.html | Elasticsearch API documentation}
      */
    recovery(this: That, params?: T.IndicesRecoveryRequest | TB.IndicesRecoveryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesRecoveryResponse>;
    recovery(this: That, params?: T.IndicesRecoveryRequest | TB.IndicesRecoveryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesRecoveryResponse, unknown>>;
    recovery(this: That, params?: T.IndicesRecoveryRequest | TB.IndicesRecoveryRequest, options?: TransportRequestOptions): Promise<T.IndicesRecoveryResponse>;
    /**
      * Refresh an index. A refresh makes recent operations performed on one or more indices available for search. For data streams, the API runs the refresh operation on the stream’s backing indices. By default, Elasticsearch periodically refreshes indices every second, but only on indices that have received one search request or more in the last 30 seconds. You can change this default interval with the `index.refresh_interval` setting. Refresh requests are synchronous and do not return a response until the refresh operation completes. Refreshes are resource-intensive. To ensure good cluster performance, it's recommended to wait for Elasticsearch's periodic refresh rather than performing an explicit refresh when possible. If your application workflow indexes documents and then runs a search to retrieve the indexed document, it's recommended to use the index API's `refresh=wait_for` query parameter option. This option ensures the indexing operation waits for a periodic refresh before running the search.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-refresh.html | Elasticsearch API documentation}
      */
    refresh(this: That, params?: T.IndicesRefreshRequest | TB.IndicesRefreshRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesRefreshResponse>;
    refresh(this: That, params?: T.IndicesRefreshRequest | TB.IndicesRefreshRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesRefreshResponse, unknown>>;
    refresh(this: That, params?: T.IndicesRefreshRequest | TB.IndicesRefreshRequest, options?: TransportRequestOptions): Promise<T.IndicesRefreshResponse>;
    /**
      * Reload search analyzers. Reload an index's search analyzers and their resources. For data streams, the API reloads search analyzers and resources for the stream's backing indices. IMPORTANT: After reloading the search analyzers you should clear the request cache to make sure it doesn't contain responses derived from the previous versions of the analyzer. You can use the reload search analyzers API to pick up changes to synonym files used in the `synonym_graph` or `synonym` token filter of a search analyzer. To be eligible, the token filter must have an `updateable` flag of `true` and only be used in search analyzers. NOTE: This API does not perform a reload for each shard of an index. Instead, it performs a reload for each node containing index shards. As a result, the total shard count returned by the API can differ from the number of index shards. Because reloading affects every node with an index shard, it is important to update the synonym file on every data node in the cluster--including nodes that don't contain a shard replica--before using this API. This ensures the synonym file is updated everywhere in the cluster in case shards are relocated in the future.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-reload-analyzers.html | Elasticsearch API documentation}
      */
    reloadSearchAnalyzers(this: That, params: T.IndicesReloadSearchAnalyzersRequest | TB.IndicesReloadSearchAnalyzersRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesReloadSearchAnalyzersResponse>;
    reloadSearchAnalyzers(this: That, params: T.IndicesReloadSearchAnalyzersRequest | TB.IndicesReloadSearchAnalyzersRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesReloadSearchAnalyzersResponse, unknown>>;
    reloadSearchAnalyzers(this: That, params: T.IndicesReloadSearchAnalyzersRequest | TB.IndicesReloadSearchAnalyzersRequest, options?: TransportRequestOptions): Promise<T.IndicesReloadSearchAnalyzersResponse>;
    /**
      * Resolve the cluster. Resolve the specified index expressions to return information about each cluster, including the local "querying" cluster, if included. If no index expression is provided, the API will return information about all the remote clusters that are configured on the querying cluster. This endpoint is useful before doing a cross-cluster search in order to determine which remote clusters should be included in a search. You use the same index expression with this endpoint as you would for cross-cluster search. Index and cluster exclusions are also supported with this endpoint. For each cluster in the index expression, information is returned about: * Whether the querying ("local") cluster is currently connected to each remote cluster specified in the index expression. Note that this endpoint actively attempts to contact the remote clusters, unlike the `remote/info` endpoint. * Whether each remote cluster is configured with `skip_unavailable` as `true` or `false`. * Whether there are any indices, aliases, or data streams on that cluster that match the index expression. * Whether the search is likely to have errors returned when you do the cross-cluster search (including any authorization errors if you do not have permission to query the index). * Cluster version information, including the Elasticsearch server version. For example, `GET /_resolve/cluster/my-index-*,cluster*:my-index-*` returns information about the local cluster and all remotely configured clusters that start with the alias `cluster*`. Each cluster returns information about whether it has any indices, aliases or data streams that match `my-index-*`. ## Note on backwards compatibility The ability to query without an index expression was added in version 8.18, so when querying remote clusters older than that, the local cluster will send the index expression `dummy*` to those remote clusters. Thus, if an errors occur, you may see a reference to that index expression even though you didn't request it. If it causes a problem, you can instead include an index expression like `*:*` to bypass the issue. ## Advantages of using this endpoint before a cross-cluster search You may want to exclude a cluster or index from a search when: * A remote cluster is not currently connected and is configured with `skip_unavailable=false`. Running a cross-cluster search under those conditions will cause the entire search to fail. * A cluster has no matching indices, aliases or data streams for the index expression (or your user does not have permissions to search them). For example, suppose your index expression is `logs*,remote1:logs*` and the remote1 cluster has no indices, aliases or data streams that match `logs*`. In that case, that cluster will return no results from that cluster if you include it in a cross-cluster search. * The index expression (combined with any query parameters you specify) will likely cause an exception to be thrown when you do the search. In these cases, the "error" field in the `_resolve/cluster` response will be present. (This is also where security/permission errors will be shown.) * A remote cluster is an older version that does not support the feature you want to use in your search. ## Test availability of remote clusters The `remote/info` endpoint is commonly used to test whether the "local" cluster (the cluster being queried) is connected to its remote clusters, but it does not necessarily reflect whether the remote cluster is available or not. The remote cluster may be available, while the local cluster is not currently connected to it. You can use the `_resolve/cluster` API to attempt to reconnect to remote clusters. For example with `GET _resolve/cluster` or `GET _resolve/cluster/*:*`. The `connected` field in the response will indicate whether it was successful. If a connection was (re-)established, this will also cause the `remote/info` endpoint to now indicate a connected status.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-resolve-cluster-api.html | Elasticsearch API documentation}
      */
    resolveCluster(this: That, params?: T.IndicesResolveClusterRequest | TB.IndicesResolveClusterRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesResolveClusterResponse>;
    resolveCluster(this: That, params?: T.IndicesResolveClusterRequest | TB.IndicesResolveClusterRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesResolveClusterResponse, unknown>>;
    resolveCluster(this: That, params?: T.IndicesResolveClusterRequest | TB.IndicesResolveClusterRequest, options?: TransportRequestOptions): Promise<T.IndicesResolveClusterResponse>;
    /**
      * Resolve indices. Resolve the names and/or index patterns for indices, aliases, and data streams. Multiple patterns and remote clusters are supported.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-resolve-index-api.html | Elasticsearch API documentation}
      */
    resolveIndex(this: That, params: T.IndicesResolveIndexRequest | TB.IndicesResolveIndexRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesResolveIndexResponse>;
    resolveIndex(this: That, params: T.IndicesResolveIndexRequest | TB.IndicesResolveIndexRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesResolveIndexResponse, unknown>>;
    resolveIndex(this: That, params: T.IndicesResolveIndexRequest | TB.IndicesResolveIndexRequest, options?: TransportRequestOptions): Promise<T.IndicesResolveIndexResponse>;
    /**
      * Roll over to a new index. TIP: It is recommended to use the index lifecycle rollover action to automate rollovers. The rollover API creates a new index for a data stream or index alias. The API behavior depends on the rollover target. **Roll over a data stream** If you roll over a data stream, the API creates a new write index for the stream. The stream's previous write index becomes a regular backing index. A rollover also increments the data stream's generation. **Roll over an index alias with a write index** TIP: Prior to Elasticsearch 7.9, you'd typically use an index alias with a write index to manage time series data. Data streams replace this functionality, require less maintenance, and automatically integrate with data tiers. If an index alias points to multiple indices, one of the indices must be a write index. The rollover API creates a new write index for the alias with `is_write_index` set to `true`. The API also `sets is_write_index` to `false` for the previous write index. **Roll over an index alias with one index** If you roll over an index alias that points to only one index, the API creates a new index for the alias and removes the original index from the alias. NOTE: A rollover creates a new index and is subject to the `wait_for_active_shards` setting. **Increment index names for an alias** When you roll over an index alias, you can specify a name for the new index. If you don't specify a name and the current index ends with `-` and a number, such as `my-index-000001` or `my-index-3`, the new index name increments that number. For example, if you roll over an alias with a current index of `my-index-000001`, the rollover creates a new index named `my-index-000002`. This number is always six characters and zero-padded, regardless of the previous index's name. If you use an index alias for time series data, you can use date math in the index name to track the rollover date. For example, you can create an alias that points to an index named `<my-index-{now/d}-000001>`. If you create the index on May 6, 2099, the index's name is `my-index-2099.05.06-000001`. If you roll over the alias on May 7, 2099, the new index's name is `my-index-2099.05.07-000002`.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-rollover-index.html | Elasticsearch API documentation}
      */
    rollover(this: That, params: T.IndicesRolloverRequest | TB.IndicesRolloverRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesRolloverResponse>;
    rollover(this: That, params: T.IndicesRolloverRequest | TB.IndicesRolloverRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesRolloverResponse, unknown>>;
    rollover(this: That, params: T.IndicesRolloverRequest | TB.IndicesRolloverRequest, options?: TransportRequestOptions): Promise<T.IndicesRolloverResponse>;
    /**
      * Get index segments. Get low-level information about the Lucene segments in index shards. For data streams, the API returns information about the stream's backing indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-segments.html | Elasticsearch API documentation}
      */
    segments(this: That, params?: T.IndicesSegmentsRequest | TB.IndicesSegmentsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesSegmentsResponse>;
    segments(this: That, params?: T.IndicesSegmentsRequest | TB.IndicesSegmentsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesSegmentsResponse, unknown>>;
    segments(this: That, params?: T.IndicesSegmentsRequest | TB.IndicesSegmentsRequest, options?: TransportRequestOptions): Promise<T.IndicesSegmentsResponse>;
    /**
      * Get index shard stores. Get store information about replica shards in one or more indices. For data streams, the API retrieves store information for the stream's backing indices. The index shard stores API returns the following information: * The node on which each replica shard exists. * The allocation ID for each replica shard. * A unique ID for each replica shard. * Any errors encountered while opening the shard index or from an earlier failure. By default, the API returns store information only for primary shards that are unassigned or have one or more unassigned replica shards.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-shards-stores.html | Elasticsearch API documentation}
      */
    shardStores(this: That, params?: T.IndicesShardStoresRequest | TB.IndicesShardStoresRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesShardStoresResponse>;
    shardStores(this: That, params?: T.IndicesShardStoresRequest | TB.IndicesShardStoresRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesShardStoresResponse, unknown>>;
    shardStores(this: That, params?: T.IndicesShardStoresRequest | TB.IndicesShardStoresRequest, options?: TransportRequestOptions): Promise<T.IndicesShardStoresResponse>;
    /**
      * Shrink an index. Shrink an index into a new index with fewer primary shards. Before you can shrink an index: * The index must be read-only. * A copy of every shard in the index must reside on the same node. * The index must have a green health status. To make shard allocation easier, we recommend you also remove the index's replica shards. You can later re-add replica shards as part of the shrink operation. The requested number of primary shards in the target index must be a factor of the number of shards in the source index. For example an index with 8 primary shards can be shrunk into 4, 2 or 1 primary shards or an index with 15 primary shards can be shrunk into 5, 3 or 1. If the number of shards in the index is a prime number it can only be shrunk into a single primary shard Before shrinking, a (primary or replica) copy of every shard in the index must be present on the same node. The current write index on a data stream cannot be shrunk. In order to shrink the current write index, the data stream must first be rolled over so that a new write index is created and then the previous write index can be shrunk. A shrink operation: * Creates a new target index with the same definition as the source index, but with a smaller number of primary shards. * Hard-links segments from the source index into the target index. If the file system does not support hard-linking, then all segments are copied into the new index, which is a much more time consuming process. Also if using multiple data paths, shards on different data paths require a full copy of segment files if they are not on the same disk since hardlinks do not work across disks. * Recovers the target index as though it were a closed index which had just been re-opened. Recovers shards to the `.routing.allocation.initial_recovery._id` index setting. IMPORTANT: Indices can only be shrunk if they satisfy the following requirements: * The target index must not exist. * The source index must have more primary shards than the target index. * The number of primary shards in the target index must be a factor of the number of primary shards in the source index. The source index must have more primary shards than the target index. * The index must not contain more than 2,147,483,519 documents in total across all shards that will be shrunk into a single shard on the target index as this is the maximum number of docs that can fit into a single shard. * The node handling the shrink process must have sufficient free disk space to accommodate a second copy of the existing index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-shrink-index.html | Elasticsearch API documentation}
      */
    shrink(this: That, params: T.IndicesShrinkRequest | TB.IndicesShrinkRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesShrinkResponse>;
    shrink(this: That, params: T.IndicesShrinkRequest | TB.IndicesShrinkRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesShrinkResponse, unknown>>;
    shrink(this: That, params: T.IndicesShrinkRequest | TB.IndicesShrinkRequest, options?: TransportRequestOptions): Promise<T.IndicesShrinkResponse>;
    /**
      * Simulate an index. Get the index configuration that would be applied to the specified index from an existing index template.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-simulate-index.html | Elasticsearch API documentation}
      */
    simulateIndexTemplate(this: That, params: T.IndicesSimulateIndexTemplateRequest | TB.IndicesSimulateIndexTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesSimulateIndexTemplateResponse>;
    simulateIndexTemplate(this: That, params: T.IndicesSimulateIndexTemplateRequest | TB.IndicesSimulateIndexTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesSimulateIndexTemplateResponse, unknown>>;
    simulateIndexTemplate(this: That, params: T.IndicesSimulateIndexTemplateRequest | TB.IndicesSimulateIndexTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesSimulateIndexTemplateResponse>;
    /**
      * Simulate an index template. Get the index configuration that would be applied by a particular index template.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-simulate-template.html | Elasticsearch API documentation}
      */
    simulateTemplate(this: That, params?: T.IndicesSimulateTemplateRequest | TB.IndicesSimulateTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesSimulateTemplateResponse>;
    simulateTemplate(this: That, params?: T.IndicesSimulateTemplateRequest | TB.IndicesSimulateTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesSimulateTemplateResponse, unknown>>;
    simulateTemplate(this: That, params?: T.IndicesSimulateTemplateRequest | TB.IndicesSimulateTemplateRequest, options?: TransportRequestOptions): Promise<T.IndicesSimulateTemplateResponse>;
    /**
      * Split an index. Split an index into a new index with more primary shards. * Before you can split an index: * The index must be read-only. * The cluster health status must be green. You can do make an index read-only with the following request using the add index block API: ``` PUT /my_source_index/_block/write ``` The current write index on a data stream cannot be split. In order to split the current write index, the data stream must first be rolled over so that a new write index is created and then the previous write index can be split. The number of times the index can be split (and the number of shards that each original shard can be split into) is determined by the `index.number_of_routing_shards` setting. The number of routing shards specifies the hashing space that is used internally to distribute documents across shards with consistent hashing. For instance, a 5 shard index with `number_of_routing_shards` set to 30 (5 x 2 x 3) could be split by a factor of 2 or 3. A split operation: * Creates a new target index with the same definition as the source index, but with a larger number of primary shards. * Hard-links segments from the source index into the target index. If the file system doesn't support hard-linking, all segments are copied into the new index, which is a much more time consuming process. * Hashes all documents again, after low level files are created, to delete documents that belong to a different shard. * Recovers the target index as though it were a closed index which had just been re-opened. IMPORTANT: Indices can only be split if they satisfy the following requirements: * The target index must not exist. * The source index must have fewer primary shards than the target index. * The number of primary shards in the target index must be a multiple of the number of primary shards in the source index. * The node handling the split process must have sufficient free disk space to accommodate a second copy of the existing index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-split-index.html | Elasticsearch API documentation}
      */
    split(this: That, params: T.IndicesSplitRequest | TB.IndicesSplitRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesSplitResponse>;
    split(this: That, params: T.IndicesSplitRequest | TB.IndicesSplitRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesSplitResponse, unknown>>;
    split(this: That, params: T.IndicesSplitRequest | TB.IndicesSplitRequest, options?: TransportRequestOptions): Promise<T.IndicesSplitResponse>;
    /**
      * Get index statistics. For data streams, the API retrieves statistics for the stream's backing indices. By default, the returned statistics are index-level with `primaries` and `total` aggregations. `primaries` are the values for only the primary shards. `total` are the accumulated values for both primary and replica shards. To get shard-level statistics, set the `level` parameter to `shards`. NOTE: When moving to another node, the shard-level statistics for a shard are cleared. Although the shard is no longer part of the node, that node retains any node-level statistics to which the shard contributed.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/indices-stats.html | Elasticsearch API documentation}
      */
    stats(this: That, params?: T.IndicesStatsRequest | TB.IndicesStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesStatsResponse>;
    stats(this: That, params?: T.IndicesStatsRequest | TB.IndicesStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesStatsResponse, unknown>>;
    stats(this: That, params?: T.IndicesStatsRequest | TB.IndicesStatsRequest, options?: TransportRequestOptions): Promise<T.IndicesStatsResponse>;
    /**
      * Unfreeze an index. When a frozen index is unfrozen, the index goes through the normal recovery process and becomes writeable again.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/unfreeze-index-api.html | Elasticsearch API documentation}
      */
    unfreeze(this: That, params: T.IndicesUnfreezeRequest | TB.IndicesUnfreezeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesUnfreezeResponse>;
    unfreeze(this: That, params: T.IndicesUnfreezeRequest | TB.IndicesUnfreezeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesUnfreezeResponse, unknown>>;
    unfreeze(this: That, params: T.IndicesUnfreezeRequest | TB.IndicesUnfreezeRequest, options?: TransportRequestOptions): Promise<T.IndicesUnfreezeResponse>;
    /**
      * Create or update an alias. Adds a data stream or index to an alias.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-indices-update-aliases | Elasticsearch API documentation}
      */
    updateAliases(this: That, params?: T.IndicesUpdateAliasesRequest | TB.IndicesUpdateAliasesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesUpdateAliasesResponse>;
    updateAliases(this: That, params?: T.IndicesUpdateAliasesRequest | TB.IndicesUpdateAliasesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesUpdateAliasesResponse, unknown>>;
    updateAliases(this: That, params?: T.IndicesUpdateAliasesRequest | TB.IndicesUpdateAliasesRequest, options?: TransportRequestOptions): Promise<T.IndicesUpdateAliasesResponse>;
    /**
      * Validate a query. Validates a query without running it.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-validate.html | Elasticsearch API documentation}
      */
    validateQuery(this: That, params?: T.IndicesValidateQueryRequest | TB.IndicesValidateQueryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IndicesValidateQueryResponse>;
    validateQuery(this: That, params?: T.IndicesValidateQueryRequest | TB.IndicesValidateQueryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IndicesValidateQueryResponse, unknown>>;
    validateQuery(this: That, params?: T.IndicesValidateQueryRequest | TB.IndicesValidateQueryRequest, options?: TransportRequestOptions): Promise<T.IndicesValidateQueryResponse>;
}
export {};
