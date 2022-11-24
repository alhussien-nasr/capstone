import React from "react";
import "./styles.css";

export const FormInput = ({ label, id, ...props }) => {
  return (
    <div className="input-container">
      <input className="Input-style" id={id} {...props} />
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
