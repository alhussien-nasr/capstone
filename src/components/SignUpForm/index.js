import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUser,
} from "../../utils/firebase";
import { FormInput } from "../FormInput";
import "./styles.css";

const defultFormField = {
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defultFormField);

  const { displayname, email, password, confirmpassword } = formFields;

  const handleSubmit = async () => {
    if (password == confirmpassword) {
      try {
        const snapshot = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        const { uid } = snapshot;
        createUser({ uid, displayname, email });
        setFormFields(defultFormField);
      } catch (error) {
        console.log("err", error);
        if (error.code == "auth/email-already-in-use")
          alert("email already in use");
      }
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="Sign-up-Container">
      <form className="log-in-form-Container">
        <h2>i already have account </h2>
        <h4>sign in with your Email and password</h4>
        <FormInput
          id="log-in-email"
          label="Email"
          name="email"
          className="Input-style"
          required
          type={"text"}
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="password"
          id="log-in-password"
          name="password"
          className="Input-style"
          required
          type={"text"}
          onChange={handleChange}
          value={password}
        />
      </form>

      <form onSubmit={handleSubmit} className="sign-up-form-Container">
        <h2>i do not have account </h2>
        <h4>sign in with your Email and password</h4>

        <FormInput
          label="name"
          htmlFor="DisplayName"
          id="DisplayName"
          name="displayname"
          required
          type={"text"}
          onChange={handleChange}
          value={displayname}
        />
        <FormInput
          id="email"
          label="Email"
          name="email"
          className="Input-style"
          required
          type={"text"}
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="password"
          id="password"
          name="password"
          className="Input-style"
          required
          type={"text"}
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="confirm password"
          id="confirmpassword"
          name="confirmpassword"
          className="Input-style"
          required
          type={"text"}
          onChange={handleChange}
          value={confirmpassword}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
