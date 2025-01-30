// This file is auto-generated by @hey-api/openapi-ts

export type _Error = string | {
    [key: string]: unknown;
};

export type MetaInformation = {
    /**
     * Meta information about the CodeSandbox API
     */
    api: {
        latest_version: string;
        name: string;
    };
    /**
     * Meta information about the current authentication context
     */
    auth?: {
        scopes: Array<string>;
        team: string | null;
        version: string;
    };
};

export type Response = {
    errors?: Array<unknown>;
    success?: boolean;
};

export type SandboxCreateRequest = {
    /**
     * Optional text description of the sandbox. Defaults to no description.
     */
    description?: string;
    /**
     * Filename of the entrypoint of the sandbox.
     */
    entry?: string;
    /**
     * Array of strings with external resources to load.
     */
    external_resources?: Array<string>;
    /**
     * Map of `path => file` where each file is a map.
     */
    files: {
        [key: string]: {
            /**
             * If the file has binary (non plain-text) contents, place the base-64 encoded contents in this key. Should be empty or missing if `is_binary` is `false`.
             */
            binary_content?: string;
            /**
             * If the file is non-binary in nature, place the (escaped) plain text contents in this key. Should be empty or missing if `is_binary` is `true`.
             */
            code?: string;
            /**
             * Whether the file contains binary contents.
             */
            is_binary?: boolean;
        };
    };
    /**
     * Whether changes to the sandbox are disallowed. Defaults to `false`.
     */
    is_frozen?: boolean;
    /**
     * Map of dependencies and their version specifications.
     */
    npm_dependencies?: {
        [key: string]: string;
    };
    /**
     * Path to the collection where the new sandbox should be stored. Defaults to "/". If no collection exists at the given path, it will be created.
     */
    path?: string;
    /**
     * 0 for public, 1 for unlisted, and 2 for private. Privacy is subject to certain restrictions (team minimum setting, drafts must be private, etc.). Defaults to public.
     */
    privacy?: number;
    /**
     * Runtime to use for the sandbox. Defaults to `"browser"`.
     */
    runtime?: 'browser' | 'vm';
    /**
     * List of string tags to apply to the sandbox. Only the first ten will be used. Defaults to no tags.
     */
    tags?: Array<string>;
    /**
     * Name of the template from which the sandbox is derived (for example, `"static"`).
     */
    template?: string;
    /**
     * Sandbox title. Maximum 255 characters. Defaults to no title.
     */
    title?: string;
};

export type SandboxCreateResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        alias: string;
        id: string;
        title: string | null;
    };
};

export type SandboxForkRequest = {
    /**
     * Sandbox description. Maximum 255 characters. Defaults to description of original sandbox.
     */
    description?: string;
    /**
     * Sandbox frozen status. When true, edits to the sandbox are restricted. Defaults to frozen status of the original sandbox.
     */
    is_frozen?: boolean;
    /**
     * Path to the collection where the new sandbox should be stored. Defaults to "/". If no collection exists at the given path, it will be created.
     */
    path?: string;
    /**
     * Sandbox privacy. 0 for public, 1 for unlisted, and 2 for private. Subject to the minimum privacy restrictions of the workspace. Defaults to the privacy of the original sandbox.
     */
    privacy?: number;
    /**
     * Optional VM start configuration. If provided, the sandbox VM will be started immediately after creation.
     */
    start_options?: {
        /**
         * The time in seconds after which the VM will hibernate due to inactivity.
         * Must be a positive integer between 1 and 86400 (24 hours).
         * Defaults to 300 seconds (5 minutes) if not specified.
         *
         */
        hibernation_timeout_seconds?: number;
        /**
         * This determines in which cluster, closest to the given country the VM will be started in. The format is ISO-3166-1 alpha-2. If not set, the VM will be started closest to the caller of this API. This will only be applied when a VM is run for the first time, and will only serve as a hint (e.g. if the template of this sandbox runs in EU cluster, this sandbox will also run in the EU cluster).
         */
        ipcountry?: string;
        /**
         * Determines which specs to start the VM with. If not specified, the VM will start with the default specs for the workspace.
         *
         * You can only specify a VM tier when starting a VM that is inside your workspace. Specifying a VM tier for someone else's sandbox will return an error.
         *
         * Not all tiers will be available depending on the workspace subscription status, and higher tiers incur higher costs. Please see codesandbox.io/pricing for details on specs and costs.
         *
         */
        tier?: 'Pico' | 'Nano' | 'Micro' | 'Small' | 'Medium' | 'Large' | 'XLarge';
    };
    /**
     * Tags to set on the new sandbox, if any. Will not inherit tags from the source sandbox.
     */
    tags?: Array<string>;
    /**
     * Sandbox title. Maximum 255 characters. Defaults to title of original sandbox with (forked).
     */
    title?: string;
};

