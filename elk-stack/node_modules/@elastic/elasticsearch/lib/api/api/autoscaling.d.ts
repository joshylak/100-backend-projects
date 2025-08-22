import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Autoscaling {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete an autoscaling policy. NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/autoscaling-delete-autoscaling-policy.html | Elasticsearch API documentation}
      */
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>;
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingDeleteAutoscalingPolicyResponse, unknown>>;
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>;
    /**
      * Get the autoscaling capacity. NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported. This API gets the current autoscaling capacity based on the configured autoscaling policy. It will return information to size the cluster appropriately to the current workload. The `required_capacity` is calculated as the maximum of the `required_capacity` result of all individual deciders that are enabled for the policy. The operator should verify that the `current_nodes` match the operator’s knowledge of the cluster to avoid making autoscaling decisions based on stale or incomplete information. The response contains decider-specific information you can use to diagnose how and why autoscaling determined a certain capacity was required. This information is provided for diagnosis only. Do not use this information to make autoscaling decisions.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/autoscaling-get-autoscaling-capacity.html | Elasticsearch API documentation}
      */
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingCapacityResponse>;
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingCapacityResponse, unknown>>;
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingCapacityResponse>;
    /**
      * Get an autoscaling policy. NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/autoscaling-get-autoscaling-capacity.html | Elasticsearch API documentation}
      */
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingPolicyResponse>;
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingPolicyResponse, unknown>>;
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingPolicyResponse>;
    /**
      * Create or update an autoscaling policy. NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/autoscaling-put-autoscaling-policy.html | Elasticsearch API documentation}
      */
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingPutAutoscalingPolicyResponse>;
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingPutAutoscalingPolicyResponse, unknown>>;
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingPutAutoscalingPolicyResponse>;
}
export {};
