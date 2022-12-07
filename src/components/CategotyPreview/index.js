import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import "./styles.css";
export const CategoryPreview = ({ title, product }) => {
  return (
    <div key={title} className={"category-preview-container"}>
      <Link className="title" to={title}>
        <span>{title}</span>
      </Link>
      <div className="preview">
        {product.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
