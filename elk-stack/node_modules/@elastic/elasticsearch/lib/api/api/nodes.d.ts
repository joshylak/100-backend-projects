import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Nodes {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Clear the archived repositories metering. Clear the archived repositories metering information in the cluster.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/clear-repositories-metering-archive-api.html | Elasticsearch API documentation}
      */
    clearRepositoriesMeteringArchive(this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesClearRepositoriesMeteringArchiveResponse>;
    clearRepositoriesMeteringArchive(this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesClearRepositoriesMeteringArchiveResponse, unknown>>;
    clearRepositoriesMeteringArchive(this: That, params: T.NodesClearRepositoriesMeteringArchiveRequest | TB.NodesClearRepositoriesMeteringArchiveRequest, options?: TransportRequestOptions): Promise<T.NodesClearRepositoriesMeteringArchiveResponse>;
    /**
      * Get cluster repositories metering. Get repositories metering information for a cluster. This API exposes monotonically non-decreasing counters and it is expected that clients would durably store the information needed to compute aggregations over a period of time. Additionally, the information exposed by this API is volatile, meaning that it will not be present after node restarts.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-repositories-metering-api.html | Elasticsearch API documentation}
      */
    getRepositoriesMeteringInfo(this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesGetRepositoriesMeteringInfoResponse>;
    getRepositoriesMeteringInfo(this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesGetRepositoriesMeteringInfoResponse, unknown>>;
    getRepositoriesMeteringInfo(this: That, params: T.NodesGetRepositoriesMeteringInfoRequest | TB.NodesGetRepositoriesMeteringInfoRequest, options?: TransportRequestOptions): Promise<T.NodesGetRepositoriesMeteringInfoResponse>;
    /**
      * Get the hot threads for nodes. Get a breakdown of the hot threads on each selected node in the cluster. The output is plain text with a breakdown of the top hot threads for each node.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cluster-nodes-hot-threads.html | Elasticsearch API documentation}
      */
    hotThreads(this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesHotThreadsResponse>;
    hotThreads(this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesHotThreadsResponse, unknown>>;
    hotThreads(this: That, params?: T.NodesHotThreadsRequest | TB.NodesHotThreadsRequest, options?: TransportRequestOptions): Promise<T.NodesHotThreadsResponse>;
    /**
      * Get node information. By default, the API returns all attributes and core settings for cluster nodes.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cluster-nodes-info.html | Elasticsearch API documentation}
      */
    info(this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesInfoResponse>;
    info(this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesInfoResponse, unknown>>;
    info(this: That, params?: T.NodesInfoRequest | TB.NodesInfoRequest, options?: TransportRequestOptions): Promise<T.NodesInfoResponse>;
    /**
      * Reload the keystore on nodes in the cluster. Secure settings are stored in an on-disk keystore. Certain of these settings are reloadable. That is, you can change them on disk and reload them without restarting any nodes in the cluster. When you have updated reloadable secure settings in your keystore, you can use this API to reload those settings on each node. When the Elasticsearch keystore is password protected and not simply obfuscated, you must provide the password for the keystore when you reload the secure settings. Reloading the settings for the whole cluster assumes that the keystores for all nodes are protected with the same password; this method is allowed only when inter-node communications are encrypted. Alternatively, you can reload the secure settings on each node by locally accessing the API and passing the node-specific Elasticsearch keystore password.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cluster-nodes-reload-secure-settings.html | Elasticsearch API documentation}
      */
    reloadSecureSettings(this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesReloadSecureSettingsResponse>;
    reloadSecureSettings(this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesReloadSecureSettingsResponse, unknown>>;
    reloadSecureSettings(this: That, params?: T.NodesReloadSecureSettingsRequest | TB.NodesReloadSecureSettingsRequest, options?: TransportRequestOptions): Promise<T.NodesReloadSecureSettingsResponse>;
    /**
      * Get node statistics. Get statistics for nodes in a cluster. By default, all stats are returned. You can limit the returned information by using metrics.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cluster-nodes-stats.html | Elasticsearch API documentation}
      */
    stats(this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesStatsResponse>;
    stats(this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesStatsResponse, unknown>>;
    stats(this: That, params?: T.NodesStatsRequest | TB.NodesStatsRequest, options?: TransportRequestOptions): Promise<T.NodesStatsResponse>;
    /**
      * Get feature usage information.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cluster-nodes-usage.html | Elasticsearch API documentation}
      */
    usage(this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.NodesUsageResponse>;
    usage(this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.NodesUsageResponse, unknown>>;
    usage(this: That, params?: T.NodesUsageRequest | TB.NodesUsageRequest, options?: TransportRequestOptions): Promise<T.NodesUsageResponse>;
}
export {};
