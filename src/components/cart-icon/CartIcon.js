import "./CartIcon.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/11.2 shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const newItemCounts = useSelector(state => state.cart.cartItems.reduce((accum, b) => accum + b.quantity, 0));
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{newItemCounts}</span>
    </div>
  );
};

/* 
const mapStateToProps = createStructuredSelector ({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartVisibility()),
});

*/
export default CartIcon;
