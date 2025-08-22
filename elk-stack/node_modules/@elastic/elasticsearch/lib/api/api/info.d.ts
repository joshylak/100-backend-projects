import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get cluster info. Get basic build, version, and cluster information. ::: In Serverless, this API is retained for backward compatibility only. Some response fields, such as the version number, should be ignored.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/rest-api-root.html | Elasticsearch API documentation}
  */
export default function InfoApi(this: That, params?: T.InfoRequest | TB.InfoRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.InfoResponse>;
export default function InfoApi(this: That, params?: T.InfoRequest | TB.InfoRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.InfoResponse, unknown>>;
export default function InfoApi(this: That, params?: T.InfoRequest | TB.InfoRequest, options?: TransportRequestOptions): Promise<T.InfoResponse>;
export {};
