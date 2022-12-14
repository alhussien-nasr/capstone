import React from "react";
import { useSelector } from "react-redux";
import { ChechoutItem } from "../../components/CheckoutItem";
import { PaymentForm } from "../../components/PaymentForm";
import "./styles.css";

export const Checkout = () => {
  const { cartItems, cartTotal } = useSelector((store) => store.cart);
  return (
    <div className="checkout-container">
      <div className="header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <ChechoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};
