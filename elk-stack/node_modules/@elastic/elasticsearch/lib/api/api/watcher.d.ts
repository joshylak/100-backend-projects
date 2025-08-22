import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Watcher {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Acknowledge a watch. Acknowledging a watch enables you to manually throttle the execution of the watch's actions. The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure. IMPORTANT: If the specified watch is currently being executed, this API will return an error The reason for this behavior is to prevent overwriting the watch status from a watch execution. Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`. This happens when the condition of the watch is not met (the condition evaluates to false).
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-ack-watch | Elasticsearch API documentation}
      */
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherAckWatchResponse>;
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherAckWatchResponse, unknown>>;
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherAckWatchResponse>;
    /**
      * Activate a watch. A watch can be either active or inactive.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-activate-watch | Elasticsearch API documentation}
      */
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherActivateWatchResponse>;
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherActivateWatchResponse, unknown>>;
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherActivateWatchResponse>;
    /**
      * Deactivate a watch. A watch can be either active or inactive.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-deactivate-watch | Elasticsearch API documentation}
      */
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeactivateWatchResponse>;
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeactivateWatchResponse, unknown>>;
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeactivateWatchResponse>;
    /**
      * Delete a watch. When the watch is removed, the document representing the watch in the `.watches` index is gone and it will never be run again. Deleting a watch does not delete any watch execution records related to this watch from the watch history. IMPORTANT: Deleting a watch must be done by using only this API. Do not delete the watch directly from the `.watches` index using the Elasticsearch delete document API When Elasticsearch security features are enabled, make sure no write privileges are granted to anyone for the `.watches` index.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-delete-watch | Elasticsearch API documentation}
      */
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeleteWatchResponse>;
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeleteWatchResponse, unknown>>;
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeleteWatchResponse>;
    /**
      * Run a watch. This API can be used to force execution of the watch outside of its triggering logic or to simulate the watch execution for debugging purposes. For testing and debugging purposes, you also have fine-grained control on how the watch runs. You can run the watch without running all of its actions or alternatively by simulating them. You can also force execution by ignoring the watch condition and control whether a watch record would be written to the watch history after it runs. You can use the run watch API to run watches that are not yet registered by specifying the watch definition inline. This serves as great tool for testing and debugging your watches prior to adding them to Watcher. When Elasticsearch security features are enabled on your cluster, watches are run with the privileges of the user that stored the watches. If your user is allowed to read index `a`, but not index `b`, then the exact same set of rules will apply during execution of a watch. When using the run watch API, the authorization data of the user that called the API will be used as a base, instead of the information who stored the watch.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-execute-watch | Elasticsearch API documentation}
      */
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherExecuteWatchResponse>;
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherExecuteWatchResponse, unknown>>;
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherExecuteWatchResponse>;
    /**
      * Get Watcher index settings. Get settings for the Watcher internal index (`.watches`). Only a subset of settings are shown, for example `index.auto_expand_replicas` and `index.number_of_replicas`.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-get-settings | Elasticsearch API documentation}
      */
    getSettings(this: That, params?: T.WatcherGetSettingsRequest | TB.WatcherGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetSettingsResponse>;
    getSettings(this: That, params?: T.WatcherGetSettingsRequest | TB.WatcherGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetSettingsResponse, unknown>>;
    getSettings(this: That, params?: T.WatcherGetSettingsRequest | TB.WatcherGetSettingsRequest, options?: TransportRequestOptions): Promise<T.WatcherGetSettingsResponse>;
    /**
      * Get a watch.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-get-watch | Elasticsearch API documentation}
      */
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetWatchResponse>;
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetWatchResponse, unknown>>;
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherGetWatchResponse>;
    /**
      * Create or update a watch. When a watch is registered, a new document that represents the watch is added to the `.watches` index and its trigger is immediately registered with the relevant trigger engine. Typically for the `schedule` trigger, the scheduler is the trigger engine. IMPORTANT: You must use Kibana or this API to create a watch. Do not add a watch directly to the `.watches` index by using the Elasticsearch index API. If Elasticsearch security features are enabled, do not give users write privileges on the `.watches` index. When you add a watch you can also define its initial active state by setting the *active* parameter. When Elasticsearch security features are enabled, your watch can index or search only on indices for which the user that stored the watch has privileges. If the user is able to read index `a`, but not index `b`, the same will apply when the watch runs.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-put-watch | Elasticsearch API documentation}
      */
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherPutWatchResponse>;
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherPutWatchResponse, unknown>>;
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherPutWatchResponse>;
    /**
      * Query watches. Get all registered watches in a paginated manner and optionally filter watches by a query. Note that only the `_id` and `metadata.*` fields are queryable or sortable.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-query-watches | Elasticsearch API documentation}
      */
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherQueryWatchesResponse>;
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherQueryWatchesResponse, unknown>>;
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<T.WatcherQueryWatchesResponse>;
    /**
      * Start the watch service. Start the Watcher service if it is not already running.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-start | Elasticsearch API documentation}
      */
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStartResponse>;
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStartResponse, unknown>>;
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptions): Promise<T.WatcherStartResponse>;
    /**
      * Get Watcher statistics. This API always returns basic metrics. You retrieve more metrics by using the metric parameter.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-stats | Elasticsearch API documentation}
      */
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStatsResponse>;
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStatsResponse, unknown>>;
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptions): Promise<T.WatcherStatsResponse>;
    /**
      * Stop the watch service. Stop the Watcher service if it is running.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-stop | Elasticsearch API documentation}
      */
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStopResponse>;
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStopResponse, unknown>>;
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptions): Promise<T.WatcherStopResponse>;
    /**
      * Update Watcher index settings. Update settings for the Watcher internal index (`.watches`). Only a subset of settings can be modified. This includes `index.auto_expand_replicas`, `index.number_of_replicas`, `index.routing.allocation.exclude.*`, `index.routing.allocation.include.*` and `index.routing.allocation.require.*`. Modification of `index.routing.allocation.include._tier_preference` is an exception and is not allowed as the Watcher shards must always be in the `data_content` tier.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-watcher-update-settings | Elasticsearch API documentation}
      */
    updateSettings(this: That, params?: T.WatcherUpdateSettingsRequest | TB.WatcherUpdateSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherUpdateSettingsResponse>;
    updateSettings(this: That, params?: T.WatcherUpdateSettingsRequest | TB.WatcherUpdateSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherUpdateSettingsResponse, unknown>>;
    updateSettings(this: That, params?: T.WatcherUpdateSettingsRequest | TB.WatcherUpdateSettingsRequest, options?: TransportRequestOptions): Promise<T.WatcherUpdateSettingsResponse>;
}
export {};
