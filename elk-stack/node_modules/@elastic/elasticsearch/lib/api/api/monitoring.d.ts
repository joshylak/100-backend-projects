import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Monitoring {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Send monitoring data. This API is used by the monitoring features to send monitoring data.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8 | Elasticsearch API documentation}
      */
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithOutMeta): Promise<T.MonitoringBulkResponse>;
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MonitoringBulkResponse, unknown>>;
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument> | TB.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<T.MonitoringBulkResponse>;
}
export {};
