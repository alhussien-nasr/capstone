import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";

export const CartIcon = () => {
  const { dorpdown, setDropdown, cartCount } = useContext(CartContext);
  const toggleDropdown = () => {
    setDropdown(!dorpdown);
  };

  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
