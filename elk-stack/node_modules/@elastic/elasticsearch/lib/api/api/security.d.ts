import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Security {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Activate a user profile. Create or update a user profile on behalf of another user. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. The calling application must have either an `access_token` or a combination of `username` and `password` for the user that the profile document is intended for. Elastic reserves the right to change or remove this feature in future releases without prior notice. This API creates or updates a profile document for end users with information that is extracted from the user's authentication object including `username`, `full_name,` `roles`, and the authentication realm. For example, in the JWT `access_token` case, the profile user's `username` is extracted from the JWT token claim pointed to by the `claims.principal` setting of the JWT realm that authenticated the token. When updating a profile document, the API enables the document if it was disabled. Any updates do not change existing content for either the `labels` or `data` fields.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-activate-user-profile.html | Elasticsearch API documentation}
      */
    activateUserProfile(this: That, params: T.SecurityActivateUserProfileRequest | TB.SecurityActivateUserProfileRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityActivateUserProfileResponse>;
    activateUserProfile(this: That, params: T.SecurityActivateUserProfileRequest | TB.SecurityActivateUserProfileRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityActivateUserProfileResponse, unknown>>;
    activateUserProfile(this: That, params: T.SecurityActivateUserProfileRequest | TB.SecurityActivateUserProfileRequest, options?: TransportRequestOptions): Promise<T.SecurityActivateUserProfileResponse>;
    /**
      * Authenticate a user. Authenticates a user and returns information about the authenticated user. Include the user information in a [basic auth header](https://en.wikipedia.org/wiki/Basic_access_authentication). A successful call returns a JSON structure that shows user information such as their username, the roles that are assigned to the user, any assigned metadata, and information about the realms that authenticated and authorized the user. If the user cannot be authenticated, this API returns a 401 status code.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-authenticate.html | Elasticsearch API documentation}
      */
    authenticate(this: That, params?: T.SecurityAuthenticateRequest | TB.SecurityAuthenticateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityAuthenticateResponse>;
    authenticate(this: That, params?: T.SecurityAuthenticateRequest | TB.SecurityAuthenticateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityAuthenticateResponse, unknown>>;
    authenticate(this: That, params?: T.SecurityAuthenticateRequest | TB.SecurityAuthenticateRequest, options?: TransportRequestOptions): Promise<T.SecurityAuthenticateResponse>;
    /**
      * Bulk delete roles. The role management APIs are generally the preferred way to manage roles, rather than using file-based role management. The bulk delete roles API cannot delete roles that are defined in roles files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-bulk-delete-role.html | Elasticsearch API documentation}
      */
    bulkDeleteRole(this: That, params: T.SecurityBulkDeleteRoleRequest | TB.SecurityBulkDeleteRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityBulkDeleteRoleResponse>;
    bulkDeleteRole(this: That, params: T.SecurityBulkDeleteRoleRequest | TB.SecurityBulkDeleteRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityBulkDeleteRoleResponse, unknown>>;
    bulkDeleteRole(this: That, params: T.SecurityBulkDeleteRoleRequest | TB.SecurityBulkDeleteRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityBulkDeleteRoleResponse>;
    /**
      * Bulk create or update roles. The role management APIs are generally the preferred way to manage roles, rather than using file-based role management. The bulk create or update roles API cannot update roles that are defined in roles files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-bulk-put-role.html | Elasticsearch API documentation}
      */
    bulkPutRole(this: That, params: T.SecurityBulkPutRoleRequest | TB.SecurityBulkPutRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityBulkPutRoleResponse>;
    bulkPutRole(this: That, params: T.SecurityBulkPutRoleRequest | TB.SecurityBulkPutRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityBulkPutRoleResponse, unknown>>;
    bulkPutRole(this: That, params: T.SecurityBulkPutRoleRequest | TB.SecurityBulkPutRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityBulkPutRoleResponse>;
    /**
      * Bulk update API keys. Update the attributes for multiple API keys. IMPORTANT: It is not possible to use an API key as the authentication credential for this API. To update API keys, the owner user's credentials are required. This API is similar to the update API key API but enables you to apply the same update to multiple API keys in one API call. This operation can greatly improve performance over making individual updates. It is not possible to update expired or invalidated API keys. This API supports updates to API key access scope, metadata and expiration. The access scope of each API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request. The snapshot of the owner's permissions is updated automatically on every call. IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change an API key's access scope. This change can occur if the owner user's permissions have changed since the API key was created or last modified. A successful request returns a JSON structure that contains the IDs of all updated API keys, the IDs of API keys that already had the requested changes and did not require an update, and error details for any failed update.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-bulk-update-api-keys.html | Elasticsearch API documentation}
      */
    bulkUpdateApiKeys(this: That, params: T.SecurityBulkUpdateApiKeysRequest | TB.SecurityBulkUpdateApiKeysRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityBulkUpdateApiKeysResponse>;
    bulkUpdateApiKeys(this: That, params: T.SecurityBulkUpdateApiKeysRequest | TB.SecurityBulkUpdateApiKeysRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityBulkUpdateApiKeysResponse, unknown>>;
    bulkUpdateApiKeys(this: That, params: T.SecurityBulkUpdateApiKeysRequest | TB.SecurityBulkUpdateApiKeysRequest, options?: TransportRequestOptions): Promise<T.SecurityBulkUpdateApiKeysResponse>;
    /**
      * Change passwords. Change the passwords of users in the native realm and built-in users.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-change-password.html | Elasticsearch API documentation}
      */
    changePassword(this: That, params?: T.SecurityChangePasswordRequest | TB.SecurityChangePasswordRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityChangePasswordResponse>;
    changePassword(this: That, params?: T.SecurityChangePasswordRequest | TB.SecurityChangePasswordRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityChangePasswordResponse, unknown>>;
    changePassword(this: That, params?: T.SecurityChangePasswordRequest | TB.SecurityChangePasswordRequest, options?: TransportRequestOptions): Promise<T.SecurityChangePasswordResponse>;
    /**
      * Clear the API key cache. Evict a subset of all entries from the API key cache. The cache is also automatically cleared on state changes of the security index.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-clear-api-key-cache.html | Elasticsearch API documentation}
      */
    clearApiKeyCache(this: That, params: T.SecurityClearApiKeyCacheRequest | TB.SecurityClearApiKeyCacheRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityClearApiKeyCacheResponse>;
    clearApiKeyCache(this: That, params: T.SecurityClearApiKeyCacheRequest | TB.SecurityClearApiKeyCacheRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityClearApiKeyCacheResponse, unknown>>;
    clearApiKeyCache(this: That, params: T.SecurityClearApiKeyCacheRequest | TB.SecurityClearApiKeyCacheRequest, options?: TransportRequestOptions): Promise<T.SecurityClearApiKeyCacheResponse>;
    /**
      * Clear the privileges cache. Evict privileges from the native application privilege cache. The cache is also automatically cleared for applications that have their privileges updated.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-clear-privilege-cache.html | Elasticsearch API documentation}
      */
    clearCachedPrivileges(this: That, params: T.SecurityClearCachedPrivilegesRequest | TB.SecurityClearCachedPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityClearCachedPrivilegesResponse>;
    clearCachedPrivileges(this: That, params: T.SecurityClearCachedPrivilegesRequest | TB.SecurityClearCachedPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityClearCachedPrivilegesResponse, unknown>>;
    clearCachedPrivileges(this: That, params: T.SecurityClearCachedPrivilegesRequest | TB.SecurityClearCachedPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityClearCachedPrivilegesResponse>;
    /**
      * Clear the user cache. Evict users from the user cache. You can completely clear the cache or evict specific users. User credentials are cached in memory on each node to avoid connecting to a remote authentication service or hitting the disk for every incoming request. There are realm settings that you can use to configure the user cache. For more information, refer to the documentation about controlling the user cache.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-clear-cache.html | Elasticsearch API documentation}
      */
    clearCachedRealms(this: That, params: T.SecurityClearCachedRealmsRequest | TB.SecurityClearCachedRealmsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityClearCachedRealmsResponse>;
    clearCachedRealms(this: That, params: T.SecurityClearCachedRealmsRequest | TB.SecurityClearCachedRealmsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityClearCachedRealmsResponse, unknown>>;
    clearCachedRealms(this: That, params: T.SecurityClearCachedRealmsRequest | TB.SecurityClearCachedRealmsRequest, options?: TransportRequestOptions): Promise<T.SecurityClearCachedRealmsResponse>;
    /**
      * Clear the roles cache. Evict roles from the native role cache.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-clear-role-cache.html | Elasticsearch API documentation}
      */
    clearCachedRoles(this: That, params: T.SecurityClearCachedRolesRequest | TB.SecurityClearCachedRolesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityClearCachedRolesResponse>;
    clearCachedRoles(this: That, params: T.SecurityClearCachedRolesRequest | TB.SecurityClearCachedRolesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityClearCachedRolesResponse, unknown>>;
    clearCachedRoles(this: That, params: T.SecurityClearCachedRolesRequest | TB.SecurityClearCachedRolesRequest, options?: TransportRequestOptions): Promise<T.SecurityClearCachedRolesResponse>;
    /**
      * Clear service account token caches. Evict a subset of all entries from the service account token caches. Two separate caches exist for service account tokens: one cache for tokens backed by the `service_tokens` file, and another for tokens backed by the `.security` index. This API clears matching entries from both caches. The cache for service account tokens backed by the `.security` index is cleared automatically on state changes of the security index. The cache for tokens backed by the `service_tokens` file is cleared automatically on file changes.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-clear-service-token-caches.html | Elasticsearch API documentation}
      */
    clearCachedServiceTokens(this: That, params: T.SecurityClearCachedServiceTokensRequest | TB.SecurityClearCachedServiceTokensRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityClearCachedServiceTokensResponse>;
    clearCachedServiceTokens(this: That, params: T.SecurityClearCachedServiceTokensRequest | TB.SecurityClearCachedServiceTokensRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityClearCachedServiceTokensResponse, unknown>>;
    clearCachedServiceTokens(this: That, params: T.SecurityClearCachedServiceTokensRequest | TB.SecurityClearCachedServiceTokensRequest, options?: TransportRequestOptions): Promise<T.SecurityClearCachedServiceTokensResponse>;
    /**
      * Create an API key. Create an API key for access without requiring basic authentication. IMPORTANT: If the credential that is used to authenticate this request is an API key, the derived API key cannot have any privileges. If you specify privileges, the API returns an error. A successful request returns a JSON structure that contains the API key, its unique id, and its name. If applicable, it also returns expiration information for the API key in milliseconds. NOTE: By default, API keys never expire. You can specify expiration information when you create the API keys. The API keys are created by the Elasticsearch API key service, which is automatically enabled. To configure or turn off the API key service, refer to API key service setting documentation.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-create-api-key.html | Elasticsearch API documentation}
      */
    createApiKey(this: That, params?: T.SecurityCreateApiKeyRequest | TB.SecurityCreateApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityCreateApiKeyResponse>;
    createApiKey(this: That, params?: T.SecurityCreateApiKeyRequest | TB.SecurityCreateApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityCreateApiKeyResponse, unknown>>;
    createApiKey(this: That, params?: T.SecurityCreateApiKeyRequest | TB.SecurityCreateApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityCreateApiKeyResponse>;
    /**
      * Create a cross-cluster API key. Create an API key of the `cross_cluster` type for the API key based remote cluster access. A `cross_cluster` API key cannot be used to authenticate through the REST interface. IMPORTANT: To authenticate this request you must use a credential that is not an API key. Even if you use an API key that has the required privilege, the API returns an error. Cross-cluster API keys are created by the Elasticsearch API key service, which is automatically enabled. NOTE: Unlike REST API keys, a cross-cluster API key does not capture permissions of the authenticated user. The API key’s effective permission is exactly as specified with the `access` property. A successful request returns a JSON structure that contains the API key, its unique ID, and its name. If applicable, it also returns expiration information for the API key in milliseconds. By default, API keys never expire. You can specify expiration information when you create the API keys. Cross-cluster API keys can only be updated with the update cross-cluster API key API. Attempting to update them with the update REST API key API or the bulk update REST API keys API will result in an error.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-create-cross-cluster-api-key.html | Elasticsearch API documentation}
      */
    createCrossClusterApiKey(this: That, params: T.SecurityCreateCrossClusterApiKeyRequest | TB.SecurityCreateCrossClusterApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityCreateCrossClusterApiKeyResponse>;
    createCrossClusterApiKey(this: That, params: T.SecurityCreateCrossClusterApiKeyRequest | TB.SecurityCreateCrossClusterApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityCreateCrossClusterApiKeyResponse, unknown>>;
    createCrossClusterApiKey(this: That, params: T.SecurityCreateCrossClusterApiKeyRequest | TB.SecurityCreateCrossClusterApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityCreateCrossClusterApiKeyResponse>;
    /**
      * Create a service account token. Create a service accounts token for access without requiring basic authentication. NOTE: Service account tokens never expire. You must actively delete them if they are no longer needed.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-create-service-token.html | Elasticsearch API documentation}
      */
    createServiceToken(this: That, params: T.SecurityCreateServiceTokenRequest | TB.SecurityCreateServiceTokenRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityCreateServiceTokenResponse>;
    createServiceToken(this: That, params: T.SecurityCreateServiceTokenRequest | TB.SecurityCreateServiceTokenRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityCreateServiceTokenResponse, unknown>>;
    createServiceToken(this: That, params: T.SecurityCreateServiceTokenRequest | TB.SecurityCreateServiceTokenRequest, options?: TransportRequestOptions): Promise<T.SecurityCreateServiceTokenResponse>;
    /**
      * Delegate PKI authentication. This API implements the exchange of an X509Certificate chain for an Elasticsearch access token. The certificate chain is validated, according to RFC 5280, by sequentially considering the trust configuration of every installed PKI realm that has `delegation.enabled` set to `true`. A successfully trusted client certificate is also subject to the validation of the subject distinguished name according to thw `username_pattern` of the respective realm. This API is called by smart and trusted proxies, such as Kibana, which terminate the user's TLS session but still want to authenticate the user by using a PKI realm—-as if the user connected directly to Elasticsearch. IMPORTANT: The association between the subject public key in the target certificate and the corresponding private key is not validated. This is part of the TLS authentication process and it is delegated to the proxy that calls this API. The proxy is trusted to have performed the TLS authentication and this API translates that authentication into an Elasticsearch access token.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delegate-pki-authentication.html | Elasticsearch API documentation}
      */
    delegatePki(this: That, params: T.SecurityDelegatePkiRequest | TB.SecurityDelegatePkiRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDelegatePkiResponse>;
    delegatePki(this: That, params: T.SecurityDelegatePkiRequest | TB.SecurityDelegatePkiRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDelegatePkiResponse, unknown>>;
    delegatePki(this: That, params: T.SecurityDelegatePkiRequest | TB.SecurityDelegatePkiRequest, options?: TransportRequestOptions): Promise<T.SecurityDelegatePkiResponse>;
    /**
      * Delete application privileges. To use this API, you must have one of the following privileges: * The `manage_security` cluster privilege (or a greater privilege such as `all`). * The "Manage Application Privileges" global privilege for the application being referenced in the request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delete-privilege.html | Elasticsearch API documentation}
      */
    deletePrivileges(this: That, params: T.SecurityDeletePrivilegesRequest | TB.SecurityDeletePrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDeletePrivilegesResponse>;
    deletePrivileges(this: That, params: T.SecurityDeletePrivilegesRequest | TB.SecurityDeletePrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDeletePrivilegesResponse, unknown>>;
    deletePrivileges(this: That, params: T.SecurityDeletePrivilegesRequest | TB.SecurityDeletePrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityDeletePrivilegesResponse>;
    /**
      * Delete roles. Delete roles in the native realm. The role management APIs are generally the preferred way to manage roles, rather than using file-based role management. The delete roles API cannot remove roles that are defined in roles files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delete-role.html | Elasticsearch API documentation}
      */
    deleteRole(this: That, params: T.SecurityDeleteRoleRequest | TB.SecurityDeleteRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDeleteRoleResponse>;
    deleteRole(this: That, params: T.SecurityDeleteRoleRequest | TB.SecurityDeleteRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDeleteRoleResponse, unknown>>;
    deleteRole(this: That, params: T.SecurityDeleteRoleRequest | TB.SecurityDeleteRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityDeleteRoleResponse>;
    /**
      * Delete role mappings. Role mappings define which roles are assigned to each user. The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files. The delete role mappings API cannot remove role mappings that are defined in role mapping files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delete-role-mapping.html | Elasticsearch API documentation}
      */
    deleteRoleMapping(this: That, params: T.SecurityDeleteRoleMappingRequest | TB.SecurityDeleteRoleMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDeleteRoleMappingResponse>;
    deleteRoleMapping(this: That, params: T.SecurityDeleteRoleMappingRequest | TB.SecurityDeleteRoleMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDeleteRoleMappingResponse, unknown>>;
    deleteRoleMapping(this: That, params: T.SecurityDeleteRoleMappingRequest | TB.SecurityDeleteRoleMappingRequest, options?: TransportRequestOptions): Promise<T.SecurityDeleteRoleMappingResponse>;
    /**
      * Delete service account tokens. Delete service account tokens for a service in a specified namespace.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delete-service-token.html | Elasticsearch API documentation}
      */
    deleteServiceToken(this: That, params: T.SecurityDeleteServiceTokenRequest | TB.SecurityDeleteServiceTokenRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDeleteServiceTokenResponse>;
    deleteServiceToken(this: That, params: T.SecurityDeleteServiceTokenRequest | TB.SecurityDeleteServiceTokenRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDeleteServiceTokenResponse, unknown>>;
    deleteServiceToken(this: That, params: T.SecurityDeleteServiceTokenRequest | TB.SecurityDeleteServiceTokenRequest, options?: TransportRequestOptions): Promise<T.SecurityDeleteServiceTokenResponse>;
    /**
      * Delete users. Delete users from the native realm.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-delete-user.html | Elasticsearch API documentation}
      */
    deleteUser(this: That, params: T.SecurityDeleteUserRequest | TB.SecurityDeleteUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDeleteUserResponse>;
    deleteUser(this: That, params: T.SecurityDeleteUserRequest | TB.SecurityDeleteUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDeleteUserResponse, unknown>>;
    deleteUser(this: That, params: T.SecurityDeleteUserRequest | TB.SecurityDeleteUserRequest, options?: TransportRequestOptions): Promise<T.SecurityDeleteUserResponse>;
    /**
      * Disable users. Disable users in the native realm. By default, when you create users, they are enabled. You can use this API to revoke a user's access to Elasticsearch.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-disable-user.html | Elasticsearch API documentation}
      */
    disableUser(this: That, params: T.SecurityDisableUserRequest | TB.SecurityDisableUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDisableUserResponse>;
    disableUser(this: That, params: T.SecurityDisableUserRequest | TB.SecurityDisableUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDisableUserResponse, unknown>>;
    disableUser(this: That, params: T.SecurityDisableUserRequest | TB.SecurityDisableUserRequest, options?: TransportRequestOptions): Promise<T.SecurityDisableUserResponse>;
    /**
      * Disable a user profile. Disable user profiles so that they are not visible in user profile searches. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice. When you activate a user profile, its automatically enabled and visible in user profile searches. You can use the disable user profile API to disable a user profile so it’s not visible in these searches. To re-enable a disabled user profile, use the enable user profile API .
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-disable-user-profile.html | Elasticsearch API documentation}
      */
    disableUserProfile(this: That, params: T.SecurityDisableUserProfileRequest | TB.SecurityDisableUserProfileRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityDisableUserProfileResponse>;
    disableUserProfile(this: That, params: T.SecurityDisableUserProfileRequest | TB.SecurityDisableUserProfileRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityDisableUserProfileResponse, unknown>>;
    disableUserProfile(this: That, params: T.SecurityDisableUserProfileRequest | TB.SecurityDisableUserProfileRequest, options?: TransportRequestOptions): Promise<T.SecurityDisableUserProfileResponse>;
    /**
      * Enable users. Enable users in the native realm. By default, when you create users, they are enabled.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-enable-user.html | Elasticsearch API documentation}
      */
    enableUser(this: That, params: T.SecurityEnableUserRequest | TB.SecurityEnableUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityEnableUserResponse>;
    enableUser(this: That, params: T.SecurityEnableUserRequest | TB.SecurityEnableUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityEnableUserResponse, unknown>>;
    enableUser(this: That, params: T.SecurityEnableUserRequest | TB.SecurityEnableUserRequest, options?: TransportRequestOptions): Promise<T.SecurityEnableUserResponse>;
    /**
      * Enable a user profile. Enable user profiles to make them visible in user profile searches. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice. When you activate a user profile, it's automatically enabled and visible in user profile searches. If you later disable the user profile, you can use the enable user profile API to make the profile visible in these searches again.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-enable-user-profile.html | Elasticsearch API documentation}
      */
    enableUserProfile(this: That, params: T.SecurityEnableUserProfileRequest | TB.SecurityEnableUserProfileRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityEnableUserProfileResponse>;
    enableUserProfile(this: That, params: T.SecurityEnableUserProfileRequest | TB.SecurityEnableUserProfileRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityEnableUserProfileResponse, unknown>>;
    enableUserProfile(this: That, params: T.SecurityEnableUserProfileRequest | TB.SecurityEnableUserProfileRequest, options?: TransportRequestOptions): Promise<T.SecurityEnableUserProfileResponse>;
    /**
      * Enroll Kibana. Enable a Kibana instance to configure itself for communication with a secured Elasticsearch cluster. NOTE: This API is currently intended for internal use only by Kibana. Kibana uses this API internally to configure itself for communications with an Elasticsearch cluster that already has security features enabled.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-kibana-enrollment.html | Elasticsearch API documentation}
      */
    enrollKibana(this: That, params?: T.SecurityEnrollKibanaRequest | TB.SecurityEnrollKibanaRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityEnrollKibanaResponse>;
    enrollKibana(this: That, params?: T.SecurityEnrollKibanaRequest | TB.SecurityEnrollKibanaRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityEnrollKibanaResponse, unknown>>;
    enrollKibana(this: That, params?: T.SecurityEnrollKibanaRequest | TB.SecurityEnrollKibanaRequest, options?: TransportRequestOptions): Promise<T.SecurityEnrollKibanaResponse>;
    /**
      * Enroll a node. Enroll a new node to allow it to join an existing cluster with security features enabled. The response contains all the necessary information for the joining node to bootstrap discovery and security related settings so that it can successfully join the cluster. The response contains key and certificate material that allows the caller to generate valid signed certificates for the HTTP layer of all nodes in the cluster.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-node-enrollment.html | Elasticsearch API documentation}
      */
    enrollNode(this: That, params?: T.SecurityEnrollNodeRequest | TB.SecurityEnrollNodeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityEnrollNodeResponse>;
    enrollNode(this: That, params?: T.SecurityEnrollNodeRequest | TB.SecurityEnrollNodeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityEnrollNodeResponse, unknown>>;
    enrollNode(this: That, params?: T.SecurityEnrollNodeRequest | TB.SecurityEnrollNodeRequest, options?: TransportRequestOptions): Promise<T.SecurityEnrollNodeResponse>;
    /**
      * Get API key information. Retrieves information for one or more API keys. NOTE: If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own. If you have `read_security`, `manage_api_key` or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-api-key.html | Elasticsearch API documentation}
      */
    getApiKey(this: That, params?: T.SecurityGetApiKeyRequest | TB.SecurityGetApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetApiKeyResponse>;
    getApiKey(this: That, params?: T.SecurityGetApiKeyRequest | TB.SecurityGetApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetApiKeyResponse, unknown>>;
    getApiKey(this: That, params?: T.SecurityGetApiKeyRequest | TB.SecurityGetApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityGetApiKeyResponse>;
    /**
      * Get builtin privileges. Get the list of cluster privileges and index privileges that are available in this version of Elasticsearch.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-builtin-privileges.html | Elasticsearch API documentation}
      */
    getBuiltinPrivileges(this: That, params?: T.SecurityGetBuiltinPrivilegesRequest | TB.SecurityGetBuiltinPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetBuiltinPrivilegesResponse>;
    getBuiltinPrivileges(this: That, params?: T.SecurityGetBuiltinPrivilegesRequest | TB.SecurityGetBuiltinPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetBuiltinPrivilegesResponse, unknown>>;
    getBuiltinPrivileges(this: That, params?: T.SecurityGetBuiltinPrivilegesRequest | TB.SecurityGetBuiltinPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityGetBuiltinPrivilegesResponse>;
    /**
      * Get application privileges. To use this API, you must have one of the following privileges: * The `read_security` cluster privilege (or a greater privilege such as `manage_security` or `all`). * The "Manage Application Privileges" global privilege for the application being referenced in the request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-privileges.html | Elasticsearch API documentation}
      */
    getPrivileges(this: That, params?: T.SecurityGetPrivilegesRequest | TB.SecurityGetPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetPrivilegesResponse>;
    getPrivileges(this: That, params?: T.SecurityGetPrivilegesRequest | TB.SecurityGetPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetPrivilegesResponse, unknown>>;
    getPrivileges(this: That, params?: T.SecurityGetPrivilegesRequest | TB.SecurityGetPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityGetPrivilegesResponse>;
    /**
      * Get roles. Get roles in the native realm. The role management APIs are generally the preferred way to manage roles, rather than using file-based role management. The get roles API cannot retrieve roles that are defined in roles files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-role.html | Elasticsearch API documentation}
      */
    getRole(this: That, params?: T.SecurityGetRoleRequest | TB.SecurityGetRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetRoleResponse>;
    getRole(this: That, params?: T.SecurityGetRoleRequest | TB.SecurityGetRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetRoleResponse, unknown>>;
    getRole(this: That, params?: T.SecurityGetRoleRequest | TB.SecurityGetRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityGetRoleResponse>;
    /**
      * Get role mappings. Role mappings define which roles are assigned to each user. The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files. The get role mappings API cannot retrieve role mappings that are defined in role mapping files.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-role-mapping.html | Elasticsearch API documentation}
      */
    getRoleMapping(this: That, params?: T.SecurityGetRoleMappingRequest | TB.SecurityGetRoleMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetRoleMappingResponse>;
    getRoleMapping(this: That, params?: T.SecurityGetRoleMappingRequest | TB.SecurityGetRoleMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetRoleMappingResponse, unknown>>;
    getRoleMapping(this: That, params?: T.SecurityGetRoleMappingRequest | TB.SecurityGetRoleMappingRequest, options?: TransportRequestOptions): Promise<T.SecurityGetRoleMappingResponse>;
    /**
      * Get service accounts. Get a list of service accounts that match the provided path parameters. NOTE: Currently, only the `elastic/fleet-server` service account is available.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-service-accounts.html | Elasticsearch API documentation}
      */
    getServiceAccounts(this: That, params?: T.SecurityGetServiceAccountsRequest | TB.SecurityGetServiceAccountsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetServiceAccountsResponse>;
    getServiceAccounts(this: That, params?: T.SecurityGetServiceAccountsRequest | TB.SecurityGetServiceAccountsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetServiceAccountsResponse, unknown>>;
    getServiceAccounts(this: That, params?: T.SecurityGetServiceAccountsRequest | TB.SecurityGetServiceAccountsRequest, options?: TransportRequestOptions): Promise<T.SecurityGetServiceAccountsResponse>;
    /**
      * Get service account credentials. To use this API, you must have at least the `read_security` cluster privilege (or a greater privilege such as `manage_service_account` or `manage_security`). The response includes service account tokens that were created with the create service account tokens API as well as file-backed tokens from all nodes of the cluster. NOTE: For tokens backed by the `service_tokens` file, the API collects them from all nodes of the cluster. Tokens with the same name from different nodes are assumed to be the same token and are only counted once towards the total number of service tokens.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-service-credentials.html | Elasticsearch API documentation}
      */
    getServiceCredentials(this: That, params: T.SecurityGetServiceCredentialsRequest | TB.SecurityGetServiceCredentialsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetServiceCredentialsResponse>;
    getServiceCredentials(this: That, params: T.SecurityGetServiceCredentialsRequest | TB.SecurityGetServiceCredentialsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetServiceCredentialsResponse, unknown>>;
    getServiceCredentials(this: That, params: T.SecurityGetServiceCredentialsRequest | TB.SecurityGetServiceCredentialsRequest, options?: TransportRequestOptions): Promise<T.SecurityGetServiceCredentialsResponse>;
    /**
      * Get security index settings. Get the user-configurable settings for the security internal index (`.security` and associated indices). Only a subset of the index settings — those that are user-configurable—will be shown. This includes: * `index.auto_expand_replicas` * `index.number_of_replicas`
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-settings.html | Elasticsearch API documentation}
      */
    getSettings(this: That, params?: T.SecurityGetSettingsRequest | TB.SecurityGetSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetSettingsResponse>;
    getSettings(this: That, params?: T.SecurityGetSettingsRequest | TB.SecurityGetSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetSettingsResponse, unknown>>;
    getSettings(this: That, params?: T.SecurityGetSettingsRequest | TB.SecurityGetSettingsRequest, options?: TransportRequestOptions): Promise<T.SecurityGetSettingsResponse>;
    /**
      * Get a token. Create a bearer token for access without requiring basic authentication. The tokens are created by the Elasticsearch Token Service, which is automatically enabled when you configure TLS on the HTTP interface. Alternatively, you can explicitly enable the `xpack.security.authc.token.enabled` setting. When you are running in production mode, a bootstrap check prevents you from enabling the token service unless you also enable TLS on the HTTP interface. The get token API takes the same parameters as a typical OAuth 2.0 token API except for the use of a JSON request body. A successful get token API call returns a JSON structure that contains the access token, the amount of time (seconds) that the token expires in, the type, and the scope if available. The tokens returned by the get token API have a finite period of time for which they are valid and after that time period, they can no longer be used. That time period is defined by the `xpack.security.authc.token.timeout` setting. If you want to invalidate a token immediately, you can do so by using the invalidate token API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-token.html | Elasticsearch API documentation}
      */
    getToken(this: That, params?: T.SecurityGetTokenRequest | TB.SecurityGetTokenRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetTokenResponse>;
    getToken(this: That, params?: T.SecurityGetTokenRequest | TB.SecurityGetTokenRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetTokenResponse, unknown>>;
    getToken(this: That, params?: T.SecurityGetTokenRequest | TB.SecurityGetTokenRequest, options?: TransportRequestOptions): Promise<T.SecurityGetTokenResponse>;
    /**
      * Get users. Get information about users in the native realm and built-in users.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-user.html | Elasticsearch API documentation}
      */
    getUser(this: That, params?: T.SecurityGetUserRequest | TB.SecurityGetUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetUserResponse>;
    getUser(this: That, params?: T.SecurityGetUserRequest | TB.SecurityGetUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetUserResponse, unknown>>;
    getUser(this: That, params?: T.SecurityGetUserRequest | TB.SecurityGetUserRequest, options?: TransportRequestOptions): Promise<T.SecurityGetUserResponse>;
    /**
      * Get user privileges. Get the security privileges for the logged in user. All users can use this API, but only to determine their own privileges. To check the privileges of other users, you must use the run as feature. To check whether a user has a specific list of privileges, use the has privileges API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-user-privileges.html | Elasticsearch API documentation}
      */
    getUserPrivileges(this: That, params?: T.SecurityGetUserPrivilegesRequest | TB.SecurityGetUserPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetUserPrivilegesResponse>;
    getUserPrivileges(this: That, params?: T.SecurityGetUserPrivilegesRequest | TB.SecurityGetUserPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetUserPrivilegesResponse, unknown>>;
    getUserPrivileges(this: That, params?: T.SecurityGetUserPrivilegesRequest | TB.SecurityGetUserPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityGetUserPrivilegesResponse>;
    /**
      * Get a user profile. Get a user's profile using the unique profile ID. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-get-user-profile.html | Elasticsearch API documentation}
      */
    getUserProfile(this: That, params: T.SecurityGetUserProfileRequest | TB.SecurityGetUserProfileRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGetUserProfileResponse>;
    getUserProfile(this: That, params: T.SecurityGetUserProfileRequest | TB.SecurityGetUserProfileRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGetUserProfileResponse, unknown>>;
    getUserProfile(this: That, params: T.SecurityGetUserProfileRequest | TB.SecurityGetUserProfileRequest, options?: TransportRequestOptions): Promise<T.SecurityGetUserProfileResponse>;
    /**
      * Grant an API key. Create an API key on behalf of another user. This API is similar to the create API keys API, however it creates the API key for a user that is different than the user that runs the API. The caller must have authentication credentials for the user on whose behalf the API key will be created. It is not possible to use this API to create an API key without that user's credentials. The supported user authentication credential types are: * username and password * Elasticsearch access tokens * JWTs The user, for whom the authentication credentials is provided, can optionally "run as" (impersonate) another user. In this case, the API key will be created on behalf of the impersonated user. This API is intended be used by applications that need to create and manage API keys for end users, but cannot guarantee that those users have permission to create API keys on their own behalf. The API keys are created by the Elasticsearch API key service, which is automatically enabled. A successful grant API key API call returns a JSON structure that contains the API key, its unique id, and its name. If applicable, it also returns expiration information for the API key in milliseconds. By default, API keys never expire. You can specify expiration information when you create the API keys.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-grant-api-key.html | Elasticsearch API documentation}
      */
    grantApiKey(this: That, params: T.SecurityGrantApiKeyRequest | TB.SecurityGrantApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityGrantApiKeyResponse>;
    grantApiKey(this: That, params: T.SecurityGrantApiKeyRequest | TB.SecurityGrantApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityGrantApiKeyResponse, unknown>>;
    grantApiKey(this: That, params: T.SecurityGrantApiKeyRequest | TB.SecurityGrantApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityGrantApiKeyResponse>;
    /**
      * Check user privileges. Determine whether the specified user has a specified list of privileges. All users can use this API, but only to determine their own privileges. To check the privileges of other users, you must use the run as feature.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-has-privileges.html | Elasticsearch API documentation}
      */
    hasPrivileges(this: That, params?: T.SecurityHasPrivilegesRequest | TB.SecurityHasPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityHasPrivilegesResponse>;
    hasPrivileges(this: That, params?: T.SecurityHasPrivilegesRequest | TB.SecurityHasPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityHasPrivilegesResponse, unknown>>;
    hasPrivileges(this: That, params?: T.SecurityHasPrivilegesRequest | TB.SecurityHasPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityHasPrivilegesResponse>;
    /**
      * Check user profile privileges. Determine whether the users associated with the specified user profile IDs have all the requested privileges. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-has-privileges-user-profile.html | Elasticsearch API documentation}
      */
    hasPrivilegesUserProfile(this: That, params: T.SecurityHasPrivilegesUserProfileRequest | TB.SecurityHasPrivilegesUserProfileRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityHasPrivilegesUserProfileResponse>;
    hasPrivilegesUserProfile(this: That, params: T.SecurityHasPrivilegesUserProfileRequest | TB.SecurityHasPrivilegesUserProfileRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityHasPrivilegesUserProfileResponse, unknown>>;
    hasPrivilegesUserProfile(this: That, params: T.SecurityHasPrivilegesUserProfileRequest | TB.SecurityHasPrivilegesUserProfileRequest, options?: TransportRequestOptions): Promise<T.SecurityHasPrivilegesUserProfileResponse>;
    /**
      * Invalidate API keys. This API invalidates API keys created by the create API key or grant API key APIs. Invalidated API keys fail authentication, but they can still be viewed using the get API key information and query API key information APIs, for at least the configured retention period, until they are automatically deleted. To use this API, you must have at least the `manage_security`, `manage_api_key`, or `manage_own_api_key` cluster privileges. The `manage_security` privilege allows deleting any API key, including both REST and cross cluster API keys. The `manage_api_key` privilege allows deleting any REST API key, but not cross cluster API keys. The `manage_own_api_key` only allows deleting REST API keys that are owned by the user. In addition, with the `manage_own_api_key` privilege, an invalidation request must be issued in one of the three formats: - Set the parameter `owner=true`. - Or, set both `username` and `realm_name` to match the user's identity. - Or, if the request is issued by an API key, that is to say an API key invalidates itself, specify its ID in the `ids` field.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-invalidate-api-key.html | Elasticsearch API documentation}
      */
    invalidateApiKey(this: That, params?: T.SecurityInvalidateApiKeyRequest | TB.SecurityInvalidateApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityInvalidateApiKeyResponse>;
    invalidateApiKey(this: That, params?: T.SecurityInvalidateApiKeyRequest | TB.SecurityInvalidateApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityInvalidateApiKeyResponse, unknown>>;
    invalidateApiKey(this: That, params?: T.SecurityInvalidateApiKeyRequest | TB.SecurityInvalidateApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityInvalidateApiKeyResponse>;
    /**
      * Invalidate a token. The access tokens returned by the get token API have a finite period of time for which they are valid. After that time period, they can no longer be used. The time period is defined by the `xpack.security.authc.token.timeout` setting. The refresh tokens returned by the get token API are only valid for 24 hours. They can also be used exactly once. If you want to invalidate one or more access or refresh tokens immediately, use this invalidate token API. NOTE: While all parameters are optional, at least one of them is required. More specifically, either one of `token` or `refresh_token` parameters is required. If none of these two are specified, then `realm_name` and/or `username` need to be specified.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-invalidate-token.html | Elasticsearch API documentation}
      */
    invalidateToken(this: That, params?: T.SecurityInvalidateTokenRequest | TB.SecurityInvalidateTokenRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityInvalidateTokenResponse>;
    invalidateToken(this: That, params?: T.SecurityInvalidateTokenRequest | TB.SecurityInvalidateTokenRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityInvalidateTokenResponse, unknown>>;
    invalidateToken(this: That, params?: T.SecurityInvalidateTokenRequest | TB.SecurityInvalidateTokenRequest, options?: TransportRequestOptions): Promise<T.SecurityInvalidateTokenResponse>;
    /**
      * Authenticate OpenID Connect. Exchange an OpenID Connect authentication response message for an Elasticsearch internal access token and refresh token that can be subsequently used for authentication. Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs. These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-oidc-authenticate.html | Elasticsearch API documentation}
      */
    oidcAuthenticate(this: That, params: T.SecurityOidcAuthenticateRequest | TB.SecurityOidcAuthenticateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityOidcAuthenticateResponse>;
    oidcAuthenticate(this: That, params: T.SecurityOidcAuthenticateRequest | TB.SecurityOidcAuthenticateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityOidcAuthenticateResponse, unknown>>;
    oidcAuthenticate(this: That, params: T.SecurityOidcAuthenticateRequest | TB.SecurityOidcAuthenticateRequest, options?: TransportRequestOptions): Promise<T.SecurityOidcAuthenticateResponse>;
    /**
      * Logout of OpenID Connect. Invalidate an access token and a refresh token that were generated as a response to the `/_security/oidc/authenticate` API. If the OpenID Connect authentication realm in Elasticsearch is accordingly configured, the response to this call will contain a URI pointing to the end session endpoint of the OpenID Connect Provider in order to perform single logout. Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs. These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-oidc-logout.html | Elasticsearch API documentation}
      */
    oidcLogout(this: That, params: T.SecurityOidcLogoutRequest | TB.SecurityOidcLogoutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityOidcLogoutResponse>;
    oidcLogout(this: That, params: T.SecurityOidcLogoutRequest | TB.SecurityOidcLogoutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityOidcLogoutResponse, unknown>>;
    oidcLogout(this: That, params: T.SecurityOidcLogoutRequest | TB.SecurityOidcLogoutRequest, options?: TransportRequestOptions): Promise<T.SecurityOidcLogoutResponse>;
    /**
      * Prepare OpenID connect authentication. Create an oAuth 2.0 authentication request as a URL string based on the configuration of the OpenID Connect authentication realm in Elasticsearch. The response of this API is a URL pointing to the Authorization Endpoint of the configured OpenID Connect Provider, which can be used to redirect the browser of the user in order to continue the authentication process. Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs. These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-oidc-prepare-authentication.html | Elasticsearch API documentation}
      */
    oidcPrepareAuthentication(this: That, params?: T.SecurityOidcPrepareAuthenticationRequest | TB.SecurityOidcPrepareAuthenticationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityOidcPrepareAuthenticationResponse>;
    oidcPrepareAuthentication(this: That, params?: T.SecurityOidcPrepareAuthenticationRequest | TB.SecurityOidcPrepareAuthenticationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityOidcPrepareAuthenticationResponse, unknown>>;
    oidcPrepareAuthentication(this: That, params?: T.SecurityOidcPrepareAuthenticationRequest | TB.SecurityOidcPrepareAuthenticationRequest, options?: TransportRequestOptions): Promise<T.SecurityOidcPrepareAuthenticationResponse>;
    /**
      * Create or update application privileges. To use this API, you must have one of the following privileges: * The `manage_security` cluster privilege (or a greater privilege such as `all`). * The "Manage Application Privileges" global privilege for the application being referenced in the request. Application names are formed from a prefix, with an optional suffix that conform to the following rules: * The prefix must begin with a lowercase ASCII letter. * The prefix must contain only ASCII letters or digits. * The prefix must be at least 3 characters long. * If the suffix exists, it must begin with either a dash `-` or `_`. * The suffix cannot contain any of the following characters: `\`, `/`, `*`, `?`, `"`, `<`, `>`, `|`, `,`, `*`. * No part of the name can contain whitespace. Privilege names must begin with a lowercase ASCII letter and must contain only ASCII letters and digits along with the characters `_`, `-`, and `.`. Action names can contain any number of printable ASCII characters and must contain at least one of the following characters: `/`, `*`, `:`.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-put-privileges.html | Elasticsearch API documentation}
      */
    putPrivileges(this: That, params: T.SecurityPutPrivilegesRequest | TB.SecurityPutPrivilegesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityPutPrivilegesResponse>;
    putPrivileges(this: That, params: T.SecurityPutPrivilegesRequest | TB.SecurityPutPrivilegesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityPutPrivilegesResponse, unknown>>;
    putPrivileges(this: That, params: T.SecurityPutPrivilegesRequest | TB.SecurityPutPrivilegesRequest, options?: TransportRequestOptions): Promise<T.SecurityPutPrivilegesResponse>;
    /**
      * Create or update roles. The role management APIs are generally the preferred way to manage roles in the native realm, rather than using file-based role management. The create or update roles API cannot update roles that are defined in roles files. File-based role management is not available in Elastic Serverless.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-put-role.html | Elasticsearch API documentation}
      */
    putRole(this: That, params: T.SecurityPutRoleRequest | TB.SecurityPutRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityPutRoleResponse>;
    putRole(this: That, params: T.SecurityPutRoleRequest | TB.SecurityPutRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityPutRoleResponse, unknown>>;
    putRole(this: That, params: T.SecurityPutRoleRequest | TB.SecurityPutRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityPutRoleResponse>;
    /**
      * Create or update role mappings. Role mappings define which roles are assigned to each user. Each mapping has rules that identify users and a list of roles that are granted to those users. The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files. The create or update role mappings API cannot update role mappings that are defined in role mapping files. NOTE: This API does not create roles. Rather, it maps users to existing roles. Roles can be created by using the create or update roles API or roles files. **Role templates** The most common use for role mappings is to create a mapping from a known value on the user to a fixed role name. For example, all users in the `cn=admin,dc=example,dc=com` LDAP group should be given the superuser role in Elasticsearch. The `roles` field is used for this purpose. For more complex needs, it is possible to use Mustache templates to dynamically determine the names of the roles that should be granted to the user. The `role_templates` field is used for this purpose. NOTE: To use role templates successfully, the relevant scripting feature must be enabled. Otherwise, all attempts to create a role mapping with role templates fail. All of the user fields that are available in the role mapping rules are also available in the role templates. Thus it is possible to assign a user to a role that reflects their username, their groups, or the name of the realm to which they authenticated. By default a template is evaluated to produce a single string that is the name of the role which should be assigned to the user. If the format of the template is set to "json" then the template is expected to produce a JSON string or an array of JSON strings for the role names.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-put-role-mapping.html | Elasticsearch API documentation}
      */
    putRoleMapping(this: That, params: T.SecurityPutRoleMappingRequest | TB.SecurityPutRoleMappingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityPutRoleMappingResponse>;
    putRoleMapping(this: That, params: T.SecurityPutRoleMappingRequest | TB.SecurityPutRoleMappingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityPutRoleMappingResponse, unknown>>;
    putRoleMapping(this: That, params: T.SecurityPutRoleMappingRequest | TB.SecurityPutRoleMappingRequest, options?: TransportRequestOptions): Promise<T.SecurityPutRoleMappingResponse>;
    /**
      * Create or update users. Add and update users in the native realm. A password is required for adding a new user but is optional when updating an existing user. To change a user's password without updating any other fields, use the change password API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-put-user.html | Elasticsearch API documentation}
      */
    putUser(this: That, params: T.SecurityPutUserRequest | TB.SecurityPutUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityPutUserResponse>;
    putUser(this: That, params: T.SecurityPutUserRequest | TB.SecurityPutUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityPutUserResponse, unknown>>;
    putUser(this: That, params: T.SecurityPutUserRequest | TB.SecurityPutUserRequest, options?: TransportRequestOptions): Promise<T.SecurityPutUserResponse>;
    /**
      * Find API keys with a query. Get a paginated list of API keys and their information. You can optionally filter the results with a query. To use this API, you must have at least the `manage_own_api_key` or the `read_security` cluster privileges. If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own. If you have the `read_security`, `manage_api_key`, or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-query-api-key.html | Elasticsearch API documentation}
      */
    queryApiKeys(this: That, params?: T.SecurityQueryApiKeysRequest | TB.SecurityQueryApiKeysRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityQueryApiKeysResponse>;
    queryApiKeys(this: That, params?: T.SecurityQueryApiKeysRequest | TB.SecurityQueryApiKeysRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityQueryApiKeysResponse, unknown>>;
    queryApiKeys(this: That, params?: T.SecurityQueryApiKeysRequest | TB.SecurityQueryApiKeysRequest, options?: TransportRequestOptions): Promise<T.SecurityQueryApiKeysResponse>;
    /**
      * Find roles with a query. Get roles in a paginated manner. The role management APIs are generally the preferred way to manage roles, rather than using file-based role management. The query roles API does not retrieve roles that are defined in roles files, nor built-in ones. You can optionally filter the results with a query. Also, the results can be paginated and sorted.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-query-role.html | Elasticsearch API documentation}
      */
    queryRole(this: That, params?: T.SecurityQueryRoleRequest | TB.SecurityQueryRoleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityQueryRoleResponse>;
    queryRole(this: That, params?: T.SecurityQueryRoleRequest | TB.SecurityQueryRoleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityQueryRoleResponse, unknown>>;
    queryRole(this: That, params?: T.SecurityQueryRoleRequest | TB.SecurityQueryRoleRequest, options?: TransportRequestOptions): Promise<T.SecurityQueryRoleResponse>;
    /**
      * Find users with a query. Get information for users in a paginated manner. You can optionally filter the results with a query. NOTE: As opposed to the get user API, built-in users are excluded from the result. This API is only for native users.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-query-user.html | Elasticsearch API documentation}
      */
    queryUser(this: That, params?: T.SecurityQueryUserRequest | TB.SecurityQueryUserRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityQueryUserResponse>;
    queryUser(this: That, params?: T.SecurityQueryUserRequest | TB.SecurityQueryUserRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityQueryUserResponse, unknown>>;
    queryUser(this: That, params?: T.SecurityQueryUserRequest | TB.SecurityQueryUserRequest, options?: TransportRequestOptions): Promise<T.SecurityQueryUserResponse>;
    /**
      * Authenticate SAML. Submit a SAML response message to Elasticsearch for consumption. NOTE: This API is intended for use by custom web applications other than Kibana. If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack. The SAML message that is submitted can be: * A response to a SAML authentication request that was previously created using the SAML prepare authentication API. * An unsolicited SAML message in the case of an IdP-initiated single sign-on (SSO) flow. In either case, the SAML message needs to be a base64 encoded XML document with a root element of `<Response>`. After successful validation, Elasticsearch responds with an Elasticsearch internal access token and refresh token that can be subsequently used for authentication. This API endpoint essentially exchanges SAML responses that indicate successful authentication in the IdP for Elasticsearch access and refresh tokens, which can be used for authentication against Elasticsearch.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-authenticate.html | Elasticsearch API documentation}
      */
    samlAuthenticate(this: That, params: T.SecuritySamlAuthenticateRequest | TB.SecuritySamlAuthenticateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlAuthenticateResponse>;
    samlAuthenticate(this: That, params: T.SecuritySamlAuthenticateRequest | TB.SecuritySamlAuthenticateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlAuthenticateResponse, unknown>>;
    samlAuthenticate(this: That, params: T.SecuritySamlAuthenticateRequest | TB.SecuritySamlAuthenticateRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlAuthenticateResponse>;
    /**
      * Logout of SAML completely. Verifies the logout response sent from the SAML IdP. NOTE: This API is intended for use by custom web applications other than Kibana. If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack. The SAML IdP may send a logout response back to the SP after handling the SP-initiated SAML Single Logout. This API verifies the response by ensuring the content is relevant and validating its signature. An empty response is returned if the verification process is successful. The response can be sent by the IdP with either the HTTP-Redirect or the HTTP-Post binding. The caller of this API must prepare the request accordingly so that this API can handle either of them.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-complete-logout.html | Elasticsearch API documentation}
      */
    samlCompleteLogout(this: That, params: T.SecuritySamlCompleteLogoutRequest | TB.SecuritySamlCompleteLogoutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlCompleteLogoutResponse>;
    samlCompleteLogout(this: That, params: T.SecuritySamlCompleteLogoutRequest | TB.SecuritySamlCompleteLogoutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlCompleteLogoutResponse, unknown>>;
    samlCompleteLogout(this: That, params: T.SecuritySamlCompleteLogoutRequest | TB.SecuritySamlCompleteLogoutRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlCompleteLogoutResponse>;
    /**
      * Invalidate SAML. Submit a SAML LogoutRequest message to Elasticsearch for consumption. NOTE: This API is intended for use by custom web applications other than Kibana. If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack. The logout request comes from the SAML IdP during an IdP initiated Single Logout. The custom web application can use this API to have Elasticsearch process the `LogoutRequest`. After successful validation of the request, Elasticsearch invalidates the access token and refresh token that corresponds to that specific SAML principal and provides a URL that contains a SAML LogoutResponse message. Thus the user can be redirected back to their IdP.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-invalidate.html | Elasticsearch API documentation}
      */
    samlInvalidate(this: That, params: T.SecuritySamlInvalidateRequest | TB.SecuritySamlInvalidateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlInvalidateResponse>;
    samlInvalidate(this: That, params: T.SecuritySamlInvalidateRequest | TB.SecuritySamlInvalidateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlInvalidateResponse, unknown>>;
    samlInvalidate(this: That, params: T.SecuritySamlInvalidateRequest | TB.SecuritySamlInvalidateRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlInvalidateResponse>;
    /**
      * Logout of SAML. Submits a request to invalidate an access token and refresh token. NOTE: This API is intended for use by custom web applications other than Kibana. If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack. This API invalidates the tokens that were generated for a user by the SAML authenticate API. If the SAML realm in Elasticsearch is configured accordingly and the SAML IdP supports this, the Elasticsearch response contains a URL to redirect the user to the IdP that contains a SAML logout request (starting an SP-initiated SAML Single Logout).
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-logout.html | Elasticsearch API documentation}
      */
    samlLogout(this: That, params: T.SecuritySamlLogoutRequest | TB.SecuritySamlLogoutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlLogoutResponse>;
    samlLogout(this: That, params: T.SecuritySamlLogoutRequest | TB.SecuritySamlLogoutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlLogoutResponse, unknown>>;
    samlLogout(this: That, params: T.SecuritySamlLogoutRequest | TB.SecuritySamlLogoutRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlLogoutResponse>;
    /**
      * Prepare SAML authentication. Create a SAML authentication request (`<AuthnRequest>`) as a URL string based on the configuration of the respective SAML realm in Elasticsearch. NOTE: This API is intended for use by custom web applications other than Kibana. If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack. This API returns a URL pointing to the SAML Identity Provider. You can use the URL to redirect the browser of the user in order to continue the authentication process. The URL includes a single parameter named `SAMLRequest`, which contains a SAML Authentication request that is deflated and Base64 encoded. If the configuration dictates that SAML authentication requests should be signed, the URL has two extra parameters named `SigAlg` and `Signature`. These parameters contain the algorithm used for the signature and the signature value itself. It also returns a random string that uniquely identifies this SAML Authentication request. The caller of this API needs to store this identifier as it needs to be used in a following step of the authentication process.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-prepare-authentication.html | Elasticsearch API documentation}
      */
    samlPrepareAuthentication(this: That, params?: T.SecuritySamlPrepareAuthenticationRequest | TB.SecuritySamlPrepareAuthenticationRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlPrepareAuthenticationResponse>;
    samlPrepareAuthentication(this: That, params?: T.SecuritySamlPrepareAuthenticationRequest | TB.SecuritySamlPrepareAuthenticationRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlPrepareAuthenticationResponse, unknown>>;
    samlPrepareAuthentication(this: That, params?: T.SecuritySamlPrepareAuthenticationRequest | TB.SecuritySamlPrepareAuthenticationRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlPrepareAuthenticationResponse>;
    /**
      * Create SAML service provider metadata. Generate SAML metadata for a SAML 2.0 Service Provider. The SAML 2.0 specification provides a mechanism for Service Providers to describe their capabilities and configuration using a metadata file. This API generates Service Provider metadata based on the configuration of a SAML realm in Elasticsearch.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-saml-sp-metadata.html | Elasticsearch API documentation}
      */
    samlServiceProviderMetadata(this: That, params: T.SecuritySamlServiceProviderMetadataRequest | TB.SecuritySamlServiceProviderMetadataRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySamlServiceProviderMetadataResponse>;
    samlServiceProviderMetadata(this: That, params: T.SecuritySamlServiceProviderMetadataRequest | TB.SecuritySamlServiceProviderMetadataRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySamlServiceProviderMetadataResponse, unknown>>;
    samlServiceProviderMetadata(this: That, params: T.SecuritySamlServiceProviderMetadataRequest | TB.SecuritySamlServiceProviderMetadataRequest, options?: TransportRequestOptions): Promise<T.SecuritySamlServiceProviderMetadataResponse>;
    /**
      * Suggest a user profile. Get suggestions for user profiles that match specified search criteria. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-suggest-user-profile.html | Elasticsearch API documentation}
      */
    suggestUserProfiles(this: That, params?: T.SecuritySuggestUserProfilesRequest | TB.SecuritySuggestUserProfilesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecuritySuggestUserProfilesResponse>;
    suggestUserProfiles(this: That, params?: T.SecuritySuggestUserProfilesRequest | TB.SecuritySuggestUserProfilesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecuritySuggestUserProfilesResponse, unknown>>;
    suggestUserProfiles(this: That, params?: T.SecuritySuggestUserProfilesRequest | TB.SecuritySuggestUserProfilesRequest, options?: TransportRequestOptions): Promise<T.SecuritySuggestUserProfilesResponse>;
    /**
      * Update an API key. Update attributes of an existing API key. This API supports updates to an API key's access scope, expiration, and metadata. To use this API, you must have at least the `manage_own_api_key` cluster privilege. Users can only update API keys that they created or that were granted to them. To update another user’s API key, use the `run_as` feature to submit a request on behalf of another user. IMPORTANT: It's not possible to use an API key as the authentication credential for this API. The owner user’s credentials are required. Use this API to update API keys created by the create API key or grant API Key APIs. If you need to apply the same update to many API keys, you can use the bulk update API keys API to reduce overhead. It's not possible to update expired API keys or API keys that have been invalidated by the invalidate API key API. The access scope of an API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request. The snapshot of the owner's permissions is updated automatically on every call. IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change the API key's access scope. This change can occur if the owner user's permissions have changed since the API key was created or last modified.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-update-api-key.html | Elasticsearch API documentation}
      */
    updateApiKey(this: That, params: T.SecurityUpdateApiKeyRequest | TB.SecurityUpdateApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityUpdateApiKeyResponse>;
    updateApiKey(this: That, params: T.SecurityUpdateApiKeyRequest | TB.SecurityUpdateApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityUpdateApiKeyResponse, unknown>>;
    updateApiKey(this: That, params: T.SecurityUpdateApiKeyRequest | TB.SecurityUpdateApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityUpdateApiKeyResponse>;
    /**
      * Update a cross-cluster API key. Update the attributes of an existing cross-cluster API key, which is used for API key based remote cluster access. To use this API, you must have at least the `manage_security` cluster privilege. Users can only update API keys that they created. To update another user's API key, use the `run_as` feature to submit a request on behalf of another user. IMPORTANT: It's not possible to use an API key as the authentication credential for this API. To update an API key, the owner user's credentials are required. It's not possible to update expired API keys, or API keys that have been invalidated by the invalidate API key API. This API supports updates to an API key's access scope, metadata, and expiration. The owner user's information, such as the `username` and `realm`, is also updated automatically on every call. NOTE: This API cannot update REST API keys, which should be updated by either the update API key or bulk update API keys API.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-update-cross-cluster-api-key.html | Elasticsearch API documentation}
      */
    updateCrossClusterApiKey(this: That, params: T.SecurityUpdateCrossClusterApiKeyRequest | TB.SecurityUpdateCrossClusterApiKeyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityUpdateCrossClusterApiKeyResponse>;
    updateCrossClusterApiKey(this: That, params: T.SecurityUpdateCrossClusterApiKeyRequest | TB.SecurityUpdateCrossClusterApiKeyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityUpdateCrossClusterApiKeyResponse, unknown>>;
    updateCrossClusterApiKey(this: That, params: T.SecurityUpdateCrossClusterApiKeyRequest | TB.SecurityUpdateCrossClusterApiKeyRequest, options?: TransportRequestOptions): Promise<T.SecurityUpdateCrossClusterApiKeyResponse>;
    /**
      * Update security index settings. Update the user-configurable settings for the security internal index (`.security` and associated indices). Only a subset of settings are allowed to be modified. This includes `index.auto_expand_replicas` and `index.number_of_replicas`. NOTE: If `index.auto_expand_replicas` is set, `index.number_of_replicas` will be ignored during updates. If a specific index is not in use on the system and settings are provided for it, the request will be rejected. This API does not yet support configuring the settings for indices before they are in use.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-update-settings.html | Elasticsearch API documentation}
      */
    updateSettings(this: That, params?: T.SecurityUpdateSettingsRequest | TB.SecurityUpdateSettingsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityUpdateSettingsResponse>;
    updateSettings(this: That, params?: T.SecurityUpdateSettingsRequest | TB.SecurityUpdateSettingsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityUpdateSettingsResponse, unknown>>;
    updateSettings(this: That, params?: T.SecurityUpdateSettingsRequest | TB.SecurityUpdateSettingsRequest, options?: TransportRequestOptions): Promise<T.SecurityUpdateSettingsResponse>;
    /**
      * Update user profile data. Update specific data for the user profile that is associated with a unique ID. NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly. Elastic reserves the right to change or remove this feature in future releases without prior notice. To use this API, you must have one of the following privileges: * The `manage_user_profile` cluster privilege. * The `update_profile_data` global privilege for the namespaces that are referenced in the request. This API updates the `labels` and `data` fields of an existing user profile document with JSON objects. New keys and their values are added to the profile document and conflicting keys are replaced by data that's included in the request. For both labels and data, content is namespaced by the top-level fields. The `update_profile_data` global privilege grants privileges for updating only the allowed namespaces.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/security-api-update-user-profile-data.html | Elasticsearch API documentation}
      */
    updateUserProfileData(this: That, params: T.SecurityUpdateUserProfileDataRequest | TB.SecurityUpdateUserProfileDataRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SecurityUpdateUserProfileDataResponse>;
    updateUserProfileData(this: That, params: T.SecurityUpdateUserProfileDataRequest | TB.SecurityUpdateUserProfileDataRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SecurityUpdateUserProfileDataResponse, unknown>>;
    updateUserProfileData(this: That, params: T.SecurityUpdateUserProfileDataRequest | TB.SecurityUpdateUserProfileDataRequest, options?: TransportRequestOptions): Promise<T.SecurityUpdateUserProfileDataResponse>;
}
export {};
