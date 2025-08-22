import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Check for a document source. Check whether a document source exists in an index. For example: ``` HEAD my-index-000001/_source/1 ``` A document's source is not available if it is disabled in the mapping.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/docs-get.html | Elasticsearch API documentation}
  */
export default function ExistsSourceApi(this: That, params: T.ExistsSourceRequest | TB.ExistsSourceRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ExistsSourceResponse>;
export default function ExistsSourceApi(this: That, params: T.ExistsSourceRequest | TB.ExistsSourceRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ExistsSourceResponse, unknown>>;
export default function ExistsSourceApi(this: That, params: T.ExistsSourceRequest | TB.ExistsSourceRequest, options?: TransportRequestOptions): Promise<T.ExistsSourceResponse>;
export {};
