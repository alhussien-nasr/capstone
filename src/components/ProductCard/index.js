import React, { useContext } from "react";
import "./styles.css";
import { Button } from "../Button";
import { CartContext } from "../../context/CartContext";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => {
    addItemToCart(product);
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
