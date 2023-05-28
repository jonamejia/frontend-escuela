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
      <Button onClick={onOpen} colorScheme="blue" mb={10}>
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
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Apellido: </FormLabel>
                <Input name="apellido_alumno" onChange={props.handleChangeData} />
              </FormControl>

              <FormControl>
                <FormLabel>Fecha nacimiento: </FormLabel>
                <Input name="fecha_nacimiento" onChange={props.handleChangeData} />
              </FormControl>

              <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Input name="direccion" onChange={props.handleChangeData} />
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
