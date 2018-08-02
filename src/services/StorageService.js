import {apis} from '../util/BrowserApis';

export default class StorageService {

    constructor(){}

    static set(scatter){
        return new Promise(resolve => {
            console.log('api', apis, apis.storage);
            apis.storage.local.set({scatter}, () => {
                resolve(scatter);
            });
        })
    };

    static get() {
        return new Promise(resolve => {
            console.log('api', apis, apis.storage);
            apis.storage.local.get('scatter', (possible) => {
                (possible && Object.keys(possible).length && possible.hasOwnProperty('scatter'))
                    ? resolve(possible.scatter)
                    : resolve(null);
            });
        })
    }

    static remove(){
        return new Promise(resolve => {
            apis.storage.local.remove('scatter', () => {
                resolve();
            });
        })
    }
}