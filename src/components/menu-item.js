import React from "react";
import "../styles/menu-item.styles.scss";
import { Link } from "react-router-dom";

const MenuItem = (props) => (
  <div className={`${props.size} menu-item`} onClick={() => props.linkUrl}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    />
    <div className="content">
      <Link to={props.linkUrl}>
        <h1 className="title">{props.title.toUpperCase()}</h1>
      </Link>
      <span className="shop">shop now</span>
    </div>
  </div>
);

export default MenuItem;
