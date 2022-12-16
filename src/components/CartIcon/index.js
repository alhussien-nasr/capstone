import React from "react";
import "./styles.css";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { toggleDropdown } from "../../store/cart/cartActions";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export const CartIcon = () => {
  const {cartCount}=useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(toggleDropdown());
  };
  return (
    <div className="cart-icon-container" onClick={clickHandler}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
