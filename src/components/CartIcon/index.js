import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartDropdown } from "../CartDropdown";
import { CartDropdownContext } from "../../context/CartDropdownContext";

export const CartIcon = () => {
  const { dorpdown, setDropdown } = useContext(CartDropdownContext);

  const toggleDropdown = () => {
    setDropdown(!dorpdown);
  };
  
  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
