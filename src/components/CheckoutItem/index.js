import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
export const ChechoutItem = ({ item }) => {
  const { addItemToCart, removeItemfromCart, cartItems, deleteItem } =
    useContext(CartContext);

  const { id } = item;
  console.log(id, "id");
  const product = cartItems.find((item) => item.id == id);
  console.log(product);
  const { name, price, imageUrl, quantity } = product;
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} />
      <span className="name">{name}</span>
      <span className="quantity">
        <button type="button" onClick={() => removeItemfromCart(item)}>
          {"<"}
        </button>
        <span>{quantity}</span>
        <button onClick={() => addItemToCart(item)}>{">"}</button>
      </span>
      <span className="price">{price}</span>
      <button onClick={() => deleteItem(id)}>x</button>
    </div>
  );
};
