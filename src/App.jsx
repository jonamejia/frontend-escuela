import "./App.css";
import React from "react";
import Login from "../src/components/Login";  
import Dashboard from "./components/Dashboard";                                                                          
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
