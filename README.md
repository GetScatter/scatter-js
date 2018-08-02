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

## Setup

scatter-js requires that you supply an RSA key for local socket encryption to the desktop client. 
This key only allows your app to prove itself to Scatter Desktop. How you choose to save the key ( local storage, session, backend )
is up to you, but if it changes then it will re-prompt the user to accept connections from 
your application every time so it's best to serve the same key deterministically.

If you don't want to create your own key you can simply resolve the `getter` to null and it will 
create an RSA private key for you and return it into the `setter`.

If no getter/setter is provided then `scatter-js` will attempt to use `localStorage` to store the 
RSA key by default.

- **Getters and Setters must be promises!**

```js
        let KEY = ``;
        const getter = () => new Promise(resolve => resolve(KEY));
        const setter = (x) => new Promise(resolve => resolve(KEY = x));
        
        scatter.connect("Put_Your_App_Name_Here", getter, setter).then(connected => {
            if(!connected) {
                // User does not have Scatter Desktop or Classic installed. 
                return false;
            }
            
            // Use `scatter` normally now.
        });

```

##Catching Scatter Desktop and Scatter Classic

This library catches both Scatter Desktop and Scatter Classic ( old extension ) depending on the
existence of either.
All you have to do is call `scatter.connect(...)` and it will feed you back one or the other once 
it connects, or time out after 5 seconds and return false in the `connected` result.


##Scatter ( eosjs / web3 ) Usage

See the [Developer Documentation](https://get-scatter.com/docs/dev/getting-started) to find out how to 
interact with Scatter and various blockchains.

Scatter sits on top of [eosjs](https://github.com/EOSIO/eosjs) or [web3](https://github.com/ethereum/web3.js/), 
so learn to use those depending on which blockchain you are interfacing with. 