import {decorate, observable, computed, action, runInAction} from 'mobx';
import {AsyncStorage} from 'react-native';

class Store {
    // observalbe -> decorate 사용
    text = 'init';
    data = null; // to save image response
    recents =[];

    // actions
    updateText = (text) => {
        this.text = text;
        console.log(text);
    };
    
    setData = (data) => {
        this.data = data;
        console.log(data);
    };

    clearData = () => {
        this.data = [];
        console.debug('cleared data ');
    };

    setRecents = (val) => {
        this.recents = val;
        console.debug('[recents] : '+this.favorites);
    };

    clearFavorites = () => {
        this.favorites = [];
        console.debug('cleared recents : ');
    };


    addToRecents = (image) => {
        this.recents.push(image);
        this.data = null;
        this.text = '';
        console.debug('[favor #]:'+ this.recents.length);
        _saveDataObj('Async_recents_1', this.recents);
    };

    _saveDataObj = async (key, obj)=>{
        console.debug('Data is saved !!');
        try{
            await AsyncStorage.setItem( key, JSON.stringify(obj) );
            console.debug('Saved data to (' + key + ',' + JSON.stringify(obj) + ')' );
        } catch(error){
            console.warn('[Error] AsyncStorage write errors occur..!' + error);
        }
    };

    _readData = async (key) => {
        try{
            const val = await AsyncStorage.getItem(key);
            if(val!==null) {
                console.debug(' Read data : ' + val);
                runInAction( ()=>{
                    local_favorites= JSON.parse(val);
                }
                );
            }
        } catch(error) {
            console.warn('[Error] AsyncStorage read errors occur..!' + error);
        }
    };

}

decorate(Store, {
    text: observable,
    data: observable,
    recents: observable,
    updateText: action,
    setData: action,
    clearData: action,
    setRecents: action,
    clearFavorites: action,
    addToFavorite: action,
});

export default new Store();



