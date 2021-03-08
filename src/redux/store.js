import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducers from './rootReducers';

const middlewares = [logger];

 const store = createStore(rootReducers, applyMiddleware(...middlewares));

 const persistor = persistStore(store);

export  { store, persistor };
