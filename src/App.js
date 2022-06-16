import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DiamondLists from "./components/DiamondLists";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
const img = require("../src/assets/sample-image.jpg");


const App = () => {
  return (
    <Router>
      <Nav title="WT Diamonds" />
      <div>
        <Routes>
          <Route exact path="/" element={<DiamondLists />}></Route>
          <Route exact path="/ProductList" element={<ProductList />}></Route>
          <Route exact path="/ProductDetail" element={<ProductDetail image={img}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
