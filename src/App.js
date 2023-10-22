import React from "react";
import GetData from "./components/GetData";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" exact element={<GetData/>} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      
    </div>
  );
};

export default App;
