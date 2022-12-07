import React, { useContext } from "react";
import "./styles.css";

import { CategoriesContext } from "../../context/CategoriesContext";
import { ProductCard } from "../../components/ProductCard";
export const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <>
            <h1>{title}</h1>
            <div className="products-container">
              {categoriesMap[title].slice(0,4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        );
      })}
    </>
  );
};
