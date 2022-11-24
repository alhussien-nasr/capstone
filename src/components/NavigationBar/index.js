import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./styles.css";

const NavigationBar = () => {
  return (
    <>
      <div className="NavigationBar-container">
        <Link className="Link" to="">
        <Crown className="crown"  />
        </Link>
        <Link className="Link" to="/LogIn">
          signin
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
