import {apis} from '../util/BrowserApis';

export default class StorageService {

    constructor(){}

    static set(scatter){
        return new Promise(resolve => {
            window.localStorage.setItem('scatter', scatter);
        })
    };

    static get() {
        return new Promise(resolve => {
            resolve(window.localStorage.getItem('scatter'));
            // apis.storage.local.get('scatter', (possible) => {
            //     (possible && Object.keys(possible).length && possible.hasOwnProperty('scatter'))
            //         ? resolve(possible.scatter)
            //         : resolve(null);
            // });
        })
    }
}