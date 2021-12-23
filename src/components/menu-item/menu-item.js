import React from "react";
import "./menu-item.styles.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <Link style={{ textDecoration: "none" }} to={title}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>

      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default MenuItem;
