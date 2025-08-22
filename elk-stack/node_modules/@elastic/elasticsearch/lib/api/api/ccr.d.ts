import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Ccr {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete auto-follow patterns. Delete a collection of cross-cluster replication auto-follow patterns.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-delete-auto-follow-pattern.html | Elasticsearch API documentation}
      */
    deleteAutoFollowPattern(this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrDeleteAutoFollowPatternResponse>;
    deleteAutoFollowPattern(this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrDeleteAutoFollowPatternResponse, unknown>>;
    deleteAutoFollowPattern(this: That, params: T.CcrDeleteAutoFollowPatternRequest | TB.CcrDeleteAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrDeleteAutoFollowPatternResponse>;
    /**
      * Create a follower. Create a cross-cluster replication follower index that follows a specific leader index. When the API returns, the follower index exists and cross-cluster replication starts replicating operations from the leader index to the follower index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-put-follow.html | Elasticsearch API documentation}
      */
    follow(this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowResponse>;
    follow(this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowResponse, unknown>>;
    follow(this: That, params: T.CcrFollowRequest | TB.CcrFollowRequest, options?: TransportRequestOptions): Promise<T.CcrFollowResponse>;
    /**
      * Get follower information. Get information about all cross-cluster replication follower indices. For example, the results include follower index names, leader index names, replication options, and whether the follower indices are active or paused.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-get-follow-info.html | Elasticsearch API documentation}
      */
    followInfo(this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowInfoResponse>;
    followInfo(this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowInfoResponse, unknown>>;
    followInfo(this: That, params: T.CcrFollowInfoRequest | TB.CcrFollowInfoRequest, options?: TransportRequestOptions): Promise<T.CcrFollowInfoResponse>;
    /**
      * Get follower stats. Get cross-cluster replication follower stats. The API returns shard-level stats about the "following tasks" associated with each shard for the specified indices.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-get-follow-stats.html | Elasticsearch API documentation}
      */
    followStats(this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrFollowStatsResponse>;
    followStats(this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrFollowStatsResponse, unknown>>;
    followStats(this: That, params: T.CcrFollowStatsRequest | TB.CcrFollowStatsRequest, options?: TransportRequestOptions): Promise<T.CcrFollowStatsResponse>;
    /**
      * Forget a follower. Remove the cross-cluster replication follower retention leases from the leader. A following index takes out retention leases on its leader index. These leases are used to increase the likelihood that the shards of the leader index retain the history of operations that the shards of the following index need to run replication. When a follower index is converted to a regular index by the unfollow API (either by directly calling the API or by index lifecycle management tasks), these leases are removed. However, removal of the leases can fail, for example when the remote cluster containing the leader index is unavailable. While the leases will eventually expire on their own, their extended existence can cause the leader index to hold more history than necessary and prevent index lifecycle management from performing some operations on the leader index. This API exists to enable manually removing the leases when the unfollow API is unable to do so. NOTE: This API does not stop replication by a following index. If you use this API with a follower index that is still actively following, the following index will add back retention leases on the leader. The only purpose of this API is to handle the case of failure to remove the following retention leases after the unfollow API is invoked.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-post-forget-follower.html | Elasticsearch API documentation}
      */
    forgetFollower(this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrForgetFollowerResponse>;
    forgetFollower(this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrForgetFollowerResponse, unknown>>;
    forgetFollower(this: That, params: T.CcrForgetFollowerRequest | TB.CcrForgetFollowerRequest, options?: TransportRequestOptions): Promise<T.CcrForgetFollowerResponse>;
    /**
      * Get auto-follow patterns. Get cross-cluster replication auto-follow patterns.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-get-auto-follow-pattern.html | Elasticsearch API documentation}
      */
    getAutoFollowPattern(this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrGetAutoFollowPatternResponse>;
    getAutoFollowPattern(this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrGetAutoFollowPatternResponse, unknown>>;
    getAutoFollowPattern(this: That, params?: T.CcrGetAutoFollowPatternRequest | TB.CcrGetAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrGetAutoFollowPatternResponse>;
    /**
      * Pause an auto-follow pattern. Pause a cross-cluster replication auto-follow pattern. When the API returns, the auto-follow pattern is inactive. New indices that are created on the remote cluster and match the auto-follow patterns are ignored. You can resume auto-following with the resume auto-follow pattern API. When it resumes, the auto-follow pattern is active again and automatically configures follower indices for newly created indices on the remote cluster that match its patterns. Remote indices that were created while the pattern was paused will also be followed, unless they have been deleted or closed in the interim.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-pause-auto-follow-pattern.html | Elasticsearch API documentation}
      */
    pauseAutoFollowPattern(this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPauseAutoFollowPatternResponse>;
    pauseAutoFollowPattern(this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPauseAutoFollowPatternResponse, unknown>>;
    pauseAutoFollowPattern(this: That, params: T.CcrPauseAutoFollowPatternRequest | TB.CcrPauseAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrPauseAutoFollowPatternResponse>;
    /**
      * Pause a follower. Pause a cross-cluster replication follower index. The follower index will not fetch any additional operations from the leader index. You can resume following with the resume follower API. You can pause and resume a follower index to change the configuration of the following task.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-post-pause-follow.html | Elasticsearch API documentation}
      */
    pauseFollow(this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPauseFollowResponse>;
    pauseFollow(this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPauseFollowResponse, unknown>>;
    pauseFollow(this: That, params: T.CcrPauseFollowRequest | TB.CcrPauseFollowRequest, options?: TransportRequestOptions): Promise<T.CcrPauseFollowResponse>;
    /**
      * Create or update auto-follow patterns. Create a collection of cross-cluster replication auto-follow patterns for a remote cluster. Newly created indices on the remote cluster that match any of the patterns are automatically configured as follower indices. Indices on the remote cluster that were created before the auto-follow pattern was created will not be auto-followed even if they match the pattern. This API can also be used to update auto-follow patterns. NOTE: Follower indices that were configured automatically before updating an auto-follow pattern will remain unchanged even if they do not match against the new patterns.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-put-auto-follow-pattern.html | Elasticsearch API documentation}
      */
    putAutoFollowPattern(this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrPutAutoFollowPatternResponse>;
    putAutoFollowPattern(this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrPutAutoFollowPatternResponse, unknown>>;
    putAutoFollowPattern(this: That, params: T.CcrPutAutoFollowPatternRequest | TB.CcrPutAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrPutAutoFollowPatternResponse>;
    /**
      * Resume an auto-follow pattern. Resume a cross-cluster replication auto-follow pattern that was paused. The auto-follow pattern will resume configuring following indices for newly created indices that match its patterns on the remote cluster. Remote indices created while the pattern was paused will also be followed unless they have been deleted or closed in the interim.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-resume-auto-follow-pattern.html | Elasticsearch API documentation}
      */
    resumeAutoFollowPattern(this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrResumeAutoFollowPatternResponse>;
    resumeAutoFollowPattern(this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrResumeAutoFollowPatternResponse, unknown>>;
    resumeAutoFollowPattern(this: That, params: T.CcrResumeAutoFollowPatternRequest | TB.CcrResumeAutoFollowPatternRequest, options?: TransportRequestOptions): Promise<T.CcrResumeAutoFollowPatternResponse>;
    /**
      * Resume a follower. Resume a cross-cluster replication follower index that was paused. The follower index could have been paused with the pause follower API. Alternatively it could be paused due to replication that cannot be retried due to failures during following tasks. When this API returns, the follower index will resume fetching operations from the leader index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-post-resume-follow.html | Elasticsearch API documentation}
      */
    resumeFollow(this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrResumeFollowResponse>;
    resumeFollow(this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrResumeFollowResponse, unknown>>;
    resumeFollow(this: That, params: T.CcrResumeFollowRequest | TB.CcrResumeFollowRequest, options?: TransportRequestOptions): Promise<T.CcrResumeFollowResponse>;
    /**
      * Get cross-cluster replication stats. This API returns stats about auto-following and the same shard-level stats as the get follower stats API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-get-stats.html | Elasticsearch API documentation}
      */
    stats(this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrStatsResponse>;
    stats(this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrStatsResponse, unknown>>;
    stats(this: That, params?: T.CcrStatsRequest | TB.CcrStatsRequest, options?: TransportRequestOptions): Promise<T.CcrStatsResponse>;
    /**
      * Unfollow an index. Convert a cross-cluster replication follower index to a regular index. The API stops the following task associated with a follower index and removes index metadata and settings associated with cross-cluster replication. The follower index must be paused and closed before you call the unfollow API. > info > Currently cross-cluster replication does not support converting an existing regular index to a follower index. Converting a follower index to a regular index is an irreversible operation.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ccr-post-unfollow.html | Elasticsearch API documentation}
      */
    unfollow(this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CcrUnfollowResponse>;
    unfollow(this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CcrUnfollowResponse, unknown>>;
    unfollow(this: That, params: T.CcrUnfollowRequest | TB.CcrUnfollowRequest, options?: TransportRequestOptions): Promise<T.CcrUnfollowResponse>;
}
export {};
