import React from "react";
import "../styles/button.scss";

const Button = (props) => (
  <button className="custom-button" {...props}>
    {props.children}
  </button>
);

export default Button;
