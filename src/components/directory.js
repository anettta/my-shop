import React from "react";
import MenuItem from "./menu-item.js";
import "../styles/directory-styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../redux/directory-selectors.js";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
