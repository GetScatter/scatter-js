# Scatter JS

| type | version | package |
| ---- | ------- | ------- |
| core | [![npm version](https://badge.fury.io/js/scatterjs-core.svg)](https://badge.fury.io/js/scatterjs-core) | scatterjs-core |
| blockchain | [![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs) | scatterjs-plugin-eosjs |
| blockchain | [![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs2.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs2) | scatterjs-plugin-eosjs2 |
| blockchain | [![npm version](https://badge.fury.io/js/scatterjs-plugin-web3.svg)](https://badge.fury.io/js/scatterjs-plugin-web3) | scatterjs-plugin-web3 |
| blockchain | [![npm version](https://badge.fury.io/js/scatterjs-plugin-tron.svg)](https://badge.fury.io/js/scatterjs-plugin-tron) | scatterjs-plugin-tron |
| wallet | [![npm version](https://badge.fury.io/js/scatterjs-plugin-lynx.svg)](https://badge.fury.io/js/scatterjs-plugin-lynx) | scatterjs-plugin-lynx |


---------------



# Want some quick code?
Here's some boilerplates for you to just get starts quickly.

<details><summary>eosjs@16.0.9</summary>
<p>

Installation: `npm i -S scatterjs-core scatterjs-plugin-eosjs eosjs@16.0.9`
```js
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
});

ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    const eos = ScatterJS.eos(network, Eos);

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('eos');
        const options = {authorization:[`${account.name}@${account.authority}`]};
        eos.transfer(account.name, 'safetransfer', '0.0001 EOS', account.name, options).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
});
```

</p>
</details>

<details><summary>eosjs@20.0.0-beta3</summary>
<p>

Installation: `npm i -S scatterjs-core scatterjs-plugin-eosjs2 eosjs@20.0.0-beta3`
```js
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import {JsonRpc, Api} from 'eosjs';

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
});
const rpc = new JsonRpc(network.fullhost());

ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    const eos = ScatterJS.eos(network, Api, {rpc, beta3:true});

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('eos');

        eos.transact({
            actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor: account.name,
                    permission: account.authority,
                }],
                data: {
                    from: account.name,
                    to: 'safetransfer',
                    quantity: '0.0001 EOS',
                    memo: account.name,
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
});
```

</p>
</details>




<details><summary>tronweb</summary>
<p>

Installation: `npm i -S scatterjs-core scatterjs-plugin-tron tronweb`
```js
import ScatterJS from 'scatterjs-core';
import ScatterTron from 'scatterjs-plugin-tron';
import TronWeb from 'tronweb';

ScatterJS.plugins( new ScatterTron() );

const network = ScatterJS.Network.fromJson({
    blockchain:'tron',
    chainId:'1',
    host:'api.trongrid.io',
    port:443,
    protocol:'https'
});

const httpProvider = new TronWeb.providers.HttpProvider(network.fullhost());
let tron = new TronWeb(httpProvider, httpProvider, network.fullhost());
tron.setDefaultBlock('latest');

ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    tron = ScatterJS.trx(network, tron);

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('trx');
        tron.trx.sendTransaction('TX...', 100).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
});
```

</p>
</details>




<details><summary>web3</summary>
<p>

Installation: `npm i -S scatterjs-core scatterjs-plugin-web3 web3`
```js
import ScatterJS from 'scatterjs-core';
import ScatterETH from 'scatterjs-plugin-web3';
import Web3 from 'web3';

ScatterJS.plugins( new ScatterETH() );

const network = ScatterJS.Network.fromJson({
    blockchain:'eth',
    chainId:'1',
    host:'YOUR ETHEREUM NODE',
    port:443,
    protocol:'https'
});

ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    const web3 = ScatterJS.web3(network, Web3);

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('trx');
        web3.eth.sendTransaction({
            from: account.address,
            to: '0x...',
            value: '1000000000000000'
        }).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
});
```

</p>
</details>

----------------


<br/><br/>
# Supported Wallets

## Automatically Supported Wallets
These wallets do not require you include any plugins. They run Scatter Protocols inside of
their wallet and mimic our existing APIs.

*Does your wallet support Scatter Protocols? [Issue a Pull Request on the README.md and add it here.](https://github.com/GetScatter/scatter-js/edit/revamp/README.md)*

| dapp supported blockchains | platform | wallet | libs |
| ---------- | -------- | -------- | -------- |
| EOSIO, Tron, Ethereum | [Scatter Desktop](https://get-scatter.com/) | Desktop | eosjs@16.0.9, eosjs@20+, tronweb, web3 | 
| EOSIO, Ethereum | Scatter Extension | Desktop | eosjs@16.0.9, web3 |
| EOSIO | [TokenPocket](https://www.mytokenpocket.vip/) | Mobile | eosjs@16.0.9 |
| EOSIO | [MEET.ONE](https://meet.one/) | Mobile | eosjs@16.0.9 |
| EOSIO | [imToken](https://token.im/) | Mobile | eosjs@16.0.9 |
| EOSIO | [PocketEOS](https://pocketeos.com/) | Mobile | eosjs@16.0.9 |
| EOSIO | [MoreWallet](https://more.top/) | Mobile | eosjs@16.0.9 |
| EOSIO | [NOVAWallet](http://eosnova.io/) | Mobile | eosjs@16.0.9 |
| EOSIO | [Chaince Wallet](https://chaince.com/) | Mobile | eosjs@16.0.9 |
| EOSIO | [EOS LIVE](https://eos.live/) | Mobile | eosjs@16.0.9 |
| EOSIO | [Starteos](http://starteos.io/) | Mobile | eosjs@16.0.9, eosjs@20+ |

## Plugin Supported Wallets
These wallets require a plugin to support.
ScatterJS will mutate standardized blockchain library requests for you into their required formats.

| dapp supported blockchains | wallet | platform | plugin | libs |
| ---------- | -------- | -------| -------| -------|
| EOSIO | [Lynx](https://eoslynx.com/) | Mobile | `scatterjs-plugin-lynx` | eosjs@20+ |



<br/><br/>
# Installation

To use ScatterJS you must have _at least_ the core.
From that point forward you can mix-match the plugins you require.

| blockchain library | installation command |
| ---------- | -------- |
| eosjs | `npm i -S scatterjs-core scatterjs-plugin-eosjs eosjs@16.0.9` |
| eosjs2 (@20+) | `npm i -S scatterjs-core scatterjs-plugin-eosjs2 eosjs@20.0.0-beta3` |
| tronweb | `npm i -S scatterjs-core scatterjs-plugin-tron tronweb` |
| web3 | `npm i -S scatterjs-core scatterjs-plugin-web3 web3` |


### CDN
```
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-core.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs2.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-web3.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-tron.min.js"></script>
<script src="https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-lynx.min.js"></script>
```



<br/><br/>
# Instantiation
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


<br/><br/>
# Build the network object
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


<br/><br/>
# Connect to an available wallet
Once you are connected you can then call API methods on `ScatterJS`

```js

ScatterJS.connect('MyAppName', {network}).then(connected => {
    if(!connected) return false;
    // ScatterJS.someMethod();
});
```

[You can see full scatterjs-core API docs here](https://get-scatter.com/docs/api-reference)


<br/><br/>
# Getting Blockchain Accounts

Login with the network passed into `ScatterJS.connect`
```js
ScatterJS.login().then(...);
```

Login with multiple networks
```js
ScatterJS.login({accounts:[network1, network2]).then(...);
```

Logout
```js
ScatterJS.logout().then(...);
```

**After a successful login, the "Identity" will be available at `ScatterJS.identity`**.
If a user refreshes the page and has already logged in, the `ScatterJS.identity` property will be auto-filled.


<br/><br/>
# Get blockchain accounts from the identity
Because accounts are nested within the Identity there is an easy method for fetching them.

#### Using the helper
```js
const account = ScatterJS.account('eos')
// Result: {name:'...', authority:'active', publicKey:'...', blockchain:'eos', chainId:'...'}

const account = ScatterJS.account('eth')
// Result: {address:'...', blockchain:'eth', chainId:'1'}

const account = ScatterJS.account('trx')
// Result: {address:'...', blockchain:'trx', chainId:'1'}
```

#### From the Identity
```js
const account = ScatterJS.identity.accounts.find(x => {
    return x.blockchain === 'eos';
});
```

---------------------


<br/><br/>
# Using Blockchain Wrappers

Blockchain wrappers wrap the actual blockchain libraries (eosjs, tronweb, web3, etc) that you pass in.
That way you don't have to relearn any APIs or be forced to use any specific version.

**You can click on the libraries here below to go directly to their respective githubs**.
<br/>
<br/>

[eosjs@16.0.9 ( scatterjs-plugin-eosjs )](https://github.com/EOSIO/eosjs/tree/v16.0.9)
```js
import Eos from 'eosjs';
const eos = ScatterJS.eos(network, Eos, eosjsOptions);

const result = await eos.transfer(...);
```

<br/>

[eosjs@20.0.0-beta3 ( scatterjs-plugin-eosjs2 )](https://github.com/EOSIO/eosjs)
```js
import {JsonRpc, Api} from 'eosjs'
const rpc = new JsonRpc(network.fullhost());
const eos = ScatterJS.eos(network, Api, {rpc, beta3:true}));

const result = await eos.transact({...});
```

<br/>

[tronweb](https://github.com/tronprotocol/tron-web)
```js
import TronWeb from 'tronweb';
const httpProvider = new TronWeb.providers.HttpProvider(network.fullhost());
let tron = new TronWeb(httpProvider, httpProvider, network.fullhost());
tron.setDefaultBlock('latest');
tron = ScatterJS.trx(network, tron);

const result = await tron.trx.sendTransaction(...)
```

<br/>

[web3](https://github.com/ethereum/web3.js/)
```js
import Web3 from 'web3';
const web3 = ScatterJS.web3(network, Web3);

const result = await web3.eth.sendTransaction(...)
```


-------------


<br/><br/>
# NodeJS and babel/webpack issues.
If you're having trouble packaging or compiling your project you probably need to add a babel transpiler.
- `npm i -D @babel/runtime` <-- run this command and it should compile.

-------------

#### If you're using eosjs beta3
`const eos = scatter.eos(network, Api, { rpc, beta3:true })`


<br/><br/>
# What now?
Head over to the [Scatter Developer Documentation](https://get-scatter.com/docs/getting-started) to learn about
all the amazing things you can do with Scatter.

There's also a lot more information about proper setup in the
[Setting up for Web Applications](https://get-scatter.com/docs/setting-up-for-web-apps)
section which will help you get the most out of ScatterJS, and make sure
you aren't exposing your users to malicious non-Scatter plugins.



-------------





