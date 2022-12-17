import React from "react";

import { LogInForm } from "../../components/LogInForm";
import { SignUpForm } from "../../components/SignUpForm";
import "./styles.css";
export const LogIn = () => {
  return (
    <div className="log-in-container">
      <LogInForm />
      <SignUpForm />
    </div>
  );
};
