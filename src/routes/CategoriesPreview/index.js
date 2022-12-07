import React, { useContext } from "react";
import "./styles.css";

import { CategoriesContext } from "../../context/CategoriesContext";
import { CategoryPreview } from "../../components/CategotyPreview";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} product={product} />;
      })}
    </>
  );
};
