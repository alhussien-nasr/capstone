import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearItem,
  addItemToCart,
  removeItemfromCart,
} from "../../store/cart/cartActions";
import "./styles.css";
export const ChechoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity, id } = item;
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItem(cartItems, id));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemfromCart(cartItems, item));
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
