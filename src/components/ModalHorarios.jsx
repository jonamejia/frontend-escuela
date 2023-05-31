import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
} from "@chakra-ui/react";

export default function TablasHorarios() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme={porps.colorEsquema}
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
                        <ModalHeader>{props.Content}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Dia: </FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="dia_semana"   
                                    defaultValue={props.dia}
                                    onChange={props.handleChangeData}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Hora Inicio: </FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="hora_inicio"   
                                    defaultValue={props.hora_inicio}
                                    onChange={props.handleChangeData}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Hora Fin: </FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="hora_fin"   
                                    defaultValue={props.hora_fin}
                                    onChange={props.handleChangeData}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Curso: </FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="curso"   
                                    defaultValue={props.curso_id}
                                    onChange={props.handleChangeData}
                                />
                            </FormControl>
                        </ModalBody>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}