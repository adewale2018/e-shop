import "./CartDropdown";
import "./CartDropdown.scss";

import { useDispatch, useSelector } from "react-redux";

import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import React from "react";
import { toggleCartVisibility } from "../../redux/actions/cart/cart.actions";
import { useHistory } from "react-router-dom";
import { getCartItems } from '../../redux/selectors/cart.selector';

const CartDropdown = () => {
  const history = useHistory();
  
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span
            className="empty-message font-weight-bolder"
            style={{ color: "#F05B7F" }}
          >
            Your cart is empty now
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

/*

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
});



const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleCartVisibility()),
});

*/

// export default connect(mapStateToProps)(CartDropdown);

export default (CartDropdown);
