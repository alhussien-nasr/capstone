import React from "react";
import "./styles.css";
import { Button } from "../Button";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button ClassType="inverted">ADD TO CARD</Button>
    </div>
  );
};
