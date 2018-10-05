/**
 * @module API
 */
import { Abi, JsonRpc, PushTransactionArgs } from "./eosjs-jsonrpc";
import * as ser from "./eosjs-serialize";
/** Reexport `eosjs-serialize` */
export declare const serialize: typeof ser;
/** Arguments to `getRequiredKeys` */
export interface AuthorityProviderArgs {
    /** Transaction that needs to be signed */
    transaction: any;
    /** Public keys associated with the private keys that the `SignatureProvider` holds */
    availableKeys: string[];
}
/** Get subset of `availableKeys` needed to meet authorities in `transaction` */
export interface AuthorityProvider {
    /** Get subset of `availableKeys` needed to meet authorities in `transaction` */
    getRequiredKeys: (args: AuthorityProviderArgs) => Promise<string[]>;
}
export interface BinaryAbi {
    account_name: string;
    abi: Uint8Array;
}
/** Arguments to `sign` */
export interface SignatureProviderArgs {
    /** Chain transaction is for */
    chainId: string;
    /** Public keys associated with the private keys needed to sign the transaction */
    requiredKeys: string[];
    /** Transaction to sign */
    serializedTransaction: Uint8Array;
    /** ABIs for all contracts with actions included in `serializedTransaction` */
    abis: BinaryAbi[];
}
/** Signs transactions */
export interface SignatureProvider {
    /** Public keys associated with the private keys that the `SignatureProvider` holds */
    getAvailableKeys: () => Promise<string[]>;
    /** Sign a transaction */
    sign: (args: SignatureProviderArgs) => Promise<string[]>;
}
/** Holds a fetched abi */
export interface CachedAbi {
    /** abi in binary form */
    rawAbi: Uint8Array;
    /** abi in structured form */
    abi: Abi;
}
export declare class Api {
    /** Issues RPC calls */
    rpc: JsonRpc;
    /** Get subset of `availableKeys` needed to meet authorities in a `transaction` */
    authorityProvider: AuthorityProvider;
    /** Signs transactions */
    signatureProvider: SignatureProvider;
    /** Identifies chain */
    chainId: string;
    textEncoder: TextEncoder;
    textDecoder: TextDecoder;
    /** Converts abi files between binary and structured form (`abi.abi.json`) */
    abiTypes: Map<string, ser.Type>;
    /** Converts transactions between binary and structured form (`transaction.abi.json`) */
    transactionTypes: Map<string, ser.Type>;
    /** Holds information needed to serialize contract actions */
    contracts: Map<string, ser.Contract>;
    /** Fetched abis */
    cachedAbis: Map<string, CachedAbi>;
    /**
     * @param args
     *    * `rpc`: Issues RPC calls
     *    * `authorityProvider`: Get public keys needed to meet authorities in a transaction
     *    * `signatureProvider`: Signs transactions
     *    * `chainId`: Identifies chain
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    constructor(args: {
        rpc: JsonRpc;
        authorityProvider?: AuthorityProvider;
        signatureProvider: SignatureProvider;
        chainId: string;
        textEncoder?: TextEncoder;
        textDecoder?: TextDecoder;
    });
    /** Decodes an abi as Uint8Array into json. */
    rawAbiToJson(rawAbi: Uint8Array): Abi;
    /** Get abi in both binary and structured forms. Fetch when needed. */
    getCachedAbi(accountName: string, reload?: boolean): Promise<CachedAbi>;
    /** Get abi in structured form. Fetch when needed. */
    getAbi(accountName: string, reload?: boolean): Promise<Abi>;
    /** Get abis needed by a transaction */
    getTransactionAbis(transaction: any, reload?: boolean): Promise<BinaryAbi[]>;
    /** Get data needed to serialize actions in a contract */
    getContract(accountName: string, reload?: boolean): Promise<ser.Contract>;
    /** Convert `value` to binary form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    serialize(buffer: ser.SerialBuffer, type: string, value: any): void;
    /** Convert data in `buffer` to structured form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    deserialize(buffer: ser.SerialBuffer, type: string): any;
    /** Convert a transaction to binary */
    serializeTransaction(transaction: any): Uint8Array;
    /** Convert a transaction from binary. Leaves actions in hex. */
    deserializeTransaction(transaction: Uint8Array): any;
    /** Convert actions to hex */
    serializeActions(actions: ser.Action[]): Promise<ser.SerializedAction[]>;
    /** Convert actions from hex */
    deserializeActions(actions: ser.Action[]): Promise<ser.Action[]>;
    /** Convert a transaction from binary. Also deserializes actions. */
    deserializeTransactionWithActions(transaction: Uint8Array | string): Promise<any>;
    /**
     * Create and optionally broadcast a transaction.
     *
     * Named Parameters:
     *    * `broadcast`: broadcast this transaction?
     *    * If both `blocksBehind` and `expireSeconds` are present,
     *      then fetch the block which is `blocksBehind` behind head block,
     *      use it as a reference for TAPoS, and expire the transaction `expireSeconds` after that block's time.
     * @returns node response if `broadcast`, `{signatures, serializedTransaction}` if `!broadcast`
     */
    transact(transaction: any, { broadcast, blocksBehind, expireSeconds }?: {
        broadcast?: boolean;
        blocksBehind?: number;
        expireSeconds?: number;
    }): Promise<any>;
    /** Broadcast a signed transaction */
    pushSignedTransaction({ signatures, serializedTransaction }: PushTransactionArgs): Promise<any>;
    private hasRequiredTaposFields;
}
