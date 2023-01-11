import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Spinner } from "../spinner";
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
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      {...props}
      className={`button-container ${ButtonTypes[ClassType]} `}
    >
      {isLoading ? <div className="btn-spinner" /> : children}
    </button>
  );
};
