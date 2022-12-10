import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWhithGooglePopup,
  logInWIthEmailAndPassword,
} from "../../utils/firebase";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import "./styles.css";

const defultFormField = {
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export const LogInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defultFormField);

  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await logInWIthEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code, "err");
      if (error.code === "auth/wrong-password") {
        alert("incorrect password");
      } else if (error.code === "auth/user-not-found") {
        alert("no user associated with this email ");
      }
    }
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWhithGooglePopup();
      navigate("/");
    } catch (error) {
      console.log(error, "err");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form className="log-in-form-Container" onSubmit={handleSubmit}>
      <h2>i already have account </h2>
      <h4>sign in with your Email and password</h4>
      <FormInput
        id="log-in-email"
        label="Email"
        name="email"
        type={"text"}
        required
        onChange={handleChange}
        value={email}
      />
      <FormInput
        label="password"
        required
        id="log-in-password"
        name="password"
        type="password"
        onChange={handleChange}
        value={password}
      />
      <div className="log-in-btn">
        <Button type="submit">log in</Button>
        <Button type="button" ClassType={"google"} onClick={logGoogleUser}>
          google sign in
        </Button>
      </div>
    </form>
  );
};
