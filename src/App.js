import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.js";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.js";
import "./pages/shop/shop.styles.scss";
import Header from "./components/header.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route exact path="/shop" element={<ShopPage />}></Route>
        {/* <Route path="/contact" element={<ShopPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
