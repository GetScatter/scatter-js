'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
let storage = {};
const getWindow = () => {
    if (typeof window !== 'undefined') return window;
    return {
        localStorage: {
            setItem: (key, val) => storage[key] = val,
            getItem: key => storage[key] || null,
            removeItem: key => delete storage[key]
        }
    };
};

class StorageService {

    constructor() {}

    static setAppKey(appkey) {
        getWindow().localStorage.setItem('appkey', appkey);
    }

    static getAppKey() {
        return getWindow().localStorage.getItem('appkey');
    }

    static removeAppKey() {
        return getWindow().localStorage.removeItem('appkey');
    }

    static setNonce(nonce) {
        getWindow().localStorage.setItem('nonce', nonce);
    }

    static getNonce() {
        return getWindow().localStorage.getItem('nonce');
    }

    static removeNonce() {
        return getWindow().localStorage.removeItem('nonce');
    }
}
exports.default = StorageService;