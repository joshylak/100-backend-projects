import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Run multiple templated searches. Run multiple templated searches with a single request. If you are providing a text file or text input to `curl`, use the `--data-binary` flag instead of `-d` to preserve newlines. For example: ``` $ cat requests { "index": "my-index" } { "id": "my-search-template", "params": { "query_string": "hello world", "from": 0, "size": 10 }} { "index": "my-other-index" } { "id": "my-other-search-template", "params": { "query_type": "match_all" }} $ curl -H "Content-Type: application/x-ndjson" -XGET localhost:9200/_msearch/template --data-binary "@requests"; echo ```
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/multi-search-template.html | Elasticsearch API documentation}
  */
export default function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MsearchTemplateResponse<TDocument, TAggregations>>;
export default function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MsearchTemplateResponse<TDocument, TAggregations>, unknown>>;
export default function MsearchTemplateApi<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.MsearchTemplateRequest | TB.MsearchTemplateRequest, options?: TransportRequestOptions): Promise<T.MsearchTemplateResponse<TDocument, TAggregations>>;
export {};
