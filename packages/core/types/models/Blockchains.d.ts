export type Blockchain = 'eos' | 'eth' | 'trx';

export const Blockchains: {
    EOS: 'eos';
    ETH: 'eth';
    TRX: 'trx';
};

export const BlockchainsArray: Array<{ key: string; value: string; }>;