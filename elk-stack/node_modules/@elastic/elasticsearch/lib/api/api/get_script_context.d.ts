import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get script contexts. Get a list of supported script contexts and their methods.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-script-contexts-api.html | Elasticsearch API documentation}
  */
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetScriptContextResponse>;
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetScriptContextResponse, unknown>>;
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest | TB.GetScriptContextRequest, options?: TransportRequestOptions): Promise<T.GetScriptContextResponse>;
export {};
