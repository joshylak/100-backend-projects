import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Xpack {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Get information. The information provided by the API includes: * Build information including the build number and timestamp. * License information about the currently installed license. * Feature information for the features that are currently enabled and available under the current license.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/info-api.html | Elasticsearch API documentation}
      */
    info(this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackInfoResponse>;
    info(this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackInfoResponse, unknown>>;
    info(this: That, params?: T.XpackInfoRequest | TB.XpackInfoRequest, options?: TransportRequestOptions): Promise<T.XpackInfoResponse>;
    /**
      * Get usage information. Get information about the features that are currently enabled and available under the current license. The API also provides some usage statistics.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v8/group/endpoint-xpack | Elasticsearch API documentation}
      */
    usage(this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.XpackUsageResponse>;
    usage(this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.XpackUsageResponse, unknown>>;
    usage(this: That, params?: T.XpackUsageRequest | TB.XpackUsageRequest, options?: TransportRequestOptions): Promise<T.XpackUsageResponse>;
}
export {};
