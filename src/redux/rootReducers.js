import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";
import directoryReducer from './directory/directory.reducers';
import { persistReducer } from 'redux-persist';
import shopReducer from './shop/shopReducer';
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user.reducer";

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