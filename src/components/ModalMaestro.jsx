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
                <FormLabel>Nombres: </FormLabel>
                <Input
                  ref={initialRef}
                  name="nombre_maestro"
                  defaultValue={props.nombre}
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Apellidos: </FormLabel>
                <Input
                  name="apellido_maestro"
                  defaultValue={props.apellido}
                  onChange={props.handleChangeData}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Especialidad: </FormLabel>
                <Input
                  name="especialidad"
                  defaultValue={props.especialidad}
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