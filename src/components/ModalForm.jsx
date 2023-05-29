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
  Stack,
} from "@chakra-ui/react";
import React from "react";

export default function ModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={props.insertar}
        onDoubleClick={onOpen}
        colorScheme={props.colorEsquema}
        mb={props.margen}
      >
        {props.children}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={props.handleSubmit}>
          <ModalContent>
            <ModalHeader>{props.content}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nombre: </FormLabel>
                <Input
                  ref={initialRef}
                  name="nombre_alumno"
                  defaultValue={props.nombre}
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Apellido: </FormLabel>
                <Input
                  name="apellido_alumno"
                  defaultValue={props.apellido}
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Fecha nacimiento: </FormLabel>
                <Input
                  name="fecha_nacimiento"
                  defaultValue={props.fecha_nacimiento}
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Input
                  name="direccion"
                  defaultValue={props.direccion}
                  onChange={props.handleChangeData}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3} onClick={onClose}>
                Guardar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
