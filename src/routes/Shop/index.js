import React, { useContext } from "react";
import "./styles.css";

import { ProductsContext } from "../../context/ProductContext";
import { ProductCard } from "../../components/ProductCard";
export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
