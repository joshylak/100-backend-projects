import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Close a point in time. A point in time must be opened explicitly before being used in search requests. The `keep_alive` parameter tells Elasticsearch how long it should persist. A point in time is automatically closed when the `keep_alive` period has elapsed. However, keeping points in time has a cost; close them as soon as they are no longer required for search requests.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/point-in-time-api.html | Elasticsearch API documentation}
  */
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest | TB.ClosePointInTimeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClosePointInTimeResponse>;
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest | TB.ClosePointInTimeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClosePointInTimeResponse, unknown>>;
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest | TB.ClosePointInTimeRequest, options?: TransportRequestOptions): Promise<T.ClosePointInTimeResponse>;
export {};
