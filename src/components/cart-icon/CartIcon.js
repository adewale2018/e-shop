import "./CartIcon.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/11.2 shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartVisibility } from "../../redux/actions/cart/cart.actions";
import { getCartItemsCount } from '../../redux/selectors/cart.selector';

const CartIcon = () => {
  const ItemCounts = useSelector(getCartItemsCount);
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{ItemCounts}</span>
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
