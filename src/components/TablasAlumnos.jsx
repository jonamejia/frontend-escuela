import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Registro from "./RegistroAlumno";
export default function Tablas() {
  const [alumnos, setAlumnos] = useState([]);

  const obtenerAlumno = async () => {
    const res = await axios.get("http://localhost:3000/alumno");
    const data = JSON.parse(res.request.response);
    setAlumnos(data);
  };

  useEffect(() => {
    obtenerAlumno();
  }, []);
  return (
    <TableContainer mt={5}>
      <Table variant="simple" borderBlock={"gray"}>
        <Thead>
          <Tr>
            <Th>Nombres</Th>
            <Th>Apellidos</Th>
            <Th>Fecha Nacimiento</Th>
            <Th>Domicilio</Th>
            <Th>Editar</Th>
            <Th>Eliminar</Th>
            
          </Tr>
        </Thead>

        <Tbody>
          {alumnos.map((alumno) => (
            <Tr key={alumno.alumno_id}>
              <Td>{alumno.nombre_alumno}</Td>
              <Td>{alumno.apellido_alumno}</Td>
              <Td>{alumno.fecha_nacimiento}</Td>
              <Td>{alumno.direccion}</Td>
              <Td>{<Registro>Editar</Registro>}</Td>
              <Td>{<Registro>Eliminar</Registro>}</Td>
            </Tr>
          ))}
          
        </Tbody>
      </Table>
    </TableContainer>
  );
}
