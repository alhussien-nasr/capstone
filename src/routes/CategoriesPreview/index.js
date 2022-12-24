import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import { CategoryPreview } from "../../components/CategotyPreview";
import { categoriesSelector } from "../../store/categories/categoriesSelector";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} product={product} />;
      })}
    </>
  );
};
