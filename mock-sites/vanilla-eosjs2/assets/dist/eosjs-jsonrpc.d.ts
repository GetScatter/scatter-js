/**
 * @module JSON-RPC
 */
import { AuthorityProvider, AuthorityProviderArgs } from "./eosjs-api";
/** Structured format for abis */
export interface Abi {
    version: string;
    types: Array<{
        new_type_name: string;
        type: string;
    }>;
    structs: Array<{
        name: string;
        base: string;
        fields: Array<{
            name: string;
            type: string;
        }>;
    }>;
    actions: Array<{
        name: string;
        type: string;
        ricardian_contract: string;
    }>;
    tables: Array<{
        name: string;
        type: string;
        index_type: string;
        key_names: string[];
        key_types: string[];
    }>;
    ricardian_clauses: Array<{
        id: string;
        body: string;
    }>;
    error_messages: Array<{
        error_code: string;
        error_msg: string;
    }>;
    abi_extensions: Array<{
        tag: number;
        value: string;
    }>;
    variants?: Array<{
        name: string;
        types: string[];
    }>;
}
/** Return value of `/v1/chain/get_abi` */
export interface GetAbiResult {
    account_name: string;
    abi: Abi;
}
/** Subset of `GetBlockResult` needed to calculate TAPoS fields in transactions */
export interface BlockTaposInfo {
    timestamp: string;
    block_num: number;
    ref_block_prefix: number;
}
/** Return value of `/v1/chain/get_block` */
export interface GetBlockResult {
    timestamp: string;
    producer: string;
    confirmed: number;
    previous: string;
    transaction_mroot: string;
    action_mroot: string;
    schedule_version: number;
    producer_signature: string;
    id: string;
    block_num: number;
    ref_block_prefix: number;
}
/** Return value of `/v1/chain/get_code` */
export interface GetCodeResult {
    account_name: string;
    code_hash: string;
    wast: string;
    wasm: string;
    abi: Abi;
}
/** Return value of `/v1/chain/get_info` */
export interface GetInfoResult {
    server_version: string;
    chain_id: string;
    head_block_num: number;
    last_irreversible_block_num: number;
    last_irreversible_block_id: string;
    head_block_id: string;
    head_block_time: string;
    head_block_producer: string;
    virtual_block_cpu_limit: number;
    virtual_block_net_limit: number;
    block_cpu_limit: number;
    block_net_limit: number;
}
/** Return value of `/v1/chain/get_raw_code_and_abi` */
export interface GetRawCodeAndAbiResult {
    account_name: string;
    wasm: string;
    abi: string;
}
/** Arguments for `push_transaction` */
export interface PushTransactionArgs {
    signatures: string[];
    serializedTransaction: Uint8Array;
}
/** Make RPC calls */
export declare class JsonRpc implements AuthorityProvider {
    endpoint: string;
    fetchBuiltin: (input?: Request | string, init?: RequestInit) => Promise<Response>;
    /**
     * @param args
     *    * `fetch`:
     *      * browsers: leave `null` or `undefined`
     *      * node: provide an implementation
     */
    constructor(endpoint: string, args?: {
        fetch?: (input?: string | Request, init?: RequestInit) => Promise<Response>;
    });
    /** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
    fetch(path: string, body: any): Promise<any>;
    /** Raw call to `/v1/chain/get_abi` */
    get_abi(account_name: string): Promise<GetAbiResult>;
    /** Raw call to `/v1/chain/get_account` */
    get_account(account_name: string): Promise<any>;
    /** Raw call to `/v1/chain/get_block_header_state` */
    get_block_header_state(block_num_or_id: number | string): Promise<any>;
    /** Raw call to `/v1/chain/get_block` */
    get_block(block_num_or_id: number | string): Promise<GetBlockResult>;
    /** Raw call to `/v1/chain/get_code` */
    get_code(account_name: string): Promise<GetCodeResult>;
    /** Raw call to `/v1/chain/get_currency_balance` */
    get_currency_balance(code: string, account: string, symbol?: string): Promise<any>;
    /** Raw call to `/v1/chain/get_currency_stats` */
    get_currency_stats(code: string, symbol: string): Promise<any>;
    /** Raw call to `/v1/chain/get_info` */
    get_info(): Promise<GetInfoResult>;
    /** Raw call to `/v1/chain/get_producer_schedule` */
    get_producer_schedule(): Promise<any>;
    /** Raw call to `/v1/chain/get_producers` */
    get_producers(json?: boolean, lower_bound?: string, limit?: number): Promise<any>;
    /** Raw call to `/v1/chain/get_raw_code_and_abi` */
    get_raw_code_and_abi(account_name: string): Promise<GetRawCodeAndAbiResult>;
    /** Raw call to `/v1/chain/get_table_rows` */
    get_table_rows({ json, code, scope, table, table_key, lower_bound, upper_bound, limit }: any): Promise<any>;
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    getRequiredKeys(args: AuthorityProviderArgs): Promise<string[]>;
    /** Push a serialized transaction */
    push_transaction({ signatures, serializedTransaction }: PushTransactionArgs): Promise<any>;
    /** Raw call to `/v1/db_size/get` */
    db_size_get(): Promise<any>;
    /** Raw call to `/v1/history/get_actions` */
    history_get_actions(account_name: string, pos?: number, offset?: number): Promise<any>;
    /** Raw call to `/v1/history/get_transaction` */
    history_get_transaction(id: string, block_num_hint?: number): Promise<any>;
    /** Raw call to `/v1/history/get_key_accounts` */
    history_get_key_accounts(public_key: string): Promise<any>;
    /** Raw call to `/v1/history/get_controlled_accounts` */
    history_get_controlled_accounts(controlling_account: string): Promise<any>;
}
