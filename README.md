# Scatter JS

#### Core

[![npm version](https://badge.fury.io/js/scatterjs-core.svg)](https://badge.fury.io/js/scatterjs-core) scatterjs-core

#### Blockchain Plugins

[![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs) scatterjs-plugin-eosjs

[![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs2.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs2) scatterjs-plugin-eosjs2

[![npm version](https://badge.fury.io/js/scatterjs-plugin-web3.svg)](https://badge.fury.io/js/scatterjs-plugin-web3) scatterjs-plugin-web3

[![npm version](https://badge.fury.io/js/scatterjs-plugin-tron.svg)](https://badge.fury.io/js/scatterjs-plugin-tron) scatterjs-plugin-tron

#### Wallet Plugins

[![npm version](https://badge.fury.io/js/scatterjs-plugin-lynx.svg)](https://badge.fury.io/js/scatterjs-plugin-lynx) scatterjs-plugin-lynx

## CDN
```
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-core.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs2.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-web3.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-tron.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-lynx.min.js"></script>
```


## Installation

To use ScatterJS you must have _at least_ the core.
From that point forward you can mix-match the plugins you require.

| blockchain library | installation command |
| ---------- | -------- |
| eosjs | `npm i -S scatterjs-core scatterjs-plugin-eosjs eosjs@16.0.9` |
| eosjs2 (@20+) | `npm i -S scatterjs-core scatterjs-plugin-eosjs2 eosjs@20.0.0-beta3` |
| tronweb | `npm i -S scatterjs-core scatterjs-plugin-tron tronweb` |
| web3 | `npm i -S scatterjs-core scatterjs-plugin-web3 web3` |



## Instantiation
As early as you can in your project, instantiate both ScatterJS and your selected plugins.

#### Nodejs
```js
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'

ScatterJS.plugins( new ScatterEOS() );
```

#### Vanilla
```html
<script src="scatterjs-core.min.js"></script>
<script src="scatterjs-plugin-eosjs.min.js"></script>

<script>
    ScatterJS.plugins( new ScatterEOS() );
</script>
```

#### Multiple Plugins

```js
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'
import ScatterTron from 'scatterjs-plugin-tron'
import ScatterLynx from 'scatterjs-plugin-lynx'

ScatterJS.plugins( new ScatterEOS(), new ScatterTron(), new ScatterLynx() );
```


## Build the network object
Networks tell Scatter which blockchain nodes you're going to be working with.

```js
const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
});
```


## Connect to an available wallet
Once you are connected you can then call API methods on `ScatterJS.scatter`

```js

ScatterJS.connect('MyAppName', {network}).then(connected => {
    if(!connected) return false;
    // ScatterJS.scatter.someMethod();
});
```

[You can see full API docs here](https://get-scatter.com/docs/api-reference)

## Getting Blockchain Accounts

Login with the network passed into `ScatterJS.connect`
```js
scatter.login().then(...);
```

Login with multiple networks
```js
scatter.login({accounts:[network1, network2]).then(...);
```

Logout
```js
scatter.logout().then(...);
```

**After a successful login, the "Identity" will be available at `scatter.identity`**.
If a user refreshes the page and has already logged in, the `scatter.identity` property will be auto-filled.

---------------------

## Using Blockchain Wrappers

Blockchain wrappers wrap the actual blockchain libraries (eosjs, tronweb, web3, etc) that you pass in.
That way you don't have to relearn any APIs or be forced to use any specific version.

eosjs
```js
import Eos from 'eosjs';
const eos = ScatterJS.scatter.eos(network, Eos, eosjsOptions);

const result = await eos.transfer(...);
```

eosjs2
```js
import {JsonRpc, Api} from 'eosjs'
const rpc = new JsonRpc(network.fullhost());
const eos = ScatterJS.scatter.eos(network, Api, {rpc}));

const result = await eos.transact({...});
```

tronweb
```js
import TronWeb from 'tronweb';
const httpProvider = new TronWeb.providers.HttpProvider(network.fullhost());
let tron = new TronWeb(httpProvider, httpProvider, network.fullhost());
tron.setDefaultBlock('latest');
tron = ScatterJS.scatter.trx(network, tron);

const result = await tron.trx.sendTransaction(...)
```

web3
```js
import Web3 from 'web3';
const web3 = ScatterJS.scatter.web3(network, Web3);

const result = await web3.eth.sendTransaction(...)
```

----------------




# Supported Wallets

## Automatically Supported Wallets
These wallets do not require you include any plugins. They run Scatter Protocols inside of
their wallet and mimic our existing APIs.

| blockchain | wallet |
| ---------- | -------- |
| EOSIO | TokenPocket |
| EOSIO | MEET.ONE |
| EOSIO | imToken |
| EOSIO | PocketEOS |

## Plugin Supported Wallets
These wallets have their own non-standardized APIs and require a plugin to support.
ScatterJS will mutate standardized requests for you into their required formats.

| blockchain | wallet | plugin |
| ---------- | -------- | -------|
| EOSIO | Lynx | `scatterjs-plugin-lynx` |



-------------

# NodeJS and babel/webpack issues.
If you're having trouble packaging or compiling your project you probably need to add a babel transpiler.
- `npm i -D @babel/runtime` <-- run this command and it should compile.

-------------


# What now?
Head over to the [Scatter Developer Documentation](https://get-scatter.com/docs/getting-started) to learn about
all the amazing things you can do with Scatter.

There's also a lot more information about proper setup in the
[Setting up for Web Applications](https://get-scatter.com/docs/setting-up-for-web-apps)
section which will help you get the most out of ScatterJS, and make sure
you aren't exposing your users to malicious non-Scatter plugins.


