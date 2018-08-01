# Scatter JS

This is an importable javascript library that allows web applications to directly interface with Scatter Desktop.

## Installation

```js
import scatter from 'scatter-js'
 
//or
 
const scatter = require('scatter-js');
```

You can also just drop the `scatter.min.js` bundle from the `dist/` directory here right into 
your html file use it from there.

```html
<script src="path/to/scatter.min.js"></script>
```

#### CDN: 

Coming soon.

## Usage

Setting this up is easy. 

```js
        let KEY = ``;
 
        // This should be some getter for a private pairing key.
        // You'll probably want to store this in a cookie or localstorage
        // or perhaps something more secure as it validates that requests 
        // are coming from your application
        function getter(){
            return new Promise(resolve => resolve(KEY));
        }
 
        // This should be some setter if you are not pre-generating a 
        // RSA key used for the local socket's encryption. 
        // If you provide a `null` key from the getter initially this 
        // library will generate an RSA key for you.
        function setter(x){
            return new Promise(resolve => resolve(KEY = x));
        }
 
        // Creates a connection to Scatter Desktop and will prompt the user 
        // to authorize your application from within their Scatter.
        scatter.connect("TestPage", getter, setter).then(connected => {
            // Use `scatter` normally now.
        })

```

See the [Developer Documentation](https://get-scatter.com/docs/dev/getting-started) to find out how to 
interact with Scatter and various blockchains.

Scatter sits on top of [eosjs](https://github.com/EOSIO/eosjs) or [web3](https://github.com/ethereum/web3.js/), 
so learn to use those depending on which blockchain you are interfacing with.