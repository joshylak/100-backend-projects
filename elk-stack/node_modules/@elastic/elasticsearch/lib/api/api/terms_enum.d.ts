import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get terms in an index. Discover terms that match a partial string in an index. This API is designed for low-latency look-ups used in auto-complete scenarios. > info > The terms enum API may return terms from deleted documents. Deleted documents are initially only marked as deleted. It is not until their segments are merged that documents are actually deleted. Until that happens, the terms enum API will return terms from these documents.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-terms-enum.html | Elasticsearch API documentation}
  */
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TermsEnumResponse>;
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TermsEnumResponse, unknown>>;
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest | TB.TermsEnumRequest, options?: TransportRequestOptions): Promise<T.TermsEnumResponse>;
export {};
