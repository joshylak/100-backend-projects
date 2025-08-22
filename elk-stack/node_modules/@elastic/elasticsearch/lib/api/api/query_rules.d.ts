import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class QueryRules {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Delete a query rule. Delete a query rule within a query ruleset. This is a destructive action that is only recoverable by re-adding the same rule with the create or update query rule API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-query-rule.html | Elasticsearch API documentation}
      */
    deleteRule(this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRuleResponse>;
    deleteRule(this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRuleResponse, unknown>>;
    deleteRule(this: That, params: T.QueryRulesDeleteRuleRequest | TB.QueryRulesDeleteRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRuleResponse>;
    /**
      * Delete a query ruleset. Remove a query ruleset and its associated data. This is a destructive action that is not recoverable.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/delete-query-ruleset.html | Elasticsearch API documentation}
      */
    deleteRuleset(this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesDeleteRulesetResponse>;
    deleteRuleset(this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesDeleteRulesetResponse, unknown>>;
    deleteRuleset(this: That, params: T.QueryRulesDeleteRulesetRequest | TB.QueryRulesDeleteRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesDeleteRulesetResponse>;
    /**
      * Get a query rule. Get details about a query rule within a query ruleset.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-query-rule.html | Elasticsearch API documentation}
      */
    getRule(this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRuleResponse>;
    getRule(this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRuleResponse, unknown>>;
    getRule(this: That, params: T.QueryRulesGetRuleRequest | TB.QueryRulesGetRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRuleResponse>;
    /**
      * Get a query ruleset. Get details about a query ruleset.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/get-query-ruleset.html | Elasticsearch API documentation}
      */
    getRuleset(this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesGetRulesetResponse>;
    getRuleset(this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesGetRulesetResponse, unknown>>;
    getRuleset(this: That, params: T.QueryRulesGetRulesetRequest | TB.QueryRulesGetRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesGetRulesetResponse>;
    /**
      * Get all query rulesets. Get summarized information about the query rulesets.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/list-query-rulesets.html | Elasticsearch API documentation}
      */
    listRulesets(this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesListRulesetsResponse>;
    listRulesets(this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesListRulesetsResponse, unknown>>;
    listRulesets(this: That, params?: T.QueryRulesListRulesetsRequest | TB.QueryRulesListRulesetsRequest, options?: TransportRequestOptions): Promise<T.QueryRulesListRulesetsResponse>;
    /**
      * Create or update a query rule. Create or update a query rule within a query ruleset. IMPORTANT: Due to limitations within pinned queries, you can only pin documents using ids or docs, but cannot use both in single rule. It is advised to use one or the other in query rulesets, to avoid errors. Additionally, pinned queries have a maximum limit of 100 pinned hits. If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-query-rule.html | Elasticsearch API documentation}
      */
    putRule(this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRuleResponse>;
    putRule(this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRuleResponse, unknown>>;
    putRule(this: That, params: T.QueryRulesPutRuleRequest | TB.QueryRulesPutRuleRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRuleResponse>;
    /**
      * Create or update a query ruleset. There is a limit of 100 rules per ruleset. This limit can be increased by using the `xpack.applications.rules.max_rules_per_ruleset` cluster setting. IMPORTANT: Due to limitations within pinned queries, you can only select documents using `ids` or `docs`, but cannot use both in single rule. It is advised to use one or the other in query rulesets, to avoid errors. Additionally, pinned queries have a maximum limit of 100 pinned hits. If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/put-query-ruleset.html | Elasticsearch API documentation}
      */
    putRuleset(this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesPutRulesetResponse>;
    putRuleset(this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesPutRulesetResponse, unknown>>;
    putRuleset(this: That, params: T.QueryRulesPutRulesetRequest | TB.QueryRulesPutRulesetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesPutRulesetResponse>;
    /**
      * Test a query ruleset. Evaluate match criteria against a query ruleset to identify the rules that would match that criteria.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/test-query-ruleset.html | Elasticsearch API documentation}
      */
    test(this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesTestResponse>;
    test(this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesTestResponse, unknown>>;
    test(this: That, params: T.QueryRulesTestRequest | TB.QueryRulesTestRequest, options?: TransportRequestOptions): Promise<T.QueryRulesTestResponse>;
}
export {};
