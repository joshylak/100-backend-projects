import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Cat {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Get aliases. Get the cluster's index aliases, including filter and routing information. This API does not return data stream aliases. IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-alias.html | Elasticsearch API documentation}
      */
    aliases(this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatAliasesResponse>;
    aliases(this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatAliasesResponse, unknown>>;
    aliases(this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptions): Promise<T.CatAliasesResponse>;
    /**
      * Get shard allocation information. Get a snapshot of the number of shards allocated to each data node and their disk space. IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-allocation.html | Elasticsearch API documentation}
      */
    allocation(this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatAllocationResponse>;
    allocation(this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatAllocationResponse, unknown>>;
    allocation(this: That, params?: T.CatAllocationRequest | TB.CatAllocationRequest, options?: TransportRequestOptions): Promise<T.CatAllocationResponse>;
    /**
      * Get component templates. Get information about component templates in a cluster. Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases. IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get component template API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-component-templates.html | Elasticsearch API documentation}
      */
    componentTemplates(this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatComponentTemplatesResponse>;
    componentTemplates(this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatComponentTemplatesResponse, unknown>>;
    componentTemplates(this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptions): Promise<T.CatComponentTemplatesResponse>;
    /**
      * Get a document count. Get quick access to a document count for a data stream, an index, or an entire cluster. The document count only includes live documents, not deleted documents which have not yet been removed by the merge process. IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the count API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-count.html | Elasticsearch API documentation}
      */
    count(this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatCountResponse>;
    count(this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatCountResponse, unknown>>;
    count(this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptions): Promise<T.CatCountResponse>;
    /**
      * Get field data cache information. Get the amount of heap memory currently used by the field data cache on every data node in the cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes stats API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-fielddata.html | Elasticsearch API documentation}
      */
    fielddata(this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatFielddataResponse>;
    fielddata(this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatFielddataResponse, unknown>>;
    fielddata(this: That, params?: T.CatFielddataRequest | TB.CatFielddataRequest, options?: TransportRequestOptions): Promise<T.CatFielddataResponse>;
    /**
      * Get the cluster health status. IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the cluster health API. This API is often used to check malfunctioning clusters. To help you track cluster health alongside log files and alerting systems, the API returns timestamps in two formats: `HH:MM:SS`, which is human-readable but includes no date information; `Unix epoch time`, which is machine-sortable and includes date information. The latter format is useful for cluster recoveries that take multiple days. You can use the cat health API to verify cluster health across multiple nodes. You also can use the API to track the recovery of a large cluster over a longer period of time.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-health.html | Elasticsearch API documentation}
      */
    health(this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatHealthResponse>;
    health(this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatHealthResponse, unknown>>;
    health(this: That, params?: T.CatHealthRequest | TB.CatHealthRequest, options?: TransportRequestOptions): Promise<T.CatHealthResponse>;
    /**
      * Get CAT help. Get help for the CAT APIs.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat.html | Elasticsearch API documentation}
      */
    help(this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatHelpResponse>;
    help(this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatHelpResponse, unknown>>;
    help(this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptions): Promise<T.CatHelpResponse>;
    /**
      * Get index information. Get high-level information about indices in a cluster, including backing indices for data streams. Use this request to get the following information for each index in a cluster: - shard count - document count - deleted document count - primary store size - total store size of all shards, including shard replicas These metrics are retrieved directly from Lucene, which Elasticsearch uses internally to power indexing and search. As a result, all document counts include hidden nested documents. To get an accurate count of Elasticsearch documents, use the cat count or count APIs. CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use an index endpoint.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-indices.html | Elasticsearch API documentation}
      */
    indices(this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatIndicesResponse>;
    indices(this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatIndicesResponse, unknown>>;
    indices(this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptions): Promise<T.CatIndicesResponse>;
    /**
      * Get master node information. Get information about the master node, including the ID, bound IP address, and name. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-master.html | Elasticsearch API documentation}
      */
    master(this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMasterResponse>;
    master(this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMasterResponse, unknown>>;
    master(this: That, params?: T.CatMasterRequest | TB.CatMasterRequest, options?: TransportRequestOptions): Promise<T.CatMasterResponse>;
    /**
      * Get data frame analytics jobs. Get configuration and usage information about data frame analytics jobs. IMPORTANT: CAT APIs are only intended for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, use the get data frame analytics jobs statistics API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-dfanalytics.html | Elasticsearch API documentation}
      */
    mlDataFrameAnalytics(this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDataFrameAnalyticsResponse>;
    mlDataFrameAnalytics(this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDataFrameAnalyticsResponse, unknown>>;
    mlDataFrameAnalytics(this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptions): Promise<T.CatMlDataFrameAnalyticsResponse>;
    /**
      * Get datafeeds. Get configuration and usage information about datafeeds. This API returns a maximum of 10,000 datafeeds. If the Elasticsearch security features are enabled, you must have `monitor_ml`, `monitor`, `manage_ml`, or `manage` cluster privileges to use this API. IMPORTANT: CAT APIs are only intended for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, use the get datafeed statistics API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-datafeeds.html | Elasticsearch API documentation}
      */
    mlDatafeeds(this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDatafeedsResponse>;
    mlDatafeeds(this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDatafeedsResponse, unknown>>;
    mlDatafeeds(this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptions): Promise<T.CatMlDatafeedsResponse>;
    /**
      * Get anomaly detection jobs. Get configuration and usage information for anomaly detection jobs. This API returns a maximum of 10,000 jobs. If the Elasticsearch security features are enabled, you must have `monitor_ml`, `monitor`, `manage_ml`, or `manage` cluster privileges to use this API. IMPORTANT: CAT APIs are only intended for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, use the get anomaly detection job statistics API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-anomaly-detectors.html | Elasticsearch API documentation}
      */
    mlJobs(this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlJobsResponse>;
    mlJobs(this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlJobsResponse, unknown>>;
    mlJobs(this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptions): Promise<T.CatMlJobsResponse>;
    /**
      * Get trained models. Get configuration and usage information about inference trained models. IMPORTANT: CAT APIs are only intended for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, use the get trained models statistics API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-trained-model.html | Elasticsearch API documentation}
      */
    mlTrainedModels(this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlTrainedModelsResponse>;
    mlTrainedModels(this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlTrainedModelsResponse, unknown>>;
    mlTrainedModels(this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptions): Promise<T.CatMlTrainedModelsResponse>;
    /**
      * Get node attribute information. Get information about custom node attributes. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-nodeattrs.html | Elasticsearch API documentation}
      */
    nodeattrs(this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatNodeattrsResponse>;
    nodeattrs(this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatNodeattrsResponse, unknown>>;
    nodeattrs(this: That, params?: T.CatNodeattrsRequest | TB.CatNodeattrsRequest, options?: TransportRequestOptions): Promise<T.CatNodeattrsResponse>;
    /**
      * Get node information. Get information about the nodes in a cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-nodes.html | Elasticsearch API documentation}
      */
    nodes(this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatNodesResponse>;
    nodes(this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatNodesResponse, unknown>>;
    nodes(this: That, params?: T.CatNodesRequest | TB.CatNodesRequest, options?: TransportRequestOptions): Promise<T.CatNodesResponse>;
    /**
      * Get pending task information. Get information about cluster-level changes that have not yet taken effect. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the pending cluster tasks API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-pending-tasks.html | Elasticsearch API documentation}
      */
    pendingTasks(this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatPendingTasksResponse>;
    pendingTasks(this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatPendingTasksResponse, unknown>>;
    pendingTasks(this: That, params?: T.CatPendingTasksRequest | TB.CatPendingTasksRequest, options?: TransportRequestOptions): Promise<T.CatPendingTasksResponse>;
    /**
      * Get plugin information. Get a list of plugins running on each node of a cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-plugins.html | Elasticsearch API documentation}
      */
    plugins(this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatPluginsResponse>;
    plugins(this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatPluginsResponse, unknown>>;
    plugins(this: That, params?: T.CatPluginsRequest | TB.CatPluginsRequest, options?: TransportRequestOptions): Promise<T.CatPluginsResponse>;
    /**
      * Get shard recovery information. Get information about ongoing and completed shard recoveries. Shard recovery is the process of initializing a shard copy, such as restoring a primary shard from a snapshot or syncing a replica shard from a primary shard. When a shard recovery completes, the recovered shard is available for search and indexing. For data streams, the API returns information about the stream’s backing indices. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the index recovery API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-recovery.html | Elasticsearch API documentation}
      */
    recovery(this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatRecoveryResponse>;
    recovery(this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatRecoveryResponse, unknown>>;
    recovery(this: That, params?: T.CatRecoveryRequest | TB.CatRecoveryRequest, options?: TransportRequestOptions): Promise<T.CatRecoveryResponse>;
    /**
      * Get snapshot repository information. Get a list of snapshot repositories for a cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot repository API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-repositories.html | Elasticsearch API documentation}
      */
    repositories(this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatRepositoriesResponse>;
    repositories(this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatRepositoriesResponse, unknown>>;
    repositories(this: That, params?: T.CatRepositoriesRequest | TB.CatRepositoriesRequest, options?: TransportRequestOptions): Promise<T.CatRepositoriesResponse>;
    /**
      * Get segment information. Get low-level information about the Lucene segments in index shards. For data streams, the API returns information about the backing indices. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the index segments API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-segments.html | Elasticsearch API documentation}
      */
    segments(this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatSegmentsResponse>;
    segments(this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatSegmentsResponse, unknown>>;
    segments(this: That, params?: T.CatSegmentsRequest | TB.CatSegmentsRequest, options?: TransportRequestOptions): Promise<T.CatSegmentsResponse>;
    /**
      * Get shard information. Get information about the shards in a cluster. For data streams, the API returns information about the backing indices. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-shards.html | Elasticsearch API documentation}
      */
    shards(this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatShardsResponse>;
    shards(this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatShardsResponse, unknown>>;
    shards(this: That, params?: T.CatShardsRequest | TB.CatShardsRequest, options?: TransportRequestOptions): Promise<T.CatShardsResponse>;
    /**
      * Get snapshot information. Get information about the snapshots stored in one or more repositories. A snapshot is a backup of an index or running Elasticsearch cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-snapshots.html | Elasticsearch API documentation}
      */
    snapshots(this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatSnapshotsResponse>;
    snapshots(this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatSnapshotsResponse, unknown>>;
    snapshots(this: That, params?: T.CatSnapshotsRequest | TB.CatSnapshotsRequest, options?: TransportRequestOptions): Promise<T.CatSnapshotsResponse>;
    /**
      * Get task information. Get information about tasks currently running in the cluster. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the task management API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-tasks.html | Elasticsearch API documentation}
      */
    tasks(this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTasksResponse>;
    tasks(this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTasksResponse, unknown>>;
    tasks(this: That, params?: T.CatTasksRequest | TB.CatTasksRequest, options?: TransportRequestOptions): Promise<T.CatTasksResponse>;
    /**
      * Get index template information. Get information about the index templates in a cluster. You can use index templates to apply index settings and field mappings to new indices at creation. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get index template API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-templates.html | Elasticsearch API documentation}
      */
    templates(this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTemplatesResponse>;
    templates(this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTemplatesResponse, unknown>>;
    templates(this: That, params?: T.CatTemplatesRequest | TB.CatTemplatesRequest, options?: TransportRequestOptions): Promise<T.CatTemplatesResponse>;
    /**
      * Get thread pool statistics. Get thread pool statistics for each node in a cluster. Returned information includes all built-in thread pools and custom thread pools. IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-thread-pool.html | Elasticsearch API documentation}
      */
    threadPool(this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatThreadPoolResponse>;
    threadPool(this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatThreadPoolResponse, unknown>>;
    threadPool(this: That, params?: T.CatThreadPoolRequest | TB.CatThreadPoolRequest, options?: TransportRequestOptions): Promise<T.CatThreadPoolResponse>;
    /**
      * Get transform information. Get configuration and usage information about transforms. CAT APIs are only intended for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, use the get transform statistics API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cat-transforms.html | Elasticsearch API documentation}
      */
    transforms(this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTransformsResponse>;
    transforms(this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTransformsResponse, unknown>>;
    transforms(this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptions): Promise<T.CatTransformsResponse>;
}
export {};
