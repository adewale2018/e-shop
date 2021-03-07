import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import rootReducers from './rootReducers';

const middlewares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
