import React from "react";
import "./style.css";
import { category } from "../../Data/category";
const CategoryCard = ({ item }) => {
  return (
    <button
      className={`CategoryCard-style`}
      onClick={() => console.log("clicked")}
    >
      <img src={item.imageUrl} />
      <div className="CategoryCard-title">
        <h3>{item.title}</h3>
        <p>SHOP NOW</p>
      </div>
    </button>
  );
};

export default CategoryCard;
