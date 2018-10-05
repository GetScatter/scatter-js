/**
 * @module Numeric
 */
/** Is `bignum` a negative number? */
export declare function isNegative(bignum: Uint8Array): boolean;
/** Negate `bignum` */
export declare function negate(bignum: Uint8Array): void;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
export declare function decimalToBinary(size: number, s: string): Uint8Array;
/**
 * Convert a signed decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
export declare function signedDecimalToBinary(size: number, s: string): Uint8Array;
/**
 * Convert `bignum` to an unsigned decimal number
 * @param minDigits 0-pad result to this many digits
 */
export declare function binaryToDecimal(bignum: Uint8Array, minDigits?: number): string;
/**
 * Convert `bignum` to a signed decimal number
 * @param minDigits 0-pad result to this many digits
 */
export declare function signedBinaryToDecimal(bignum: Uint8Array, minDigits?: number): string;
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 * @param size bignum size (bytes)
 */
export declare function base58ToBinary(size: number, s: string): Uint8Array;
/**
 * Convert `bignum` to a base-58 number
 * @param minDigits 0-pad result to this many digits
 */
export declare function binaryToBase58(bignum: Uint8Array, minDigits?: number): string;
/** Convert an unsigned base-64 number in `s` to a bignum */
export declare function base64ToBinary(s: string): Uint8Array;
/** Key types this library supports */
export declare const enum KeyType {
    k1 = 0,
    r1 = 1
}
/** Public key data size, excluding type field */
export declare const publicKeyDataSize = 33;
/** Private key data size, excluding type field */
export declare const privateKeyDataSize = 32;
/** Signature data size, excluding type field */
export declare const signatureDataSize = 65;
/** Public key, private key, or signature in binary form */
export interface Key {
    type: KeyType;
    data: Uint8Array;
}
/** Convert key in `s` to binary form */
export declare function stringToPublicKey(s: string): Key;
/** Convert `key` to string (base-58) form */
export declare function publicKeyToString(key: Key): string;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
export declare function convertLegacyPublicKey(s: string): string;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
export declare function convertLegacyPublicKeys(keys: string[]): string[];
/** Convert key in `s` to binary form */
export declare function stringToPrivateKey(s: string): Key;
/** Convert `key` to string (base-58) form */
export declare function privateKeyToString(key: Key): string;
/** Convert key in `s` to binary form */
export declare function stringToSignature(s: string): Key;
/** Convert `signature` to string (base-58) form */
export declare function signatureToString(signature: Key): string;
