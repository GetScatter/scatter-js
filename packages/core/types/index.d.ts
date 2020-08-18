import { Blockchains, Blockchain } from "./models/Blockchains";
import { Network } from "./models/Network";
import { Token } from "./models/Token"; 

import { Plugin } from "./plugins/Plugin";
import { PluginTypes } from "./plugins/PluginTypes";

export const EVENTS: {
    Disconnected: "dced";
	LoggedOut: "logout";
};

/**
 * Optional fields that can be requested when asking for a RIDL Identity.
 *
 * @see https://get-scatter.com/docs/requirable-fields
 */
export interface RequireableFields {
    accounts?: Network[];
    personal?: Array<"firstname" | "lastname" | "email" | "birthdate">;
    location?: Array<"phone" | "address" | "city" | "state" | "country" | "zipcode">;
}

/**
 * Reputation and Identity Layer (RIDL), or Identity for short.
 *
 * @see https://ridl.get-scatter.com
 */
export interface Identity {
    accounts: Account[];
    hash: string;
    publicKey: string;

    /**
     * RIDL Identity name.
     *
     * Not to be confused with account or personal name.
     */
    name: string;
    personal?: {
      firstname?: string;
      lastname?: string;
      email?: string;
      birthdate?: string;
    };
    location?: {
      phone?: string;
      address?: string;
      city?: string;
      state?: string;
      country?: string;
      zipcode?: string;
    }
}

export interface Account {
    name: string;
    publicKey: string;
    blockchain: Blockchain;
    isHardware: boolean;
    authority: string;
    chainId: string;
}

interface ConnectProps {
    network?: Network;
    linkTimeout?: number;
    allowHttp?: boolean;
}

/**
 * The actual implementation has a `Holder` instance wrapped with a Proxy
 * that will effectively expose the same methods of `Index` (for convenience
 * renamed `Scatter` in these TypeScript declarations).
 * 
 * To not duplicate the same entries and to mimic that same end behavior, the
 * shared methods will be part of this base class while `Holder` and `Scatter`
 * will extend it.
 */
declare class ScatterBase {
    disconnect(): boolean;
    isConnected: () => boolean;
    isPaired: () => boolean;
    login: () => Promise<Identity>;
    logout: () => Promise<boolean>;
    getVersion: () => Promise<string>;
    getIdentity: (requireableFields?: RequireableFields) => Promise<Identity>;
    getAllAccountsFor: (requireableFields?: RequireableFields) => Promise<Identity>;
    getIdentityFromPermissions: () => Promise<Identity>;
    forgetIdentity: () => Promise<boolean>;
    updateIdentity: (fields: { name: string, kyc?: any }) => Promise<boolean>;
    authenticate: (nonce: any, data?: any, publicKey?: string) => Promise<any>;
    getArbitrarySignature: (publicKey: string, data: string) => Promise<string>;
    getPublicKey: (blockchain: Blockchain) => Promise<string>;
    linkAccount: (account: any, network: any) => Promise<any>;
    hasAccountFor: (network: Network) => Promise<boolean>;
    suggestNetwork: (network: Network) => Promise<boolean>;
    requestTransfer: (network: Network, to: string, amount: string, options?: {}) => Promise<any>;

    /**
     * Returns the RIDL Identity avatar image, if available.
     *
     * If available, the returned string will be a base64 encoded image asset.
     */
    getAvatar: () => Promise<string | undefined>;
    requestSignature: (payload: any) => Promise<string>;
    createTransaction: (
      blockchain: Blockchain,
      actions: any,
      account: Account,
      network: Network
    ) => Promise<any>;
    addToken: (token: Token, network: Network) => Promise<any>;
}

/**
 * Originally called `Index` in implementation.
 */
declare class Scatter extends ScatterBase {
    identity: any;
    network: Network;
    
    loadPlugin(plugin: Plugin): void;
    connect(pluginName: string, options?: ConnectProps): Promise<boolean>;
}

declare class Holder extends ScatterBase {
    scatter: Scatter;

    Plugin: typeof Plugin;
    PluginTypes: typeof PluginTypes;
    Blockchains: typeof Blockchains;
    Network: typeof Network;
    Token: typeof Token;
    SocketService: any;
    EVENTS: typeof EVENTS;
    WalletInterface: any;
    WALLET_METHODS: any;

    constructor(scatter: Scatter);

    plugins(...plugins: Plugin[]): void;

    connect(...params: Parameters<Scatter["connect"]>): ReturnType<Scatter["connect"]>;

    catchAll(...params: any[]): void
}

export {
    Plugin,
    PluginTypes,
    Blockchains,
    Network,
};

declare const holder: Holder;
export default holder;
