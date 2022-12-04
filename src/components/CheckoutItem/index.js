import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
export const ChechoutItem = ({ item }) => {
  const { increaseQty, decreaseQty, cartItems } =
    useContext(CartContext);
  const { id } = item;
  const product = cartItems.find((item) => item.id == id);
  console.log(product);
  const { name, price, imageUrl, quantity } = product;
  return (
    <div>
      <img src={imageUrl} />
      <span>{name}</span>
      <span>{price}</span>
      <button type="button" onClick={() => increaseQty(item)}>
        {"<"}
      </button>
      <span>{quantity}</span>
      <button onClick={() => decreaseQty(item)}>{">"}</button>
    </div>
  );
};
