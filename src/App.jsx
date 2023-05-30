import "./App.css";
import React from "react";
import Login from "../src/components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarAdmin from "./components/DashboardAdmin";
import SidebarAlumno from "./components/DashboardAlumno";
import SidebarDocente from "./components/DashboardDocente";
import TableAlumno from "./components/pages/GestionAlumno";
import TableMaestro from"./components/pages/GestionMaestro";
import TableHorario from "./components/pages/GestionHorario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<SidebarAdmin />} />
        <Route path="/alumno" element={<SidebarAlumno />} />
        <Route path="/docente" element={<SidebarDocente />} />
        <Route path="/alumnos" element={<TableAlumno/>} />
        <Route path="/maestros" element={<TableMaestro/>} />
        <Route path="/horarios" element={<TableHorario/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
