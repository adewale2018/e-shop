import "./CheckoutItem.scss";

import { addItem, deleteItem, removeItem } from "../../redux/actions/cart/cart.actions";

import React from "react";
import { useDispatch } from "react-redux";

const CheckoutItem = (props) => {
  const { cartItem: { id, name, quantity, price, imageUrl }} = props;
  const{cartItem} = props;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(deleteItem(cartItem))}>&#60;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#62;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(id))}>
        &#9747;
      </div>
    </div>
  );
};

export default CheckoutItem;
