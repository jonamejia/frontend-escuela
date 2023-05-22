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
import Alertas from "./Alertas";

export default function Resgistrar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [datos, setDatos] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
  });

  //setear los datos que se agreguen a los inputs
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/usuario", {
      primerNombre: datos.primerNombre,
      segundoNombre: datos.segundoNombre,
      primerApellido: datos.primerApellido,
      segundoApellido: datos.segundoApellido,
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
              <FormLabel>Primer Nombre: </FormLabel>
              <Input
                ref={initialRef}
                name="primerNombre"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Segundo Nombre: </FormLabel>
              <Input name="segundoNombre" onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Primer Apellido: </FormLabel>
              <Input name="primerApellido" onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Segundo Apellido</FormLabel>
              <Input name="segundoApellido" onChange={handleChange} />
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
