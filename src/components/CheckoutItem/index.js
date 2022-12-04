import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
export const ChechoutItem = ({ item }) => {
  const { increaseQty, decreaseQty, cartItems, deleteItem } =
    useContext(CartContext);
  const { id } = item;
  console.log(id, "id");
  const product = cartItems.find((item) => item.id == id);
  console.log(product);
  const { name, price, imageUrl, quantity } = product;
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} />
      <div className="checkout-item">
        <span>{name}</span>
        <span className="quantity">
          <button type="button" onClick={() => decreaseQty(item)}>
            {"<"}
          </button>
          <span>{quantity}</span>
          <button onClick={() => increaseQty(item)}>{">"}</button>
        </span>
        <span>{price}</span>
        <button onClick={() => deleteItem(id)}>x</button>
      </div>
    </div>
  );
};
