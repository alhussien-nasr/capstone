import React, { useContext } from "react";
import { ChechoutItem } from "../../components/CheckoutItem";
import { CartContext } from "../../context/CartContext";
import "./styles.css";

export const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <ChechoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};
