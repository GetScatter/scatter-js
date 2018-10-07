# Scatter JS


[![npm version](https://badge.fury.io/js/scatter-js.svg)](https://badge.fury.io/js/scatter-js) scatter-js

## [Click Here for old scatter-js version](https://github.com/GetScatter/scatter-js/tree/2.5.1).



[![npm version](https://badge.fury.io/js/scatterjs-core.svg)](https://badge.fury.io/js/scatterjs-core) scatterjs-core


[![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs) scatterjs-plugin-eosjs


[![npm version](https://badge.fury.io/js/scatterjs-plugin-eosjs.svg)](https://badge.fury.io/js/scatterjs-plugin-eosjs2) scatterjs-plugin-eosjs2


[![npm version](https://badge.fury.io/js/scatterjs-plugin-web3.svg)](https://badge.fury.io/js/scatterjs-plugin-web3) scatterjs-plugin-web3


[![npm version](https://badge.fury.io/js/scatterjs-plugin-web3.svg)](https://badge.fury.io/js/scatterjs-plugin-tron) scatterjs-plugin-tron


## Installation

To use ScatterJS you must have _at least_ the core.
You can also use Scatter without any blockchain support
by simply importing only the core without any blockchain specific
plugins.

This is great for sites that want to authenticate with users in a
decentralized way, but don't need any blockchain functionality.

```js
npm i -S scatterjs-core
```

### NodeJS and babel/webpack.
If you're having trouble packaging or compiling your project you probably need to add a babel transpiler.
- `npm i -D @babel/runtime` <-- run this command and it should compile.

### Plugins
To keep this library small and focused only on the blockchains you want to use
you can import each blockchain separately. The blockchains you don't import
can't be used.

#### EOSIO
```
npm i -S scatterjs-plugin-eosjs
// OR
npm i -S scatterjs-plugin-eosjs2
```

#### Ethereum
```
npm i -S scatterjs-plugin-web3
```

#### Tron
```
npm i -S scatterjs-plugin-tron
```

-------

The same works with `yarn` as well if you prefer to use that.
```
yarn link scatterjs-core
yarn link scatterjs-plugin-eosjs
```


## Importing ScatterJS into your project.
Now that you have scatterjs-core and a plugin of your choosing you
can go ahead and import it into your project.

You should be doing this early in your application, somewhere like
your main.js or app.js, and not inside sub-pages.

Let's take `eosjs` as an example.

```js
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'

ScatterJS.plugins( new ScatterEOS() );
```


## ScatterJS Usage

This library catches Scatter Desktop, Scatter Mobile and Scatter Classic ( extension ).
You only need to write code once, and you will instantly support any Scatter the user has.


#### Making a connection

```js
// Optional!
const connectionOptions = {initTimeout:10000}

ScatterJS.scatter.connect("Put_Your_App_Name_Here", connectionOptions).then(connected => {
    if(!connected) {
        // User does not have Scatter installed/unlocked.
        return false;
    }
    
    // Use `scatter` normally now.
    ScatterJS.scatter.getIdentity(...);
});
```


#### Using a signature provider ( plugin )
You can instantiate most plugins in two ways.

```js
// Using a proxy wrapper
const eos = ScatterJS.scatter.eos(network, Eos, eosjsOptions);

// Or using a hook provider.
const eos = Eos({httpEndpoint:'', signatureProvider:ScatterJS.scatter.eosHook(network)});
```



# What now?
Head over to the [Scatter Developer Documentation](https://get-scatter.com/docs/getting-started) to learn about
all the amazing things you can do with Scatter.

There's also a lot more information about proper setup in the
[Setting up for Web Applications](https://get-scatter.com/docs/dev/setting-up-for-web-apps)
section which will help you get the most out of ScatterJS, and make sure
you aren't exposing your users to malicious non-Scatter plugins.
