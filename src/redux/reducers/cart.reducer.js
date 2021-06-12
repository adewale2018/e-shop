import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "../utils/cart.utils";

import { CartActionTypes } from "../actions/cart/cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM: {
      const { payload } = action;
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    }
    case CartActionTypes.REMOVE_ITEM: {
      const { payload} = action;
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      }
    }
    case CartActionTypes.DELETE_ITEM: {
      const { payload } = action;
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
