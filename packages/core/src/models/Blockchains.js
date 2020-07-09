
export const Blockchains = {
    EOS:'eos',
    ETH:'eth',
    TRX:'trx',
    CYBER:'cyber',
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));