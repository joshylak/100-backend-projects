import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get the field capabilities. Get information about the capabilities of fields among multiple indices. For data streams, the API returns field capabilities among the stream’s backing indices. It returns runtime fields like any other field. For example, a runtime field with a type of keyword is returned the same as any other field that belongs to the `keyword` family.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/search-field-caps.html | Elasticsearch API documentation}
  */
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FieldCapsResponse>;
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FieldCapsResponse, unknown>>;
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptions): Promise<T.FieldCapsResponse>;
export {};
