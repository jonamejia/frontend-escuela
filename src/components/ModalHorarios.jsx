import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function ModalHorario() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [horarios_alumno, setHorario_alumno] = useState ([]);

    const obtenerHorario = async () => {
        try{
            const res = await axios.get("http://localhost:3000/horarios");
            const data = res.data;
            setHorario_alumno(data);
        } catch (error){
            console.log("error al obtener la data de los horarios:", error)
        }
    }

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