import React from "react";
import "./styles.css";
import { Button } from "../Button";
import { addItemToCart } from "../../store/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button ClassType="inverted" onClick={addToCart}>
        ADD TO CARD
      </Button>
    </div>
  );
};
