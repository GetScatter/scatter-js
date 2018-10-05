import "babel-polyfill";
import { Api } from "./eosjs-api";
import * as Rpc from "./eosjs-jsonrpc";
import SignatureProvider from "./eosjs-jssig";
import * as Serialize from "./eosjs-serialize";
export { Api, SignatureProvider, Rpc, Serialize };
declare const _default: {
    Api: typeof Api;
    SignatureProvider: typeof SignatureProvider;
    Rpc: typeof Rpc;
    Serialize: typeof Serialize;
};
export default _default;
