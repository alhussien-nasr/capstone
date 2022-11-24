import React from "react";
import { SignUpForm } from "../../components/SignUpForm";
import { signInWhithGooglePopup, createUser } from "../../utils/firebase";

export const LogIn = () => {
  const logGoogleUser = async () => {
    try {
      const {user} = await signInWhithGooglePopup();
      await createUser(user);
    } catch (error) {
      console.log(error, "err");
    }
  };
  return (
    <div>
      <h1>log in</h1>
      {/* <button onClick={logGoogleUser}>log in</button> */}
      <SignUpForm/>
    </div>
  );
};
