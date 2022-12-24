import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { categoriesSelector } from "../../store/categories/categoriesSelector";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const product = categoriesMap[category];
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} title={category} product={product} />
          ))}
      </div>
    </>
  );
};
