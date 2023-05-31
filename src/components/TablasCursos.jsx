import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Button,
  Flex,
} from "@chakra-ui/react";

import ModalAlumnoCurso from "./ModalAlumnoCurso";

export default function TablasHorarios() {
  const [cursos, setCursos] = useState([]);

  const obtenerCursos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cursos"); // Reemplaza con la URL correcta de tu servidor local
      const data = response.data;
      setCursos(data);
    } catch (error) {
      console.log("Error al obtener los cursos: ", error);
    }
  };

  // const eliminarHorario = async (id) => {
  //     try {
  //         await axios.delete(`http://localhost:3000/horario/${id}`);
  //     } catch (error) {
  //         console.log(`Error al eliminar ${id}`, error);
  //     }
  //     fetchHorarios();
  // };

  useEffect(() => {
    obtenerCursos();
  }, []);

  return (
    <Flex direction="column" align="center" justify="center">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nombre Materia</Th>
            <Th>Descripcion</Th>
            <Th>Agregar Curso</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cursos.map((curso) => (
            <Tr key={curso.curso_id}>
              <Td>{curso.curso_id}</Td>
              <Td>{curso.nombre_curso}</Td>
              <Td>{curso.descripcion}</Td>
              <Td>{<ModalAlumnoCurso Curso={curso.curso_id} nombreCurso={curso.nombre_curso}/>}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
}
