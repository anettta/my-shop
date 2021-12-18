import React from "react";
import "./homepage.styles.scss";
// choosing an error function to build HomePage component
// since we don't need any lifecycle methods or state
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Puzzles</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Greeting Cards</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Mugs</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
