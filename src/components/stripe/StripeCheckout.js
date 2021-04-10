import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HZ3QVH7TlpMJmGQ7vGoNONzcswIc7DznD1rB28UZ9deHNzkAlJfVKLHBnhNSTJoDfUwqo66S8B4aZuKnmjIHhsm00TrL3Qvuu";
    const onToken = token => {
      console.log(token);
      alert('Payment is successful...')
    }
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-SHOP"
      billingAddress
      shippingAddress
      image="https://images.unsplash.com/photo-1555406952-814eb7de8cde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
