import React, { useContext } from "react";

import { LogInForm } from "../../components/LogInForm";
import { SignUpForm } from "../../components/SignUpForm";
import "./styles.css";
import { userContext } from "../../context/UserContext";
export const LogIn = () => {
  const { currentUser } = useContext(userContext);
  console.log(currentUser, "currentUser");
  return (
    <div className="log-in-container">
      <LogInForm />
      <SignUpForm />
    </div>
  );
};
