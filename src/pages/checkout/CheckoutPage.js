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
import { getCartItemsTotal, getCartItems } from '../../redux/selectors/cart.selector';

const CheckoutPage = () => {
  const total = useSelector(getCartItemsTotal);
  const cartItems = useSelector(getCartItems);

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
