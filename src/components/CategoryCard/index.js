import React from "react";
import "./style.css";
import { category } from "../../Data/category";
import { useNavigation } from "react-router-dom";
const CategoryCard = ({ item }) => {

  
  return (
    <button className={`CategoryCard-style`} onClick={() => {}}>
      <img src={item.imageUrl} />
      <div className="CategoryCard-title">
        <h3>{item.title}</h3>
        <p>SHOP NOW</p>
      </div>
    </button>
  );
};

export default CategoryCard;
