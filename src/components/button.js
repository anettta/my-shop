import React from "react";
import "../styles/button.scss";

const Button = (props) => (
  <button
    className={`${props.isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...props}
  >
    {props.children}
  </button>
);

export default Button;
