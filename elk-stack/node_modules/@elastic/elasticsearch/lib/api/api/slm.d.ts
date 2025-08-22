import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Slm {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete a policy. Delete a snapshot lifecycle policy definition. This operation prevents any future snapshots from being taken but does not cancel in-progress snapshots or remove previously-taken snapshots.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-delete-policy.html | Elasticsearch API documentation}
      */
    deleteLifecycle(this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmDeleteLifecycleResponse>;
    deleteLifecycle(this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmDeleteLifecycleResponse, unknown>>;
    deleteLifecycle(this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmDeleteLifecycleResponse>;
    /**
      * Run a policy. Immediately create a snapshot according to the snapshot lifecycle policy without waiting for the scheduled time. The snapshot policy is normally applied according to its schedule, but you might want to manually run a policy before performing an upgrade or other maintenance.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-execute-lifecycle.html | Elasticsearch API documentation}
      */
    executeLifecycle(this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteLifecycleResponse>;
    executeLifecycle(this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteLifecycleResponse, unknown>>;
    executeLifecycle(this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteLifecycleResponse>;
    /**
      * Run a retention policy. Manually apply the retention policy to force immediate removal of snapshots that are expired according to the snapshot lifecycle policy retention rules. The retention policy is normally applied according to its schedule.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-execute-retention.html | Elasticsearch API documentation}
      */
    executeRetention(this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteRetentionResponse>;
    executeRetention(this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteRetentionResponse, unknown>>;
    executeRetention(this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteRetentionResponse>;
    /**
      * Get policy information. Get snapshot lifecycle policy definitions and information about the latest snapshot attempts.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-get-policy.html | Elasticsearch API documentation}
      */
    getLifecycle(this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetLifecycleResponse>;
    getLifecycle(this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetLifecycleResponse, unknown>>;
    getLifecycle(this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmGetLifecycleResponse>;
    /**
      * Get snapshot lifecycle management statistics. Get global and policy-level statistics about actions taken by snapshot lifecycle management.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-get-stats.html | Elasticsearch API documentation}
      */
    getStats(this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatsResponse>;
    getStats(this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatsResponse, unknown>>;
    getStats(this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatsResponse>;
    /**
      * Get the snapshot lifecycle management status.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-get-status.html | Elasticsearch API documentation}
      */
    getStatus(this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatusResponse>;
    getStatus(this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatusResponse, unknown>>;
    getStatus(this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatusResponse>;
    /**
      * Create or update a policy. Create or update a snapshot lifecycle policy. If the policy already exists, this request increments the policy version. Only the latest version of a policy is stored.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-put-policy.html | Elasticsearch API documentation}
      */
    putLifecycle(this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmPutLifecycleResponse>;
    putLifecycle(this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmPutLifecycleResponse, unknown>>;
    putLifecycle(this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmPutLifecycleResponse>;
    /**
      * Start snapshot lifecycle management. Snapshot lifecycle management (SLM) starts automatically when a cluster is formed. Manually starting SLM is necessary only if it has been stopped using the stop SLM API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-start.html | Elasticsearch API documentation}
      */
    start(this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStartResponse>;
    start(this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStartResponse, unknown>>;
    start(this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptions): Promise<T.SlmStartResponse>;
    /**
      * Stop snapshot lifecycle management. Stop all snapshot lifecycle management (SLM) operations and the SLM plugin. This API is useful when you are performing maintenance on a cluster and need to prevent SLM from performing any actions on your data streams or indices. Stopping SLM does not stop any snapshots that are in progress. You can manually trigger snapshots with the run snapshot lifecycle policy API even if SLM is stopped. The API returns a response as soon as the request is acknowledged, but the plugin might continue to run until in-progress operations complete and it can be safely stopped. Use the get snapshot lifecycle management status API to see if SLM is running.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/slm-api-stop.html | Elasticsearch API documentation}
      */
    stop(this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStopResponse>;
    stop(this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStopResponse, unknown>>;
    stop(this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptions): Promise<T.SlmStopResponse>;
}
export {};
