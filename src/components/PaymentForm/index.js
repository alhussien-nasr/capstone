import React from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import "./styles.css";
import { Button } from "../Button";
export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = (e) => {
    e.preventDefaoult();
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <div className="payment-form-container">
      <h1>Credit Card Payment:</h1>
      <form className="payment-form">
        <CardElement />
        <Button ClassType="inverted">pay now</Button>
      </form>
    </div>
  );
};
