import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Connector {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Check in a connector. Update the `last_seen` field in the connector and set it to the current timestamp.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/check-in-connector-api.html | Elasticsearch API documentation}
      */
    checkIn(this: That, params: T.ConnectorCheckInRequest | TB.ConnectorCheckInRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorCheckInResponse>;
    checkIn(this: That, params: T.ConnectorCheckInRequest | TB.ConnectorCheckInRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorCheckInResponse, unknown>>;
    checkIn(this: That, params: T.ConnectorCheckInRequest | TB.ConnectorCheckInRequest, options?: TransportRequestOptions): Promise<T.ConnectorCheckInResponse>;
    /**
      * Delete a connector. Removes a connector and associated sync jobs. This is a destructive action that is not recoverable. NOTE: This action doesn’t delete any API keys, ingest pipelines, or data indices associated with the connector. These need to be removed manually.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-connector-api.html | Elasticsearch API documentation}
      */
    delete(this: That, params: T.ConnectorDeleteRequest | TB.ConnectorDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorDeleteResponse>;
    delete(this: That, params: T.ConnectorDeleteRequest | TB.ConnectorDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorDeleteResponse, unknown>>;
    delete(this: That, params: T.ConnectorDeleteRequest | TB.ConnectorDeleteRequest, options?: TransportRequestOptions): Promise<T.ConnectorDeleteResponse>;
    /**
      * Get a connector. Get the details about a connector.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-connector-api.html | Elasticsearch API documentation}
      */
    get(this: That, params: T.ConnectorGetRequest | TB.ConnectorGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorGetResponse>;
    get(this: That, params: T.ConnectorGetRequest | TB.ConnectorGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorGetResponse, unknown>>;
    get(this: That, params: T.ConnectorGetRequest | TB.ConnectorGetRequest, options?: TransportRequestOptions): Promise<T.ConnectorGetResponse>;
    /**
      * Update the connector last sync stats. Update the fields related to the last sync of a connector. This action is used for analytics and monitoring.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-last-sync-api.html | Elasticsearch API documentation}
      */
    lastSync(this: That, params: T.ConnectorLastSyncRequest | TB.ConnectorLastSyncRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorLastSyncResponse>;
    lastSync(this: That, params: T.ConnectorLastSyncRequest | TB.ConnectorLastSyncRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorLastSyncResponse, unknown>>;
    lastSync(this: That, params: T.ConnectorLastSyncRequest | TB.ConnectorLastSyncRequest, options?: TransportRequestOptions): Promise<T.ConnectorLastSyncResponse>;
    /**
      * Get all connectors. Get information about all connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/list-connector-api.html | Elasticsearch API documentation}
      */
    list(this: That, params?: T.ConnectorListRequest | TB.ConnectorListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorListResponse>;
    list(this: That, params?: T.ConnectorListRequest | TB.ConnectorListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorListResponse, unknown>>;
    list(this: That, params?: T.ConnectorListRequest | TB.ConnectorListRequest, options?: TransportRequestOptions): Promise<T.ConnectorListResponse>;
    /**
      * Create a connector. Connectors are Elasticsearch integrations that bring content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure. Elastic managed connectors (Native connectors) are a managed service on Elastic Cloud. Self-managed connectors (Connector clients) are self-managed on your infrastructure.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/create-connector-api.html | Elasticsearch API documentation}
      */
    post(this: That, params?: T.ConnectorPostRequest | TB.ConnectorPostRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorPostResponse>;
    post(this: That, params?: T.ConnectorPostRequest | TB.ConnectorPostRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorPostResponse, unknown>>;
    post(this: That, params?: T.ConnectorPostRequest | TB.ConnectorPostRequest, options?: TransportRequestOptions): Promise<T.ConnectorPostResponse>;
    /**
      * Create or update a connector.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/create-connector-api.html | Elasticsearch API documentation}
      */
    put(this: That, params?: T.ConnectorPutRequest | TB.ConnectorPutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorPutResponse>;
    put(this: That, params?: T.ConnectorPutRequest | TB.ConnectorPutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorPutResponse, unknown>>;
    put(this: That, params?: T.ConnectorPutRequest | TB.ConnectorPutRequest, options?: TransportRequestOptions): Promise<T.ConnectorPutResponse>;
    /**
      * Deletes a connector secret.
      */
    secretDelete(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    secretDelete(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    secretDelete(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Retrieves a secret stored by Connectors.
      */
    secretGet(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    secretGet(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    secretGet(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Creates a secret for a Connector.
      */
    secretPost(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    secretPost(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    secretPost(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Creates or updates a secret for a Connector.
      */
    secretPut(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    secretPut(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    secretPut(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    /**
      * Cancel a connector sync job. Cancel a connector sync job, which sets the status to cancelling and updates `cancellation_requested_at` to the current time. The connector service is then responsible for setting the status of connector sync jobs to cancelled.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/cancel-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobCancel(this: That, params: T.ConnectorSyncJobCancelRequest | TB.ConnectorSyncJobCancelRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobCancelResponse>;
    syncJobCancel(this: That, params: T.ConnectorSyncJobCancelRequest | TB.ConnectorSyncJobCancelRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobCancelResponse, unknown>>;
    syncJobCancel(this: That, params: T.ConnectorSyncJobCancelRequest | TB.ConnectorSyncJobCancelRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobCancelResponse>;
    /**
      * Check in a connector sync job. Check in a connector sync job and set the `last_seen` field to the current time before updating it in the internal index. To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure. This service runs automatically on Elastic Cloud for Elastic managed connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/check-in-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobCheckIn(this: That, params: T.ConnectorSyncJobCheckInRequest | TB.ConnectorSyncJobCheckInRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobCheckInResponse>;
    syncJobCheckIn(this: That, params: T.ConnectorSyncJobCheckInRequest | TB.ConnectorSyncJobCheckInRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobCheckInResponse, unknown>>;
    syncJobCheckIn(this: That, params: T.ConnectorSyncJobCheckInRequest | TB.ConnectorSyncJobCheckInRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobCheckInResponse>;
    /**
      * Claim a connector sync job. This action updates the job status to `in_progress` and sets the `last_seen` and `started_at` timestamps to the current time. Additionally, it can set the `sync_cursor` property for the sync job. This API is not intended for direct connector management by users. It supports the implementation of services that utilize the connector protocol to communicate with Elasticsearch. To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure. This service runs automatically on Elastic Cloud for Elastic managed connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/claim-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobClaim(this: That, params: T.ConnectorSyncJobClaimRequest | TB.ConnectorSyncJobClaimRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobClaimResponse>;
    syncJobClaim(this: That, params: T.ConnectorSyncJobClaimRequest | TB.ConnectorSyncJobClaimRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobClaimResponse, unknown>>;
    syncJobClaim(this: That, params: T.ConnectorSyncJobClaimRequest | TB.ConnectorSyncJobClaimRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobClaimResponse>;
    /**
      * Delete a connector sync job. Remove a connector sync job and its associated data. This is a destructive action that is not recoverable.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobDelete(this: That, params: T.ConnectorSyncJobDeleteRequest | TB.ConnectorSyncJobDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobDeleteResponse>;
    syncJobDelete(this: That, params: T.ConnectorSyncJobDeleteRequest | TB.ConnectorSyncJobDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobDeleteResponse, unknown>>;
    syncJobDelete(this: That, params: T.ConnectorSyncJobDeleteRequest | TB.ConnectorSyncJobDeleteRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobDeleteResponse>;
    /**
      * Set a connector sync job error. Set the `error` field for a connector sync job and set its `status` to `error`. To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure. This service runs automatically on Elastic Cloud for Elastic managed connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/set-connector-sync-job-error-api.html | Elasticsearch API documentation}
      */
    syncJobError(this: That, params: T.ConnectorSyncJobErrorRequest | TB.ConnectorSyncJobErrorRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobErrorResponse>;
    syncJobError(this: That, params: T.ConnectorSyncJobErrorRequest | TB.ConnectorSyncJobErrorRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobErrorResponse, unknown>>;
    syncJobError(this: That, params: T.ConnectorSyncJobErrorRequest | TB.ConnectorSyncJobErrorRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobErrorResponse>;
    /**
      * Get a connector sync job.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobGet(this: That, params: T.ConnectorSyncJobGetRequest | TB.ConnectorSyncJobGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobGetResponse>;
    syncJobGet(this: That, params: T.ConnectorSyncJobGetRequest | TB.ConnectorSyncJobGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobGetResponse, unknown>>;
    syncJobGet(this: That, params: T.ConnectorSyncJobGetRequest | TB.ConnectorSyncJobGetRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobGetResponse>;
    /**
      * Get all connector sync jobs. Get information about all stored connector sync jobs listed by their creation date in ascending order.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/list-connector-sync-jobs-api.html | Elasticsearch API documentation}
      */
    syncJobList(this: That, params?: T.ConnectorSyncJobListRequest | TB.ConnectorSyncJobListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobListResponse>;
    syncJobList(this: That, params?: T.ConnectorSyncJobListRequest | TB.ConnectorSyncJobListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobListResponse, unknown>>;
    syncJobList(this: That, params?: T.ConnectorSyncJobListRequest | TB.ConnectorSyncJobListRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobListResponse>;
    /**
      * Create a connector sync job. Create a connector sync job document in the internal index and initialize its counters and timestamps with default values.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/create-connector-sync-job-api.html | Elasticsearch API documentation}
      */
    syncJobPost(this: That, params: T.ConnectorSyncJobPostRequest | TB.ConnectorSyncJobPostRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobPostResponse>;
    syncJobPost(this: That, params: T.ConnectorSyncJobPostRequest | TB.ConnectorSyncJobPostRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobPostResponse, unknown>>;
    syncJobPost(this: That, params: T.ConnectorSyncJobPostRequest | TB.ConnectorSyncJobPostRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobPostResponse>;
    /**
      * Set the connector sync job stats. Stats include: `deleted_document_count`, `indexed_document_count`, `indexed_document_volume`, and `total_document_count`. You can also update `last_seen`. This API is mainly used by the connector service for updating sync job information. To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure. This service runs automatically on Elastic Cloud for Elastic managed connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/set-connector-sync-job-stats-api.html | Elasticsearch API documentation}
      */
    syncJobUpdateStats(this: That, params: T.ConnectorSyncJobUpdateStatsRequest | TB.ConnectorSyncJobUpdateStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorSyncJobUpdateStatsResponse>;
    syncJobUpdateStats(this: That, params: T.ConnectorSyncJobUpdateStatsRequest | TB.ConnectorSyncJobUpdateStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorSyncJobUpdateStatsResponse, unknown>>;
    syncJobUpdateStats(this: That, params: T.ConnectorSyncJobUpdateStatsRequest | TB.ConnectorSyncJobUpdateStatsRequest, options?: TransportRequestOptions): Promise<T.ConnectorSyncJobUpdateStatsResponse>;
    /**
      * Activate the connector draft filter. Activates the valid draft filtering for a connector.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-filtering-api.html | Elasticsearch API documentation}
      */
    updateActiveFiltering(this: That, params: T.ConnectorUpdateActiveFilteringRequest | TB.ConnectorUpdateActiveFilteringRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateActiveFilteringResponse>;
    updateActiveFiltering(this: That, params: T.ConnectorUpdateActiveFilteringRequest | TB.ConnectorUpdateActiveFilteringRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateActiveFilteringResponse, unknown>>;
    updateActiveFiltering(this: That, params: T.ConnectorUpdateActiveFilteringRequest | TB.ConnectorUpdateActiveFilteringRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateActiveFilteringResponse>;
    /**
      * Update the connector API key ID. Update the `api_key_id` and `api_key_secret_id` fields of a connector. You can specify the ID of the API key used for authorization and the ID of the connector secret where the API key is stored. The connector secret ID is required only for Elastic managed (native) connectors. Self-managed connectors (connector clients) do not use this field.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-api-key-id-api.html | Elasticsearch API documentation}
      */
    updateApiKeyId(this: That, params: T.ConnectorUpdateApiKeyIdRequest | TB.ConnectorUpdateApiKeyIdRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateApiKeyIdResponse>;
    updateApiKeyId(this: That, params: T.ConnectorUpdateApiKeyIdRequest | TB.ConnectorUpdateApiKeyIdRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateApiKeyIdResponse, unknown>>;
    updateApiKeyId(this: That, params: T.ConnectorUpdateApiKeyIdRequest | TB.ConnectorUpdateApiKeyIdRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateApiKeyIdResponse>;
    /**
      * Update the connector configuration. Update the configuration field in the connector document.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-configuration-api.html | Elasticsearch API documentation}
      */
    updateConfiguration(this: That, params: T.ConnectorUpdateConfigurationRequest | TB.ConnectorUpdateConfigurationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateConfigurationResponse>;
    updateConfiguration(this: That, params: T.ConnectorUpdateConfigurationRequest | TB.ConnectorUpdateConfigurationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateConfigurationResponse, unknown>>;
    updateConfiguration(this: That, params: T.ConnectorUpdateConfigurationRequest | TB.ConnectorUpdateConfigurationRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateConfigurationResponse>;
    /**
      * Update the connector error field. Set the error field for the connector. If the error provided in the request body is non-null, the connector’s status is updated to error. Otherwise, if the error is reset to null, the connector status is updated to connected.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-error-api.html | Elasticsearch API documentation}
      */
    updateError(this: That, params: T.ConnectorUpdateErrorRequest | TB.ConnectorUpdateErrorRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateErrorResponse>;
    updateError(this: That, params: T.ConnectorUpdateErrorRequest | TB.ConnectorUpdateErrorRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateErrorResponse, unknown>>;
    updateError(this: That, params: T.ConnectorUpdateErrorRequest | TB.ConnectorUpdateErrorRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateErrorResponse>;
    /**
      * Update the connector features. Update the connector features in the connector document. This API can be used to control the following aspects of a connector: * document-level security * incremental syncs * advanced sync rules * basic sync rules Normally, the running connector service automatically manages these features. However, you can use this API to override the default behavior. To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure. This service runs automatically on Elastic Cloud for Elastic managed connectors.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-features-api.html | Elasticsearch API documentation}
      */
    updateFeatures(this: That, params: T.ConnectorUpdateFeaturesRequest | TB.ConnectorUpdateFeaturesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateFeaturesResponse>;
    updateFeatures(this: That, params: T.ConnectorUpdateFeaturesRequest | TB.ConnectorUpdateFeaturesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateFeaturesResponse, unknown>>;
    updateFeatures(this: That, params: T.ConnectorUpdateFeaturesRequest | TB.ConnectorUpdateFeaturesRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateFeaturesResponse>;
    /**
      * Update the connector filtering. Update the draft filtering configuration of a connector and marks the draft validation state as edited. The filtering draft is activated once validated by the running Elastic connector service. The filtering property is used to configure sync rules (both basic and advanced) for a connector.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-filtering-api.html | Elasticsearch API documentation}
      */
    updateFiltering(this: That, params: T.ConnectorUpdateFilteringRequest | TB.ConnectorUpdateFilteringRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateFilteringResponse>;
    updateFiltering(this: That, params: T.ConnectorUpdateFilteringRequest | TB.ConnectorUpdateFilteringRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateFilteringResponse, unknown>>;
    updateFiltering(this: That, params: T.ConnectorUpdateFilteringRequest | TB.ConnectorUpdateFilteringRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateFilteringResponse>;
    /**
      * Update the connector draft filtering validation. Update the draft filtering validation info for a connector.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-filtering-validation-api.html | Elasticsearch API documentation}
      */
    updateFilteringValidation(this: That, params: T.ConnectorUpdateFilteringValidationRequest | TB.ConnectorUpdateFilteringValidationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateFilteringValidationResponse>;
    updateFilteringValidation(this: That, params: T.ConnectorUpdateFilteringValidationRequest | TB.ConnectorUpdateFilteringValidationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateFilteringValidationResponse, unknown>>;
    updateFilteringValidation(this: That, params: T.ConnectorUpdateFilteringValidationRequest | TB.ConnectorUpdateFilteringValidationRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateFilteringValidationResponse>;
    /**
      * Update the connector index name. Update the `index_name` field of a connector, specifying the index where the data ingested by the connector is stored.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-index-name-api.html | Elasticsearch API documentation}
      */
    updateIndexName(this: That, params: T.ConnectorUpdateIndexNameRequest | TB.ConnectorUpdateIndexNameRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateIndexNameResponse>;
    updateIndexName(this: That, params: T.ConnectorUpdateIndexNameRequest | TB.ConnectorUpdateIndexNameRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateIndexNameResponse, unknown>>;
    updateIndexName(this: That, params: T.ConnectorUpdateIndexNameRequest | TB.ConnectorUpdateIndexNameRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateIndexNameResponse>;
    /**
      * Update the connector name and description.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-name-description-api.html | Elasticsearch API documentation}
      */
    updateName(this: That, params: T.ConnectorUpdateNameRequest | TB.ConnectorUpdateNameRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateNameResponse>;
    updateName(this: That, params: T.ConnectorUpdateNameRequest | TB.ConnectorUpdateNameRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateNameResponse, unknown>>;
    updateName(this: That, params: T.ConnectorUpdateNameRequest | TB.ConnectorUpdateNameRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateNameResponse>;
    /**
      * Update the connector is_native flag.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-native-api.html | Elasticsearch API documentation}
      */
    updateNative(this: That, params: T.ConnectorUpdateNativeRequest | TB.ConnectorUpdateNativeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateNativeResponse>;
    updateNative(this: That, params: T.ConnectorUpdateNativeRequest | TB.ConnectorUpdateNativeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateNativeResponse, unknown>>;
    updateNative(this: That, params: T.ConnectorUpdateNativeRequest | TB.ConnectorUpdateNativeRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateNativeResponse>;
    /**
      * Update the connector pipeline. When you create a new connector, the configuration of an ingest pipeline is populated with default settings.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-pipeline-api.html | Elasticsearch API documentation}
      */
    updatePipeline(this: That, params: T.ConnectorUpdatePipelineRequest | TB.ConnectorUpdatePipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdatePipelineResponse>;
    updatePipeline(this: That, params: T.ConnectorUpdatePipelineRequest | TB.ConnectorUpdatePipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdatePipelineResponse, unknown>>;
    updatePipeline(this: That, params: T.ConnectorUpdatePipelineRequest | TB.ConnectorUpdatePipelineRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdatePipelineResponse>;
    /**
      * Update the connector scheduling.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-scheduling-api.html | Elasticsearch API documentation}
      */
    updateScheduling(this: That, params: T.ConnectorUpdateSchedulingRequest | TB.ConnectorUpdateSchedulingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateSchedulingResponse>;
    updateScheduling(this: That, params: T.ConnectorUpdateSchedulingRequest | TB.ConnectorUpdateSchedulingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateSchedulingResponse, unknown>>;
    updateScheduling(this: That, params: T.ConnectorUpdateSchedulingRequest | TB.ConnectorUpdateSchedulingRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateSchedulingResponse>;
    /**
      * Update the connector service type.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-service-type-api.html | Elasticsearch API documentation}
      */
    updateServiceType(this: That, params: T.ConnectorUpdateServiceTypeRequest | TB.ConnectorUpdateServiceTypeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateServiceTypeResponse>;
    updateServiceType(this: That, params: T.ConnectorUpdateServiceTypeRequest | TB.ConnectorUpdateServiceTypeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateServiceTypeResponse, unknown>>;
    updateServiceType(this: That, params: T.ConnectorUpdateServiceTypeRequest | TB.ConnectorUpdateServiceTypeRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateServiceTypeResponse>;
    /**
      * Update the connector status.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/update-connector-status-api.html | Elasticsearch API documentation}
      */
    updateStatus(this: That, params: T.ConnectorUpdateStatusRequest | TB.ConnectorUpdateStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ConnectorUpdateStatusResponse>;
    updateStatus(this: That, params: T.ConnectorUpdateStatusRequest | TB.ConnectorUpdateStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ConnectorUpdateStatusResponse, unknown>>;
    updateStatus(this: That, params: T.ConnectorUpdateStatusRequest | TB.ConnectorUpdateStatusRequest, options?: TransportRequestOptions): Promise<T.ConnectorUpdateStatusResponse>;
}
export {};
