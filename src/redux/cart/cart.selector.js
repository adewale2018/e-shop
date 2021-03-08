import { createSelector } from "reselect";

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