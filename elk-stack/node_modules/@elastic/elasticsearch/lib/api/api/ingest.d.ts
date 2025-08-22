import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Ingest {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete GeoIP database configurations. Delete one or more IP geolocation database configurations.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-ingest-delete-geoip-database | Elasticsearch API documentation}
      */
    deleteGeoipDatabase(this: That, params: T.IngestDeleteGeoipDatabaseRequest | TB.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeleteGeoipDatabaseResponse>;
    deleteGeoipDatabase(this: That, params: T.IngestDeleteGeoipDatabaseRequest | TB.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeleteGeoipDatabaseResponse, unknown>>;
    deleteGeoipDatabase(this: That, params: T.IngestDeleteGeoipDatabaseRequest | TB.IngestDeleteGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestDeleteGeoipDatabaseResponse>;
    /**
      * Delete IP geolocation database configurations.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-ip-location-database-api.html | Elasticsearch API documentation}
      */
    deleteIpLocationDatabase(this: That, params: T.IngestDeleteIpLocationDatabaseRequest | TB.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeleteIpLocationDatabaseResponse>;
    deleteIpLocationDatabase(this: That, params: T.IngestDeleteIpLocationDatabaseRequest | TB.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeleteIpLocationDatabaseResponse, unknown>>;
    deleteIpLocationDatabase(this: That, params: T.IngestDeleteIpLocationDatabaseRequest | TB.IngestDeleteIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestDeleteIpLocationDatabaseResponse>;
    /**
      * Delete pipelines. Delete one or more ingest pipelines.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-pipeline-api.html | Elasticsearch API documentation}
      */
    deletePipeline(this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestDeletePipelineResponse>;
    deletePipeline(this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestDeletePipelineResponse, unknown>>;
    deletePipeline(this: That, params: T.IngestDeletePipelineRequest | TB.IngestDeletePipelineRequest, options?: TransportRequestOptions): Promise<T.IngestDeletePipelineResponse>;
    /**
      * Get GeoIP statistics. Get download statistics for GeoIP2 databases that are used with the GeoIP processor.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/geoip-processor.html | Elasticsearch API documentation}
      */
    geoIpStats(this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGeoIpStatsResponse>;
    geoIpStats(this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGeoIpStatsResponse, unknown>>;
    geoIpStats(this: That, params?: T.IngestGeoIpStatsRequest | TB.IngestGeoIpStatsRequest, options?: TransportRequestOptions): Promise<T.IngestGeoIpStatsResponse>;
    /**
      * Get GeoIP database configurations. Get information about one or more IP geolocation database configurations.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-ingest-get-geoip-database | Elasticsearch API documentation}
      */
    getGeoipDatabase(this: That, params?: T.IngestGetGeoipDatabaseRequest | TB.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetGeoipDatabaseResponse>;
    getGeoipDatabase(this: That, params?: T.IngestGetGeoipDatabaseRequest | TB.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetGeoipDatabaseResponse, unknown>>;
    getGeoipDatabase(this: That, params?: T.IngestGetGeoipDatabaseRequest | TB.IngestGetGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestGetGeoipDatabaseResponse>;
    /**
      * Get IP geolocation database configurations.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-ip-location-database-api.html | Elasticsearch API documentation}
      */
    getIpLocationDatabase(this: That, params?: T.IngestGetIpLocationDatabaseRequest | TB.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetIpLocationDatabaseResponse>;
    getIpLocationDatabase(this: That, params?: T.IngestGetIpLocationDatabaseRequest | TB.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetIpLocationDatabaseResponse, unknown>>;
    getIpLocationDatabase(this: That, params?: T.IngestGetIpLocationDatabaseRequest | TB.IngestGetIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestGetIpLocationDatabaseResponse>;
    /**
      * Get pipelines. Get information about one or more ingest pipelines. This API returns a local reference of the pipeline.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-pipeline-api.html | Elasticsearch API documentation}
      */
    getPipeline(this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestGetPipelineResponse>;
    getPipeline(this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestGetPipelineResponse, unknown>>;
    getPipeline(this: That, params?: T.IngestGetPipelineRequest | TB.IngestGetPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestGetPipelineResponse>;
    /**
      * Run a grok processor. Extract structured fields out of a single text field within a document. You must choose which field to extract matched fields from, as well as the grok pattern you expect will match. A grok pattern is like a regular expression that supports aliased expressions that can be reused.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/grok-processor.html | Elasticsearch API documentation}
      */
    processorGrok(this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestProcessorGrokResponse>;
    processorGrok(this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestProcessorGrokResponse, unknown>>;
    processorGrok(this: That, params?: T.IngestProcessorGrokRequest | TB.IngestProcessorGrokRequest, options?: TransportRequestOptions): Promise<T.IngestProcessorGrokResponse>;
    /**
      * Create or update a GeoIP database configuration. Refer to the create or update IP geolocation database configuration API.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/operation/operation-ingest-put-geoip-database | Elasticsearch API documentation}
      */
    putGeoipDatabase(this: That, params: T.IngestPutGeoipDatabaseRequest | TB.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutGeoipDatabaseResponse>;
    putGeoipDatabase(this: That, params: T.IngestPutGeoipDatabaseRequest | TB.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutGeoipDatabaseResponse, unknown>>;
    putGeoipDatabase(this: That, params: T.IngestPutGeoipDatabaseRequest | TB.IngestPutGeoipDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestPutGeoipDatabaseResponse>;
    /**
      * Create or update an IP geolocation database configuration.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-ip-location-database-api.html | Elasticsearch API documentation}
      */
    putIpLocationDatabase(this: That, params: T.IngestPutIpLocationDatabaseRequest | TB.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutIpLocationDatabaseResponse>;
    putIpLocationDatabase(this: That, params: T.IngestPutIpLocationDatabaseRequest | TB.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutIpLocationDatabaseResponse, unknown>>;
    putIpLocationDatabase(this: That, params: T.IngestPutIpLocationDatabaseRequest | TB.IngestPutIpLocationDatabaseRequest, options?: TransportRequestOptions): Promise<T.IngestPutIpLocationDatabaseResponse>;
    /**
      * Create or update a pipeline. Changes made using this API take effect immediately.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/ingest.html | Elasticsearch API documentation}
      */
    putPipeline(this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestPutPipelineResponse>;
    putPipeline(this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestPutPipelineResponse, unknown>>;
    putPipeline(this: That, params: T.IngestPutPipelineRequest | TB.IngestPutPipelineRequest, options?: TransportRequestOptions): Promise<T.IngestPutPipelineResponse>;
    /**
      * Simulate a pipeline. Run an ingest pipeline against a set of provided documents. You can either specify an existing pipeline to use with the provided documents or supply a pipeline definition in the body of the request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/simulate-pipeline-api.html | Elasticsearch API documentation}
      */
    simulate(this: That, params: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.IngestSimulateResponse>;
    simulate(this: That, params: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.IngestSimulateResponse, unknown>>;
    simulate(this: That, params: T.IngestSimulateRequest | TB.IngestSimulateRequest, options?: TransportRequestOptions): Promise<T.IngestSimulateResponse>;
}
export {};
