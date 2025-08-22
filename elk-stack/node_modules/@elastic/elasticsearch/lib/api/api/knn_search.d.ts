import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Run a knn search. NOTE: The kNN search API has been replaced by the `knn` option in the search API. Perform a k-nearest neighbor (kNN) search on a dense_vector field and return the matching documents. Given a query vector, the API finds the k closest vectors and returns those documents as search hits. Elasticsearch uses the HNSW algorithm to support efficient kNN search. Like most kNN algorithms, HNSW is an approximate method that sacrifices result accuracy for improved search speed. This means the results returned are not always the true k closest neighbors. The kNN search API supports restricting the search using a filter. The search will return the top k documents that also match the filter query. A kNN search response has the exact same structure as a search API response. However, certain sections have a meaning specific to kNN search: * The document `_score` is determined by the similarity between the query and document vector. * The `hits.total` object contains the total number of nearest neighbor candidates considered, which is `num_candidates * num_shards`. The `hits.total.relation` will always be `eq`, indicating an exact value.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/knn-search-api.html | Elasticsearch API documentation}
  */
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.KnnSearchResponse<TDocument>>;
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.KnnSearchResponse<TDocument>, unknown>>;
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptions): Promise<T.KnnSearchResponse<TDocument>>;
export {};
