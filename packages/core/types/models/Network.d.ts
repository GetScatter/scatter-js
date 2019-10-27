import { Blockchain } from "./Blockchains";
import { Token } from "./Token";

type NetworkProtocol = "http" | "https";

interface NetworkProps {
    name?: string;
    protocol: NetworkProtocol;
    host: string;
    port: number;
    blockchain: Blockchain;
    chainId: string;
    token?: Token;
}

class Network implements NetworkProps {
    name?: string;
    protocol: NetworkProtocol;
    host: string;
    port: number;
    blockchain: Blockchain;
    chainId: string;
    token?: Token;

    constructor(name?: string, protocol?: NetworkProtocol, host?: string, port: number, blockchain?: Blockchain , chainId?: string);

    static placeholder(): Network
    static fromJson(json: NetworkProps): Network

    fullhost(): string
    unique(): string
}