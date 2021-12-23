import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.jsx";
import "./pages/homepage/homepage.styles.scss";

const CardsPage = () => (
  <div>
    <h1>Cards page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/puzzles" element={<CardsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
