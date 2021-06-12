import cartReducer from "./cart.reducer";
import { combineReducers } from "redux";
import directoryReducer from './directory.reducers';
import { persistReducer } from 'redux-persist';
import shopReducer from './shopReducer';
import storage from 'redux-persist/lib/storage'
import userReducer from "./user.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer)