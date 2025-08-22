import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Throttle an update by query operation. Change the number of requests per second for a particular update by query operation. Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/docs-update-by-query.html#docs-update-by-query-rethrottle | Elasticsearch API documentation}
  */
export default function UpdateByQueryRethrottleApi(this: That, params: T.UpdateByQueryRethrottleRequest | TB.UpdateByQueryRethrottleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.UpdateByQueryRethrottleResponse>;
export default function UpdateByQueryRethrottleApi(this: That, params: T.UpdateByQueryRethrottleRequest | TB.UpdateByQueryRethrottleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.UpdateByQueryRethrottleResponse, unknown>>;
export default function UpdateByQueryRethrottleApi(this: That, params: T.UpdateByQueryRethrottleRequest | TB.UpdateByQueryRethrottleRequest, options?: TransportRequestOptions): Promise<T.UpdateByQueryRethrottleResponse>;
export {};
