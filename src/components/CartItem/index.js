import React from "react";
import { useLocation } from "react-router-dom";
 import './styles.css'
export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem,'cart')
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} className='cart-img'/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
