import React from "react";
import Directory from "../../components/directory/directory.js";
import "../../components/directory/directory.styles.scss";

// choosing an error function to build HomePage component
// since we don't need any lifecycle methods or state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
