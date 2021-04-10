import "./CheckoutPage.scss";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import React from "react";
import StripeCheckoutButton from '../../components/stripe/StripeCheckout';
import { useSelector } from "react-redux";

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
      <div className='test-warning'>
        *Please use the following info to test the payment*
        <br/>
        4242 4242 4242 4242 Exp: 01/2023 CVV: 123
        
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartItemsTotal,
// });

export default CheckoutPage;
