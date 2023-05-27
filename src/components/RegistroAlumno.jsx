import React, { Children } from "react";
import {
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
import axios from "axios";
import { useState } from "react";

export default function Resgistrar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [datos, setDatos] = useState({
    nombre_alumno: "",
    apellido_alumno: "",
    fecha_nacimiento: "",
    direccion: "",
  });

  //setear los datos que se agreguen a los inputs
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/alumno", {
      nombre_alumno: datos.nombre_alumno,
      apellido_alumno: datos.apellido_alumno,
      fecha_nacimiento: datos.fecha_nacimiento,
      direccion: datos.direccion
    });

  };

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registrar usuario</ModalHeader>
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
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
