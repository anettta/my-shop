import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.styles.scss";
import { FaCamera } from "react-icons/fa";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../components/cart-icon.js";
import CartDropdown from "./cart-dropdown.js";
import { selectCartHidden } from "../redux/cart-selectors.js";
import { selectCurrentUser } from "../redux/user-selectors.js";

const Header = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign%20in">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
