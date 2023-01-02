import React from "react";
import "./styles.css";

const ButtonTypes = {
  google: "google-sign-in",
  inverted: "inverted",
};
export const Button = ({
  children,
  ClassType,
  onClick,
  classname,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`button-container ${ButtonTypes[ClassType]} `}
    >
      {children}
    </button>
  );
};
