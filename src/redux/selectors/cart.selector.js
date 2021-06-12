import { createSelector } from "reselect";



export const getCart = (store) => store.cart;

export const getCartItems = store => store.cart.cartItems;

export const getCartHidden = store => store.cart.hidden;

export const getCartItemsCount = store => store.cart.cartItems.reduce((accumulator, b) => accumulator + b.quantity, 0);

export const getCartItemsTotal = store => store.cart.cartItems.reduce((accumulator, b) => accumulator + b.quantity * b.price, 0);


const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulator, b) => accumulator + b.quantity, 0)
);

export const selectCartItemsTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, b) => accumulator + b.quantity * b.price, 0)
);