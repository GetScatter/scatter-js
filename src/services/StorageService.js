export default class StorageService {

    constructor(){}

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