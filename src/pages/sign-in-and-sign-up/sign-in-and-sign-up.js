import React from "react";
import SignIn from "../../components/sign-in.js";
import SignUp from "../../components/sign-up.js";

import "./sign-in-and-sign-up.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
