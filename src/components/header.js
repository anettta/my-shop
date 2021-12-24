import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.styles.scss";
import { FaCamera } from "react-icons/fa";
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <FaCamera className="logo"></FaCamera>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
