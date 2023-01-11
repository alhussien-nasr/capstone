import React, { useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import "./styles.css";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { Spinner } from "../spinner";
export const PaymentForm = () => {
  const cartTotal = useSelector((store) => store.cart.cartTotal);
  const currentUser = useSelector((store) => store.user.currentUser);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    const res = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = res;
    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    setLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <h1>Credit Card Payment:</h1>
      <form className="payment-form" onSubmit={paymentHandler}>
        <CardElement></CardElement>
        <Button isLoading={loading} ClassType="inverted">pay now</Button>
      </form>
    </div>
  );
};