export type SandboxForkResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        alias: string;
        id: string;
        /**
         * VM start response. Only present when start_options were provided in the request.
         */
        start_response?: {
            bootup_type: string;
            cluster: string;
            id: string;
            latest_pitcher_version: string;
            pitcher_manager_version: string;
            pitcher_token: string;
            pitcher_url: string;
            pitcher_version: string;
            reconnect_token: string;
            user_workspace_path: string;
            workspace_path: string;
        } | null;
        title: string | null;
    };
};

export type SandboxGetResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        created_at: string;
        description?: string | null;
        id: string;
        is_frozen: boolean;
        privacy: number;
        tags: Array<string>;
        title?: string | null;
        updated_at: string;
    };
};

export type SandboxListResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        pagination: {
            current_page: number;
            /**
             * The number of the next page, if any. If `null`, the current page is the last page of records.
             */
            next_page: number | null;
            total_records: number;
        };
        sandboxes: Array<{
            created_at: string;
            description?: string | null;
            id: string;
            is_frozen: boolean;
            privacy: number;
            tags: Array<string>;
            title?: string | null;
            updated_at: string;
        }>;
    };
};

export type TokenCreateRequest = {
    /**
     * API Version to use, formatted as YYYY-MM-DD. Defaults to the latest version at time of creation.
     */
    default_version?: string | null;
    /**
     * Description of this token, for instance where it will be used.
     */
    description?: string;
    /**
     * UTC Timestamp until when this token is valid. Omitting this field will create a token without an expiry.
     */
    expires_at?: string | null;
    /**
     * Which scopes to grant this token. The given scopes will replace the current scopes, revoking any that are no longer present in the list.
     */
    scopes?: Array<'sandbox_create' | 'sandbox_edit_code' | 'sandbox_read' | 'vm_manage'>;
};

export type TokenCreateResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        description: string | null;
        expires_at: string | null;
        scopes: Array<string>;
        team_id: string;
        token: string;
        token_id: string;
    };
};

/**
 * Updateable fields for API Tokens. Omitting a field will not update it; explicitly passing null or an empty list will clear the value.
 */
export type TokenUpdateRequest = {
    /**
     * API Version to use, formatted as YYYY-MM-DD
     */
    default_version?: string | null;
    /**
     * Description of this token, for instance where it will be used.
     */
    description?: string | null;
    /**
     * Expiry time of this token. Cannot be set in the past, and cannot be changed for tokens that have already expired. Pass null to make this token never expire.
     */
    expires_at?: string | null;
    /**
     * Which scopes to grant this token. The given scopes will replace the current scopes, revoking any that are no longer present in the list.
     */
    scopes?: Array<'sandbox_create' | 'sandbox_edit_code' | 'sandbox_read' | 'vm_manage'>;
};

export type TokenUpdateResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        description: string | null;
        expires_at?: string | null;
        scopes: Array<string>;
        team_id: string;
        token_id: string;
    };
};

export type VmCreateSessionRequest = {
    /**
     * Permission level for the session
     */
    permission: 'read' | 'write';
    /**
     * Unique identifier for the session
     */
    session_id: string;
};

export type VmCreateSessionResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        /**
         * List of capabilities that Pitcher has
         */
        capabilities: Array<string>;
        /**
         * The permissions of the current session
         */
        permissions: {
            [key: string]: unknown;
        };
        /**
         * Token to authenticate with Pitcher (the agent running inside the VM)
         */
        pitcher_token: string;
        /**
         * WebSocket URL to connect to Pitcher
         */
        pitcher_url: string;
        /**
         * Path to the user's workspace in the VM
         */
        user_workspace_path: string;
        /**
         * The Linux username created for this session
         */
        username: string;
    };
};

export type VmHibernateRequest = {
    [key: string]: unknown;
};

export type VmHibernateResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        [key: string]: unknown;
    };
};

export type VmShutdownRequest = {
    [key: string]: unknown;
};

export type VmShutdownResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        [key: string]: unknown;
    };
};

