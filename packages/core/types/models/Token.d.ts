import { Blockchain } from "./Blockchains";

interface TokenProps {
    blockchain: Blockchain;
    contract: string;
    symbol: string;
    name?: string;
    decimals?: number;
}

export class Token implements TokenProps {
    blockchain: Blockchain;
    contract: string;
    symbol: string;
    name?: string;
    decimals?: number;

    constructor(blockchain?: Blockchain, contract?: string, symbol?: string, name?: string, decimals?: number);

    static placeholder(): Token
    static fromJson(json: TokenProps): Token
}