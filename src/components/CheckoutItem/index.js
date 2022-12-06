import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
export const ChechoutItem = ({ item }) => {
  const { addItemToCart, removeItemfromCart, clearItem } =
    useContext(CartContext);

  const { name, price, imageUrl, quantity, id } = item;
  const clearItemHandler = () => clearItem(id);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemfromCart(item);
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} />
      <span className="name">{name}</span>
      <span className="quantity">
        <button type="button" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span>{quantity}</span>
        <button onClick={addItemHandler}> &#10095;</button>
      </span>
      <span className="price">{price}</span>
      <button onClick={clearItemHandler}>&#10005;</button>
    </div>
  );
};
