import React from "react";
import "./styles.css";

import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../CategoriesPreview";
import { Category } from "../Category";
export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
