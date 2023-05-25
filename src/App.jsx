import "./App.css";
import React from "react";
import Login from "../src/components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarAdmin from "./components/DashboardAdmin";
import SidebarAlumno from "./components/DashboardAlumno";
import SidebarDocente from "./components/DashboardDocente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<SidebarAdmin />} />
        <Route path="/alumno" element={<SidebarAlumno />} />
        <Route path="/docente" element={<SidebarDocente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
