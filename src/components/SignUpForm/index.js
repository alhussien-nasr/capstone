import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUser,
} from "../../utils/firebase";
import { FormInput } from "../FormInput";
import "./styles.css";
import { Button } from "../Button";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const defultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export const SignUpForm = () => {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(userContext);

  const [formFields, setFormFields] = useState(defultFormField);

  const { displayName, email, password, confirmpassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmpassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        const { uid } = user;
        await createUser({ uid, displayName, email });
        setCurrentUser(user);
        setFormFields(defultFormField);
        navigate("/");
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
    console.log(formFields, "form");
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form-Container">
      <h2>i do not have account </h2>
      <h4>sign in with your Email and password</h4>

      <FormInput
        label="name"
        id="displayName"
        name="displayName"
        required
        type={"text"}
        onChange={handleChange}
        value={displayName}
      />
      <FormInput
        id="email"
        label="Email"
        name="email"
        required
        type={"text"}
        onChange={handleChange}
        value={email}
      />
      <FormInput
        label="password"
        id="password"
        name="password"
        required
        type={"password"}
        onChange={handleChange}
        value={password}
      />
      <FormInput
        label="confirm password"
        id="confirmpassword"
        name="confirmpassword"
        required
        type={"password"}
        onChange={handleChange}
        value={confirmpassword}
      />
      <Button>submit</Button>
    </form>
  );
};
