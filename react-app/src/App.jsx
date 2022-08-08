
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Pets from "./components/pets/Pets";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
          <Route exact path="/" element={<Login />} />  
          <Route path="/pets" element = {<Pets />}> </Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
