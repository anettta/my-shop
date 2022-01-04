import React from "react";
import "../styles/collection-preview.styles.scss";
import CollectionItem from "../components/collection-item.js";

const CollectionPreview = (props) => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {props.items
        .filter((item, idx) => idx < 2)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
