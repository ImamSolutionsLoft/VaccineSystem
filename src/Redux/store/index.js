import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['AuthReducer'],
    whitelist: ['auth'],

};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
