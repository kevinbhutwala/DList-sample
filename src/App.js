import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DiamondLists from "./components/DiamondLists";
import ProductList from "./components/ProductList";
// import News from './components/News';
// import Postform from './components/Postform';


const App = () => {

  return (
    <Router>
        <Nav title="WT Diamonds"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<DiamondLists />}></Route>
            <Route
              exact
              path="/ProductList"
              element={<ProductList/>}
            ></Route>
          </Routes>
        </div>
      </Router>
    
  );
};

export default App;


// <div>
//       <Postform />
     
//       <Navbar />
//       <DiamondList />
//       <News/>
//     </div>