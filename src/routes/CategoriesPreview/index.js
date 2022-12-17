import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import { CategoryPreview } from "../../components/CategotyPreview";

export const CategoriesPreview = () => {
  const { categoriesMap } = useSelector((state) => state.categories);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} product={product} />;
      })}
    </>
  );
};
