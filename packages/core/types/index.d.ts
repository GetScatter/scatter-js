import { Blockchains } from "./models/Blockchains";
import { Network } from "./models/Network";
import { Token } from "./models/Token"; 

import { Plugin } from "./plugins/Plugin";
import { PluginTypes } from "./plugins/PluginTypes";

export const EVENTS: {
    Disconnected: "dced";
	LoggedOut: "logout";
};

interface ConnectProps {
    network?: Network;
    linkTimeout?: number;
    allowHttp?: boolean;
}

class Scatter {
    identity: any;
    network: Network;
    
    loadPlugin(plugin: Plugin): void;
    connect(pluginName: string, options?: ConnectProps): Promise<boolean>;
}

class Holder {
    scatter: Scatter;

    Plugin = Plugin;
    PluginTypes: typeof PluginTypes;
    Blockchains: typeof Blockchains;
    Network = Network;
    Token = Token;
    SocketService = any;
    EVENTS: typeof EVENTS;
    WalletInterface = any;
    WALLET_METHODS: any;

    constructor(scatter: Scatter);

    plugins(...plugins: Plugin[]): void;

    connect(...params: Parameters<Index["connect"]>): ReturnType<Index["connect"]>;

    catchAll(...params: any[]): void
}

export {
    Plugin,
    PluginTypes,
    Blockchains,
    Network,
    EVENTS,
};

const holder: Holder;
export default holder;
