import "./App.css";
import React from "react";
import Login from "../src/components/Login";   
import Dashboard from "../src/components/Dashboard";     
import HomeOption from "../src/components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clas from "../src/components/pages/Classmate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/ClassmateTable" element = {<Clas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
