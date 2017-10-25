import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import logger from 'redux-logger'

const config = {
    key: 'root', // key is required
    storage, // storage is now required
}

const reducers = persistReducer(config, reducer)


export default function configureStore() {
    const store = createStore(
      reducers,
      applyMiddleware(
        thunk,
        logger
        )
    )
    const persistor = persistStore(store)
    return { persistor, store }
    
};