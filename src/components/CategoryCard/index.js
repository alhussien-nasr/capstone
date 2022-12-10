import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const CategoryCard = ({ item }) => {
  return (
    <Link className={`CategoryCard-style`} to={item.route}>
      <img src={item.imageUrl} />
      <div className="CategoryCard-title">
        <h3>{item.title}</h3>
        <p>SHOP NOW</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
