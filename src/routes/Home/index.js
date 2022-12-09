import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { category } from "../../Data/category";
import "./styles.css";
import CaregoryList from "../../components/CategoryList";
const Home = () => {
  return (
    <div className="home-container">
      <CaregoryList />
    </div>
  );
};

export default Home;
