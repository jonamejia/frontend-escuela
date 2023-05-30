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
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalForm from "./ModalMaestro";

export default function Tablas() {
  const [maestros, setMaestros] = useState([]);

  //setear los datos que se agreguen a los inputs
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    console.log(datos);
  };

  const [datos, setDatos] = useState({
    nombre_maestro: "",
    apellido_maestro: "",
    especialidad: "",
  });

  const obtenerMaestro = async () => {
    const res = await axios.get("http://localhost:3000/maestro");
    const data = res.data;
    setMaestros(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Desde el handle Click")

    const values = {
      nombre_maestro: datos.nombre_maestro,
      apellido_maestro: datos.apellido_maestro,
      especialidad: datos.especialidad,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/maestro",
        values
      );
      obtenerMaestro();
    } catch (error) {
      console.log("Error al insertar maestro", error);
    }
  };

  const eliminarMaestro = async (id) => {

    console.log("eliminando: ", id)
    try {
      const eliminar = await axios.delete(
        `http://localhost:3000/maestro/${id}`
      );
    } catch (error) {
      console.log(`error al eliminar ${id}`, error);
    }
    obtenerMaestro();
  };

  useEffect(() => {
    obtenerMaestro();
  }, []);

  return (
    <Flex direction={"column"} align={"center"} justify={"center"}>

      <ModalForm
        colorEsquema="blue"
        handleSubmit={handleClick}
        handleChangeData={handleChange}
        margen={10}
      >
        Insertar Maestro
      </ModalForm>

      <TableContainer>
        <Table variant="striped" colorScheme={"teal"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>Especialidad</Th>
              <Th>Eliminar</Th>
              <Th>Editar</Th>
            </Tr>
          </Thead>

          <Tbody>
            {maestros.map((maestro) => (
              <Tr key={maestro.maestro_id}>
                <Td>{maestro.maestro_id}</Td>
                <Td>{maestro.nombre_maestro}</Td>
                <Td>{maestro.apellido_maestro}</Td>
                <Td>{maestro.especialidad}</Td>

                <Td>
                  {
                    <Button
                      colorScheme="red"
                      onClick={() => eliminarMaestro(maestro.maestro_id)}
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
                          nombre_maestro: maestro.nombre_maestro,
                          apellido_maestro: maestro.apellido_maestro,
                          especialidad: maestro.especialidad,
                        });

                        console.log(datos);
                      }}
                      margen="0"
                      nombre={maestro.nombre_maestro}
                      apellido={maestro.apellido_maestro}
                      especialidad={maestro.especialidad}
                      handleSubmit={async (e) => {
                        e.preventDefault();

                        try {
                          const response = await axios.put(
                            `http://localhost:3000/maestro/${maestro.maestro_id}`,
                            {
                              nombre_maestro: datos.nombre_maestro,
                              apellido_maestro: datos.apellido_maestro,
                              especialidad: datos.especialidad
                            }
                          );

                          obtenerMaestro();
                        } catch (error) {
                          console.log("error al actualizar el maestro");
                        }
                      }}
                      content={`Editando maestro con id: ${maestro.maestro_id}`}
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
