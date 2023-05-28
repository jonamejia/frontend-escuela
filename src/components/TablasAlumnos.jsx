import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tablas() {
  const [alumnos, setAlumnos] = useState([]);
  //setear los datos que se agreguen a los inputs
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("Actualizado");
  }, [alumnos]);

  const [datos, setDatos] = useState({
    nombre_alumno: "",
    apellido_alumno: "",
    fecha_nacimiento: "",
    direccion: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
      const res = await axios.get("http://localhost:3000/alumno");
      setAlumnos(res.data);
      onClose();
    } catch (error) {
      console.log("Error al insertar", error);
    }
  };

  const obtenerAlumno = async () => {
    try {
      const res = await axios.get("http://localhost:3000/alumno");
      const data = res.data;
      setAlumnos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarAlumno = async (id) => {
    try {
      console.log(id);
      const eliminar = await axios.delete(`http://localhost:3000/alumno/${id}`);
    } catch (error) {
      console.log(`error al eliminar ${id}`, error);
    }
    obtenerAlumno();
  };

  useEffect(() => {
    obtenerAlumno();
  }, []);

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Insertar Alumno
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleClick}>
          <ModalContent>
            <ModalHeader>Registrar alumno</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nombre: </FormLabel>
                <Input
                  ref={initialRef}
                  name="nombre_alumno"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Apellido: </FormLabel>
                <Input name="apellido_alumno" onChange={handleChange} />
              </FormControl>

              <FormControl>
                <FormLabel>Fecha nacimiento: </FormLabel>
                <Input name="fecha_nacimiento" onChange={handleChange} />
              </FormControl>

              <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Input name="direccion" onChange={handleChange} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Guardar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>

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
            {alumnos.map((alumno) => (
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
                    <Button
                      colorScheme="gray"
                      onClick={() => console.log("Editando")}
                    >
                      Editar
                    </Button>
                  }
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
