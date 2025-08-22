import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Throttle a delete by query operation. Change the number of requests per second for a particular delete by query operation. Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/docs-delete-by-query.html#docs-delete-by-query-rethrottle | Elasticsearch API documentation}
  */
export default function DeleteByQueryRethrottleApi(this: That, params: T.DeleteByQueryRethrottleRequest | TB.DeleteByQueryRethrottleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DeleteByQueryRethrottleResponse>;
export default function DeleteByQueryRethrottleApi(this: That, params: T.DeleteByQueryRethrottleRequest | TB.DeleteByQueryRethrottleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DeleteByQueryRethrottleResponse, unknown>>;
export default function DeleteByQueryRethrottleApi(this: That, params: T.DeleteByQueryRethrottleRequest | TB.DeleteByQueryRethrottleRequest, options?: TransportRequestOptions): Promise<T.DeleteByQueryRethrottleResponse>;
export {};
