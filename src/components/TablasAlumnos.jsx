import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalForm from "./ModalForm";


export default function Tablas() {
  const [alumnos, setAlumnos] = useState([]);
  const [copiaAlumno, setCopiaAlumno] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = copiaAlumno.filter((elemento) => {
      if (
        elemento.nombre_alumno
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.alumno_id
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });

    setAlumnos(resultadoBusqueda);
  };
  //setear los datos que se agreguen a los inputs
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    console.log(datos);
  };

  const [datos, setDatos] = useState({
    nombre_alumno: "",
    apellido_alumno: "",
    fecha_nacimiento: "",
    direccion: "",
  });

  const obtenerAlumno = async () => {
    const res = await axios.get("http://localhost:3000/alumno");
    const data = res.data;
    setAlumnos(data);
    setCopiaAlumno(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const values = {
      nombre_alumno: datos.nombre_alumno,
      apellido_alumno: datos.apellido_alumno,
      fecha_nacimiento: datos.fecha_nacimiento,
      direccion: datos.direccion,
    };

    try {
      const response = await axios.post("http://localhost:3000/alumno", values);
      obtenerAlumno();
    } catch (error) {
      console.log("Error al insertar", error);
    }
  };

  const eliminarAlumno = async (id) => {
    const alerta = confirm("Eliminar alumno con id: " +id);

    if(alerta) {
      try {
        console.log("eliminando")
        const eliminar = await axios.delete(`http://localhost:3000/alumno/${id}`);
        obtenerAlumno();
      } catch (error) {
        console.log(`error al eliminar ${id}`, error);
      }
    } else {
      alert("alumno no eliminado")
    }
    
    
  };

  useEffect(() => {
    obtenerAlumno();
  }, []);

  return (
    <Flex direction={"column"} align={"center"} justify={"center"}>
      <Input
        variant="filled"
        placeholder="Busqueda por id o nombre"
        mb={5}
        onChange={handleBusqueda}
      />
      <ModalForm
        handleSubmit={handleClick}
        handleChangeData={handleChange}
        content="Registrar Alumno"
        margen="10"
        colorEsquema="blue"
      >
        Insertar Alumno
      </ModalForm>
      <TableContainer>
        <Table variant="striped" colorScheme={"teal"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>Fecha Nacimiento</Th>
              <Th>Domicilio</Th>
              <Th>Eliminar</Th>
              <Th>Editar</Th>
            </Tr>
          </Thead>

          <Tbody>
            {alumnos &&
              alumnos.map((alumno) => (
                <Tr key={alumno.alumno_id}>
                  <Td>{alumno.alumno_id}</Td>
                  <Td>{alumno.nombre_alumno}</Td>
                  <Td>{alumno.apellido_alumno}</Td>
                  <Td>{alumno.fecha_nacimiento}</Td>
                  <Td>{alumno.direccion}</Td>
                  <Td>
                    {
                      <Button
                        colorScheme="red"
                        onClick={() => eliminarAlumno(alumno.alumno_id)}
                      >
                        Eliminar
                      </Button>
                    }
                  </Td>
                  <Td>
                    {
                      <ModalForm
                        colorEsquema="blue"
                        insertar={function () {
                          console.log("Desde edit");
                          setDatos({
                            nombre_alumno: alumno.nombre_alumno,
                            apellido_alumno: alumno.apellido_alumno,
                            fecha_nacimiento: alumno.apellido_alumno,
                            direccion: alumno.direccion,
                          });

                          console.log(datos);
                        }}
                        margen="0"
                        nombre={alumno.nombre_alumno}
                        apellido={alumno.apellido_alumno}
                        fecha_nacimiento={alumno.fecha_nacimiento}
                        direccion={alumno.direccion}
                        handleSubmit={async (e) => {
                          e.preventDefault();

                          try {
                            const response = await axios.put(
                              `http://localhost:3000/alumno/${alumno.alumno_id}`,
                              {
                                nombre_alumno: datos.nombre_alumno,
                                apellido_alumno: datos.apellido_alumno,
                                fecha_nacimiento: datos.fecha_nacimiento,
                                direccion: datos.direccion,
                              }
                            );

                            obtenerAlumno();
                          } catch (error) {
                            console.log("error al actualizar el alumno");
                          }
                        }}
                        content={`Editando alumno con id: ${alumno.alumno_id}`}
                        handleChangeData={handleChange}
                      >
                        Editar
                      </ModalForm>
                    }
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}