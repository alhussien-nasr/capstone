import React, { useContext } from "react";
import { CartDropdownContext } from "../../context/CartDropdownContext";
import { Button } from "../Button";
import { CartItem } from "../CartItem";
import "./styles.css";
export const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id}  cartItem={item}/>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
