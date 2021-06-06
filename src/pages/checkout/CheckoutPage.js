import {
  CheckoutHeaderBlock,
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  TotalContainer,
  WarningContainer,
} from "./Checkout.styles";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import React from "react";
import StripeCheckoutButton from "../../components/stripe/StripeCheckout";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (accumulator, b) => accumulator + b.quantity * b.price,
    0
  );
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>Total: ${total}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following info to test the payment*
        <br />
        4242 4242 4242 4242 Exp: 01/2023 CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartItemsTotal,
// });

export default CheckoutPage;