export type VmStartRequest = {
    /**
     * The time in seconds after which the VM will hibernate due to inactivity.
     * Must be a positive integer between 1 and 86400 (24 hours).
     * Defaults to 300 seconds (5 minutes) if not specified.
     *
     */
    hibernation_timeout_seconds?: number;
    /**
     * This determines in which cluster, closest to the given country the VM will be started in. The format is ISO-3166-1 alpha-2. If not set, the VM will be started closest to the caller of this API. This will only be applied when a VM is run for the first time, and will only serve as a hint (e.g. if the template of this sandbox runs in EU cluster, this sandbox will also run in the EU cluster).
     */
    ipcountry?: string;
    /**
     * Determines which specs to start the VM with. If not specified, the VM will start with the default specs for the workspace.
     *
     * You can only specify a VM tier when starting a VM that is inside your workspace. Specifying a VM tier for someone else's sandbox will return an error.
     *
     * Not all tiers will be available depending on the workspace subscription status, and higher tiers incur higher costs. Please see codesandbox.io/pricing for details on specs and costs.
     *
     */
    tier?: 'Pico' | 'Nano' | 'Micro' | 'Small' | 'Medium' | 'Large' | 'XLarge';
};

export type VmStartResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        bootup_type: string;
        cluster: string;
        id: string;
        latest_pitcher_version: string;
        pitcher_manager_version: string;
        pitcher_token: string;
        pitcher_url: string;
        pitcher_version: string;
        reconnect_token: string;
        user_workspace_path: string;
        workspace_path: string;
    };
};

export type VmUpdateHibernationTimeoutRequest = {
    /**
     * The new hibernation timeout in seconds.
     *
     * Must be greater than 0 and less than or equal to 86400 (24 hours).
     *
     */
    hibernation_timeout_seconds: number;
};

export type VmUpdateHibernationTimeoutResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        hibernation_timeout_seconds: number;
        id: string;
    };
};

export type VmUpdateSpecsRequest = {
    /**
     * Determines which specs to update the VM with.
     *
     * Not all tiers will be available depending on the workspace subscription status, and higher tiers incur higher costs. Please see codesandbox.io/pricing for details on specs and costs.
     *
     */
    tier: 'Pico' | 'Nano' | 'Micro' | 'Small' | 'Medium' | 'Large' | 'XLarge';
};

export type VmUpdateSpecsResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        id: string;
        tier: string;
    };
};

export type WorkspaceCreateRequest = {
    /**
     * Name for the new workspace. Maximum length 64 characters.
     */
    name: string;
};

export type WorkspaceCreateResponse = {
    errors?: Array<unknown>;
    success?: boolean;
} & {
    data?: {
        id: string;
        name: string;
    };
};

export type MetaInfoData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/meta/info';
};

export type MetaInfoResponses = {
    /**
     * Meta Info Response
     */
    200: MetaInformation;
};

export type MetaInfoResponse = MetaInfoResponses[keyof MetaInfoResponses];

export type WorkspaceCreateData = {
    /**
     * Workspace Create Request
     */
    body?: WorkspaceCreateRequest;
    path?: never;
    query?: never;
    url: '/org/workspace';
};

export type WorkspaceCreateResponses = {
    /**
     * Workspace Create Response
     */
    201: WorkspaceCreateResponse;
};

export type WorkspaceCreateResponse2 = WorkspaceCreateResponses[keyof WorkspaceCreateResponses];

export type TokenCreateData = {
    /**
     * Token Create Request
     */
    body?: TokenCreateRequest;
    path?: never;
    query?: never;
    url: '/org/workspace/{team_id}/tokens';
};

export type TokenCreateResponses = {
    /**
     * Token Create Response
     */
    201: TokenCreateResponse;
};

export type TokenCreateResponse2 = TokenCreateResponses[keyof TokenCreateResponses];

export type TokenUpdateData = {
    /**
     * Token Update Request
     */
    body?: TokenUpdateRequest;
    path?: never;
    query?: never;
    url: '/org/workspace/{team_id}/tokens/{token_id}';
};

export type TokenUpdateResponses = {
    /**
     * Token Update Response
     */
    201: TokenUpdateResponse;
};

export type TokenUpdateResponse2 = TokenUpdateResponses[keyof TokenUpdateResponses];

export type SandboxListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Comma-separated list of tags to filter by
         */
        tags?: string;
        /**
         * Field to order results by
         */
        order_by?: 'inserted_at' | 'updated_at';
        /**
         * Order direction
         */
        direction?: 'asc' | 'desc';
        /**
         * Maximum number of sandboxes to return in a single response
         */
        page_size?: number;
        /**
         * Page number to return
         */
        page?: number;
        /**
         * If true, only returns VMs for which a heartbeat was received in the last 30 seconds.
         */
        status?: 'running';
    };
    url: '/sandbox';
};

