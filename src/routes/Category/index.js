import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { CategoryPreview } from "../../components/CategotyPreview";
import { ProductCard } from "../../components/ProductCard";
import { CategoriesContext } from "../../context/CategoriesContext";

export const Category = () => {
  const { category } = useParams();
  console.log(category, "tile");
  const { categoriesMap } = useContext(CategoriesContext);
  const product = categoriesMap[category];
  return (
    <div className="category-container">
      {product &&
        product.map((product) => (
          <ProductCard key={product.id} title={category} product={product} />
        ))}
    </div>
  );
};