import "./CheckoutPage.scss";

import { connect, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import React from "react";
import { createStructuredSelector } from "reselect";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (accumulator, b) => accumulator + b.quantity * b.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
