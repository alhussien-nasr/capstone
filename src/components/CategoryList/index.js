import React from "react";
import CategoryCard from "../CategoryCard";
import "./style.css";
import { category } from "../../Data/category";

const CaregoryList = () => {
  return (
    <div className="Category-list-container">
      {category.map((item) => (
        <CategoryCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CaregoryList;
