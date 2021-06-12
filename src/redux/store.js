import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducers from './reducers/rootReducers';

const middlewares = [];
if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

 const store = createStore(rootReducers, applyMiddleware(...middlewares));

 const persistor = persistStore(store);

export  { store, persistor };
