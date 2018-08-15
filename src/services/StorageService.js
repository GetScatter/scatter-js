export default class StorageService {

    constructor(){}

    static setNonce(nonce){
        window.localStorage.setItem('nonce', nonce);
    };

    static getNonce() {
        return window.localStorage.getItem('nonce');
    }

    static removeNonce() {
        return window.localStorage.removeItem('nonce');
    }

    static setAppKey(nonce){
        window.localStorage.setItem('appkey', nonce);
    };

    static getAppKey() {
        return window.localStorage.getItem('appkey');
    }

    static removeAppKey() {
        return window.localStorage.removeItem('appkey');
    }
}