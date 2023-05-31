import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

export default function ModalAlumnoCurso(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [alumnos, setAlumnos] = useState([]);
  const [copiaAlumno, setCopiaAlumno] = useState([]);

  const obtenerAlumnos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/alumno");
      const data = res.data;
      setAlumnos(data);
      setCopiaAlumno(data);
    } catch (error) {
      console.log("error al obtener la data de alumnos: ", error);
    }
  };

  const handleBusqueda = (e) => {
    console.log(e.target.value);
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
    console.log(alumnos);
  };

  const guardarAlumno = async (id) => {
    try {
      const res = await axios.get("http://localhost:3000/cursos/alumno");
      const data = res.data;
      const resultado = data.some(
        (item) => item.alumno_id === id && item.curso_id === props.Curso
      );

      if (!resultado) {
        const insertarMateria = await axios.post(
          "http://localhost:3000/cursos",
          {
            alumno_id: id,
            curso_id: props.Curso,
          }
        );

        alert("Clase de " + props.nombreCurso + " insertada");
      } else {
        alert("Clase " + props.nombreCurso + " no insertada el estudiante ya tiene inscrita esta clase");
      }
    } catch (error) {
      console.log("Error al obtener los alumnos y materias");
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Agregar Curso
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <Input
            placeholder="Ingrese nombre o ID"
            mt={20}
            mr={20}
            onChange={handleBusqueda}
          />
          <ModalHeader>Ingrese Un Estudiante</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Nombres: </Th>
                  <Th>Apellidos</Th>
                  <Th>Agregar Curso</Th>
                </Tr>
              </Thead>
              <Tbody>
                {alumnos &&
                  alumnos.map((alumno) => (
                    <Tr key={alumno.alumno_id}>
                      <Td>{alumno.alumno_id}</Td>
                      <Td>{alumno.nombre_alumno}</Td>
                      <Td>{alumno.apellido_alumno}</Td>
                      <Td>
                        {
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => guardarAlumno(alumno.alumno_id)}
                          >
                            Guardar
                          </Button>
                        }
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
