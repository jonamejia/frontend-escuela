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
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Materia</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {alumnos.map((alumno) => (
            <Tr key={alumno}>
              <Td>{alumno.nombre}</Td>
              <Td>{alumno.apellido}</Td>
              <Td>{alumno.curso}</Td>
            </Tr>
          ))}
          
        </Tbody>
      </Table>
    </TableContainer>
  );
}
