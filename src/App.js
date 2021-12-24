import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.js";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.js";
import "./pages/shop/shop.styles.scss";
import Header from "./components/header.js";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route exact path="/sign%20in" element={<SignInAndSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
