import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.jsx";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.js";
import "./pages/shop/shop.styles.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/shop" element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
