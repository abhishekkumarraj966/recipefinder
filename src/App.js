import React from "react";
import GetData from "./components/GetData";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
// import MockUp from "./components/MockUp";

const App = () => {
  return (
    <div>

     
      <Routes/>

      
      <Routes>

        <Route path="/" exact element={<GetData/>} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      {/* <MockUp/> */}
    </div>
  );
};

export default App;
