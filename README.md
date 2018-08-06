# Scatter JS

This is an importable javascript library that allows web applications to directly interface with Scatter Desktop.

## Installation

```js
import ScatterJS from 'scatter-js'
 
//or
 
const ScatterJS = require('scatter-js');
```

You can also just drop the `scatter.min.js` bundle from the `dist/` directory here right into 
your html file use it from there.

```html
<script src="path/to/scatter.min.js"></script>
```

#### CDN: 

Coming soon.

## Setup

This library catches both Scatter Desktop and Scatter Classic ( old extension ) depending on the
existence of either.
All you have to do is call `scatter.connect(...)` and it will feed you back one or the other once 
it connects, or time out after 5 seconds and return false in the `connected` result.

```js
ScatterJS.scatter.connect("Put_Your_App_Name_Here").then(connected => {
    if(!connected) {
        // User does not have Scatter Desktop or Classic installed. 
        return false;
    }
    
    // Use `scatter` normally now.
    ScatterJS.scatter.getIdentity(...);
});
```

### Using your own RSA Keypairs

scatter-js requires that you supply an RSA key for local socket encryption to the desktop client. 
This key only allows your app to prove itself to Scatter Desktop. How you choose to save the key ( local storage, session, backend )
is up to you, but if it changes then it will not re-prompt the user to accept connections from 
your application, they will have to know to manually remove the app link and resync with your application.

It is best to serve this key deterministically.

If no getter/setter is provided then `scatter-js` will use `localStorage` to store a randomly generated 
RSA key by default.

**Getters and Setters must be promises!**

```js
let KEY = ``;
const keyGetter = () => new Promise(resolve => resolve(KEY));
const keySetter = (x) => new Promise(resolve => resolve(KEY = x));
 
ScatterJS.scatter.connect("Put_Your_App_Name_Here", {keyGetter, keySetter}).then(...);
```


### Other Options

```js
{
    keyGetter,
    keySetter,
    
    // You may specify a maximum timeout for checking if a user has Scatter installed
    // This defaults to 10 seconds
    initTimeout:10000,
    
    // You may also specify a maximum timeout for checking if a user has accepted the app link
    // inside of their Scatter desktop. This defaults to 30 seconds.
    linkTimeout:30000
}
```

 
### Don't forget to null out the window.scatter reference!

scatter-js binds to the `window` reference if it notices that an application has a `window` on global scope.
This is useful for `<script src="...">` imports for sites without nodejs/npm, but is also semi-dangerous.

If you don't null out the window reference then extensions will be able to catch it on the window's scope 
and pretend to send requests from your authorized application.

The best practice is to offload the scatter reference to your own global/state variable and nullify 
the window ref.

```js
setStateVariable(window.scatter);
 
window.scatter = null;
```


## Scatter ( eosjs / web3 ) Usage

See the [Developer Documentation](https://get-scatter.com/docs/dev/getting-started) to find out how to 
interact with Scatter and various blockchains.

Scatter sits on top of [eosjs](https://github.com/EOSIO/eosjs) or [web3](https://github.com/ethereum/web3.js/), 
so learn to use those depending on which blockchain you are interfacing with. 
