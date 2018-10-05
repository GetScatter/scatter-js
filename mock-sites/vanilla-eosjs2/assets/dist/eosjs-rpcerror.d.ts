/**
 * @module RPC-Error
 */
/** Holds detailed error information */
export declare class RpcError extends Error {
    /** Detailed error information */
    json: any;
    constructor(json: any);
}
