import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get a document's source. Get the source of a document. For example: ``` GET my-index-000001/_source/1 ``` You can use the source filtering parameters to control which parts of the `_source` are returned: ``` GET my-index-000001/_source/1/?_source_includes=*.id&_source_excludes=entities ```
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/docs-get.html | Elasticsearch API documentation}
  */
export default function GetSourceApi<TDocument = unknown>(this: That, params: T.GetSourceRequest | TB.GetSourceRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetSourceResponse<TDocument>>;
export default function GetSourceApi<TDocument = unknown>(this: That, params: T.GetSourceRequest | TB.GetSourceRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetSourceResponse<TDocument>, unknown>>;
export default function GetSourceApi<TDocument = unknown>(this: That, params: T.GetSourceRequest | TB.GetSourceRequest, options?: TransportRequestOptions): Promise<T.GetSourceResponse<TDocument>>;
export {};
