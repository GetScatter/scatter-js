/**
 * @module JS-Sig
 */
import { SignatureProvider, SignatureProviderArgs } from "./eosjs-api";
/** Signs transactions using in-process private keys */
export default class JsSignatureProvider implements SignatureProvider {
    /** map public to private keys */
    keys: Map<string, string>;
    /** public keys */
    availableKeys: string[];
    /** @param privateKeys private keys to sign with */
    constructor(privateKeys: string[]);
    /** Public keys associated with the private keys that the `SignatureProvider` holds */
    getAvailableKeys(): Promise<string[]>;
    /** Sign a transaction */
    sign({ chainId, requiredKeys, serializedTransaction }: SignatureProviderArgs): Promise<any[]>;
}
