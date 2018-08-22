# Scatter JS

[![npm version](https://badge.fury.io/js/scatter-js.svg)](https://badge.fury.io/js/scatter-js)

This is an importable javascript library that allows web applications to directly interface with Scatter Desktop.

## Installation

```js
// ES Module style
import ScatterJS from 'scatter-js/dist/scatter.esm';

// CommonJS style
import ScatterJS from 'scatter-js/dist/scatter.cjs';
 
//or
 
const ScatterJS = require('scatter-js/dist/scatter.<SUFFIX>');
```

You can also just drop the `scatter.min.js` bundle from the `dist/` directory here right into 
your html file and use it as a fully packed browser-ready package.

```html
<script src="path/to/scatter.min.js"></script>
```

#### CDN: 

Coming soon.

## ScatterJS Usage

This library catches both Scatter Desktop and Scatter Classic ( old extension ) depending on the
existence of either.

#### Making a connection

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


### Connection Options

```js
{
    // You may specify a maximum timeout for checking if a user has Scatter installed
    initTimeout:10000,
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


### Offloading the scatter object to state from nodejs/es/cjs

A lot of projects already integrated with Scatter expect `scatter` to be it's own object. 
You can easily mimic that by offloading the `ScatterJS.scatter` object to your previously saved state variables.

_( The reason this ScatterJS wrapper/holder exists is because if the extension is found it needs to overwrite the `.scatter` object 
 without losing the reference passed down the tree to your app. )_

```js
const scatter = ScatterJS.scatter;
 
// or state savers ( store ) such as redux or vuex 
setStateVariable(ScatterJS.scatter);
```


## Scatter ( eosjs / web3 ) Usage

See the [Developer Documentation](https://get-scatter.com/docs/dev/getting-started) to find out how to 
interact with Scatter and various blockchains.

Scatter sits on top of [eosjs](https://github.com/EOSIO/eosjs) or [web3](https://github.com/ethereum/web3.js/), 
so learn to use those depending on which blockchain you are interfacing with. 


## Switching from Extension only to Extension+Desktop support.

**Replace**
```js
document.addEventListener('scatterLoaded', () => {
    this.scatter = window.scatter;
    window.scatter = null;
});
```

**With ( for nodejs )**
```js
import ScatterJS from 'scatter-js/dist/scatter.esm';

ScatterJS.scatter.connect('YOUR_APP_NAME').then(connected => {
    if(connected){
        this.scatter = ScatterJS.scatter;
        window.scatter = null;
    }
});
```

**Or ( for html/js )**
```js
<script src="path/to/scatter.min.js"></script>

scatter.connect('YOUR_APP_NAME').then(connected => {
    if(connected){
        this.scatter = scatter;
        window.scatter = null;
    }
});
```


