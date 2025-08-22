import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Migration {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Get deprecation information. Get information about different cluster, node, and index level settings that use deprecated features that will be removed or changed in the next major version. TIP: This APIs is designed for indirect use by the Upgrade Assistant. You are strongly recommended to use the Upgrade Assistant.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/migration-api-deprecation.html | Elasticsearch API documentation}
      */
    deprecations(this: That, params?: T.MigrationDeprecationsRequest | TB.MigrationDeprecationsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MigrationDeprecationsResponse>;
    deprecations(this: That, params?: T.MigrationDeprecationsRequest | TB.MigrationDeprecationsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MigrationDeprecationsResponse, unknown>>;
    deprecations(this: That, params?: T.MigrationDeprecationsRequest | TB.MigrationDeprecationsRequest, options?: TransportRequestOptions): Promise<T.MigrationDeprecationsResponse>;
    /**
      * Get feature migration information. Version upgrades sometimes require changes to how features store configuration information and data in system indices. Check which features need to be migrated and the status of any migrations that are in progress. TIP: This API is designed for indirect use by the Upgrade Assistant. You are strongly recommended to use the Upgrade Assistant.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/feature-migration-api.html | Elasticsearch API documentation}
      */
    getFeatureUpgradeStatus(this: That, params?: T.MigrationGetFeatureUpgradeStatusRequest | TB.MigrationGetFeatureUpgradeStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MigrationGetFeatureUpgradeStatusResponse>;
    getFeatureUpgradeStatus(this: That, params?: T.MigrationGetFeatureUpgradeStatusRequest | TB.MigrationGetFeatureUpgradeStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MigrationGetFeatureUpgradeStatusResponse, unknown>>;
    getFeatureUpgradeStatus(this: That, params?: T.MigrationGetFeatureUpgradeStatusRequest | TB.MigrationGetFeatureUpgradeStatusRequest, options?: TransportRequestOptions): Promise<T.MigrationGetFeatureUpgradeStatusResponse>;
    /**
      * Start the feature migration. Version upgrades sometimes require changes to how features store configuration information and data in system indices. This API starts the automatic migration process. Some functionality might be temporarily unavailable during the migration process. TIP: The API is designed for indirect use by the Upgrade Assistant. We strongly recommend you use the Upgrade Assistant.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/feature-migration-api.html | Elasticsearch API documentation}
      */
    postFeatureUpgrade(this: That, params?: T.MigrationPostFeatureUpgradeRequest | TB.MigrationPostFeatureUpgradeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MigrationPostFeatureUpgradeResponse>;
    postFeatureUpgrade(this: That, params?: T.MigrationPostFeatureUpgradeRequest | TB.MigrationPostFeatureUpgradeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MigrationPostFeatureUpgradeResponse, unknown>>;
    postFeatureUpgrade(this: That, params?: T.MigrationPostFeatureUpgradeRequest | TB.MigrationPostFeatureUpgradeRequest, options?: TransportRequestOptions): Promise<T.MigrationPostFeatureUpgradeResponse>;
}
export {};