export type SandboxListResponses = {
    /**
     * Sandbox List Response
     */
    200: SandboxListResponse;
};

export type SandboxListResponse2 = SandboxListResponses[keyof SandboxListResponses];

export type SandboxCreateData = {
    /**
     * Sandbox Create Request
     */
    body?: SandboxCreateRequest;
    path?: never;
    query?: never;
    url: '/sandbox';
};

export type SandboxCreateResponses = {
    /**
     * Sandbox Create Response
     */
    201: SandboxCreateResponse;
};

export type SandboxCreateResponse2 = SandboxCreateResponses[keyof SandboxCreateResponses];

export type SandboxGetData = {
    body?: never;
    path: {
        /**
         * Short ID of the sandbox to retrieve
         */
        id: string;
    };
    query?: never;
    url: '/sandbox/{id}';
};

export type SandboxGetResponses = {
    /**
     * Sandbox Get Response
     */
    200: SandboxGetResponse;
};

export type SandboxGetResponse2 = SandboxGetResponses[keyof SandboxGetResponses];

export type SandboxForkData = {
    /**
     * Sandbox Fork Request
     */
    body?: SandboxForkRequest;
    path: {
        /**
         * Short ID of the sandbox to fork
         */
        id: string;
    };
    query?: never;
    url: '/sandbox/{id}/fork';
};

export type SandboxForkResponses = {
    /**
     * Sandbox Fork Response
     */
    201: SandboxForkResponse;
};

export type SandboxForkResponse2 = SandboxForkResponses[keyof SandboxForkResponses];

export type VmHibernateData = {
    /**
     * VM Hibernate Request
     */
    body?: VmHibernateRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/hibernate';
};

export type VmHibernateResponses = {
    /**
     * VM Hibernate Response
     */
    200: VmHibernateResponse;
};

export type VmHibernateResponse2 = VmHibernateResponses[keyof VmHibernateResponses];

export type VmUpdateHibernationTimeoutData = {
    /**
     * VM Update Hibernation Timeout Request
     */
    body?: VmUpdateHibernationTimeoutRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/hibernation_timeout';
};

export type VmUpdateHibernationTimeoutResponses = {
    /**
     * VM Update Hibernation Timeout Response
     */
    200: VmUpdateHibernationTimeoutResponse;
};

export type VmUpdateHibernationTimeoutResponse2 = VmUpdateHibernationTimeoutResponses[keyof VmUpdateHibernationTimeoutResponses];

export type VmCreateSessionData = {
    /**
     * VM Create Session Request
     */
    body?: VmCreateSessionRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/sessions';
};

export type VmCreateSessionResponses = {
    /**
     * VM Create Session Response
     */
    200: VmCreateSessionResponse;
};

export type VmCreateSessionResponse2 = VmCreateSessionResponses[keyof VmCreateSessionResponses];

export type VmShutdownData = {
    /**
     * VM Shutdown Request
     */
    body?: VmShutdownRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/shutdown';
};

export type VmShutdownResponses = {
    /**
     * VM Shutdown Response
     */
    200: VmShutdownResponse;
};

export type VmShutdownResponse2 = VmShutdownResponses[keyof VmShutdownResponses];

export type VmUpdateSpecsData = {
    /**
     * VM Update Specs Request
     */
    body?: VmUpdateSpecsRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/specs';
};

export type VmUpdateSpecsResponses = {
    /**
     * VM Update Specs Response
     */
    200: VmUpdateSpecsResponse;
};

export type VmUpdateSpecsResponse2 = VmUpdateSpecsResponses[keyof VmUpdateSpecsResponses];

export type VmStartData = {
    /**
     * VM Start Request
     */
    body?: VmStartRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/start';
};

export type VmStartResponses = {
    /**
     * VM Start Response
     */
    200: VmStartResponse;
};

export type VmStartResponse2 = VmStartResponses[keyof VmStartResponses];

export type VmUpdateSpecs2Data = {
    /**
     * VM Update Specs Request
     */
    body?: VmUpdateSpecsRequest;
    path: {
        /**
         * Sandbox ID
         */
        id: string;
    };
    query?: never;
    url: '/vm/{id}/update_specs';
};

export type VmUpdateSpecs2Responses = {
    /**
     * VM Update Specs Response
     */
    200: VmUpdateSpecsResponse;
};

export type VmUpdateSpecs2Response = VmUpdateSpecs2Responses[keyof VmUpdateSpecs2Responses];