import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.styles.scss";
import { FaCamera } from "react-icons/fa";
import { auth } from "../../firebase/firebase.utils";

const Header = (props) => (
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
      {props.currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign%20in">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
