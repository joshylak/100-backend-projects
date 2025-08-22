import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class License {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete the license. When the license expires, your subscription level reverts to Basic. If the operator privileges feature is enabled, only operator users can use this API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-license.html | Elasticsearch API documentation}
      */
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseDeleteResponse>;
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseDeleteResponse, unknown>>;
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptions): Promise<T.LicenseDeleteResponse>;
    /**
      * Get license information. Get information about your Elastic license including its type, its status, when it was issued, and when it expires. >info > If the master node is generating a new cluster state, the get license API may return a `404 Not Found` response. > If you receive an unexpected 404 response after cluster startup, wait a short period and retry the request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-license.html | Elasticsearch API documentation}
      */
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetResponse>;
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetResponse, unknown>>;
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptions): Promise<T.LicenseGetResponse>;
    /**
      * Get the basic license status.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-basic-status.html | Elasticsearch API documentation}
      */
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetBasicStatusResponse>;
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetBasicStatusResponse, unknown>>;
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetBasicStatusResponse>;
    /**
      * Get the trial status.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-trial-status.html | Elasticsearch API documentation}
      */
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetTrialStatusResponse>;
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetTrialStatusResponse, unknown>>;
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetTrialStatusResponse>;
    /**
      * Update the license. You can update your license at runtime without shutting down your nodes. License updates take effect immediately. If the license you are installing does not support all of the features that were available with your previous license, however, you are notified in the response. You must then re-submit the API request with the acknowledge parameter set to true. NOTE: If Elasticsearch security features are enabled and you are installing a gold or higher license, you must enable TLS on the transport networking layer before you install the license. If the operator privileges feature is enabled, only operator users can use this API.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-license-post | Elasticsearch API documentation}
      */
    post(this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostResponse>;
    post(this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostResponse, unknown>>;
    post(this: That, params?: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptions): Promise<T.LicensePostResponse>;
    /**
      * Start a basic license. Start an indefinite basic license, which gives access to all the basic features. NOTE: In order to start a basic license, you must not currently have a basic license. If the basic license does not support all of the features that are available with your current license, however, you are notified in the response. You must then re-submit the API request with the `acknowledge` parameter set to `true`. To check the status of your basic license, use the get basic license API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/start-basic.html | Elasticsearch API documentation}
      */
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartBasicResponse>;
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartBasicResponse, unknown>>;
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartBasicResponse>;
    /**
      * Start a trial. Start a 30-day trial, which gives access to all subscription features. NOTE: You are allowed to start a trial only if your cluster has not already activated a trial for the current major product version. For example, if you have already activated a trial for v8.0, you cannot start a new trial until v9.0. You can, however, request an extended trial at https://www.elastic.co/trialextension. To check the status of your trial, use the get trial status API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/start-trial.html | Elasticsearch API documentation}
      */
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartTrialResponse>;
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartTrialResponse, unknown>>;
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartTrialResponse>;
}
export {};
