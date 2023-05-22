import "./App.css";
import React from "react";
import Login from "../src/components/Login";
import Dashboard from "../src/components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/CardMasters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
