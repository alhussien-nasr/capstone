import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button";
import { CartItem } from "../CartItem";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};
