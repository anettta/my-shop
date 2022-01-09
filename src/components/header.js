import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.styles.scss";
import { FaCamera } from "react-icons/fa";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import "../styles/cart-icon.scss";
import CartDropdown from "./cart-dropdown.js";
import { toggleCartHidden } from "../redux/cart-actions.js";

const Header = ({ currentUser, hidden, toggleCartHidden }) => (
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
      <div className="cart-icon" onClick={toggleCartHidden}>
        <FaShoppingBag className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
