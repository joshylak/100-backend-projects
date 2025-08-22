import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Synonyms {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete a synonym set. You can only delete a synonyms set that is not in use by any index analyzer. Synonyms sets can be used in synonym graph token filters and synonym token filters. These synonym filters can be used as part of search analyzers. Analyzers need to be loaded when an index is restored (such as when a node starts, or the index becomes open). Even if the analyzer is not used on any field mapping, it still needs to be loaded on the index recovery phase. If any analyzers cannot be loaded, the index becomes unavailable and the cluster status becomes red or yellow as index shards are not available. To prevent that, synonyms sets that are used in analyzers can't be deleted. A delete request in this case will return a 400 response code. To remove a synonyms set, you must first remove all indices that contain analyzers using it. You can migrate an index by creating a new index that does not contain the token filter with the synonyms set, and use the reindex API in order to copy over the index data. Once finished, you can delete the index. When the synonyms set is not used in analyzers, you will be able to delete it.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-synonyms-set.html | Elasticsearch API documentation}
      */
    deleteSynonym(this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsDeleteSynonymResponse>;
    deleteSynonym(this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsDeleteSynonymResponse, unknown>>;
    deleteSynonym(this: That, params: T.SynonymsDeleteSynonymRequest | TB.SynonymsDeleteSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsDeleteSynonymResponse>;
    /**
      * Delete a synonym rule. Delete a synonym rule from a synonym set.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-synonym-rule.html | Elasticsearch API documentation}
      */
    deleteSynonymRule(this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsDeleteSynonymRuleResponse>;
    deleteSynonymRule(this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsDeleteSynonymRuleResponse, unknown>>;
    deleteSynonymRule(this: That, params: T.SynonymsDeleteSynonymRuleRequest | TB.SynonymsDeleteSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsDeleteSynonymRuleResponse>;
    /**
      * Get a synonym set.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-synonyms-set.html | Elasticsearch API documentation}
      */
    getSynonym(this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymResponse>;
    getSynonym(this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymResponse, unknown>>;
    getSynonym(this: That, params: T.SynonymsGetSynonymRequest | TB.SynonymsGetSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymResponse>;
    /**
      * Get a synonym rule. Get a synonym rule from a synonym set.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-synonym-rule.html | Elasticsearch API documentation}
      */
    getSynonymRule(this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymRuleResponse>;
    getSynonymRule(this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymRuleResponse, unknown>>;
    getSynonymRule(this: That, params: T.SynonymsGetSynonymRuleRequest | TB.SynonymsGetSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymRuleResponse>;
    /**
      * Get all synonym sets. Get a summary of all defined synonym sets.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-synonyms-set.html | Elasticsearch API documentation}
      */
    getSynonymsSets(this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsGetSynonymsSetsResponse>;
    getSynonymsSets(this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsGetSynonymsSetsResponse, unknown>>;
    getSynonymsSets(this: That, params?: T.SynonymsGetSynonymsSetsRequest | TB.SynonymsGetSynonymsSetsRequest, options?: TransportRequestOptions): Promise<T.SynonymsGetSynonymsSetsResponse>;
    /**
      * Create or update a synonym set. Synonyms sets are limited to a maximum of 10,000 synonym rules per set. If you need to manage more synonym rules, you can create multiple synonym sets. When an existing synonyms set is updated, the search analyzers that use the synonyms set are reloaded automatically for all indices. This is equivalent to invoking the reload search analyzers API for all indices that use the synonyms set.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-synonyms-set.html | Elasticsearch API documentation}
      */
    putSynonym(this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsPutSynonymResponse>;
    putSynonym(this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsPutSynonymResponse, unknown>>;
    putSynonym(this: That, params: T.SynonymsPutSynonymRequest | TB.SynonymsPutSynonymRequest, options?: TransportRequestOptions): Promise<T.SynonymsPutSynonymResponse>;
    /**
      * Create or update a synonym rule. Create or update a synonym rule in a synonym set. If any of the synonym rules included is invalid, the API returns an error. When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-synonym-rule.html | Elasticsearch API documentation}
      */
    putSynonymRule(this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SynonymsPutSynonymRuleResponse>;
    putSynonymRule(this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SynonymsPutSynonymRuleResponse, unknown>>;
    putSynonymRule(this: That, params: T.SynonymsPutSynonymRuleRequest | TB.SynonymsPutSynonymRuleRequest, options?: TransportRequestOptions): Promise<T.SynonymsPutSynonymRuleResponse>;
}
export {};
