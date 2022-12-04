import React from "react";
import { useLocation } from "react-router-dom";
import { ChechoutItem } from "../../components/CheckoutItem";
import "./styles.css";

export const Checkout = () => {
  const { state } = useLocation();
  return (
    <div>
      {state.map((item) => (
        <ChechoutItem item={item} />
      ))}
    </div>
  );
};
