import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    Thead,
    Th,
    Tr,
    Td,
    Tbody,
    Button,
    Flex
} from "@chakra-ui/react";
import ModalHorario from "./ModalHorarios";
import ModalAlumnoCurso from "./ModalAlumnoCurso";

export default function TablaHorario() {
    const [horario, setHorario] = useState([]);

    const fetchHorario = async () => {
        try {
            const response = await axios.get("http://localhost:3000/horarios"); // Reemplaza con la URL correcta de tu servidor local
            const data = response.data;
            console.log(data);
            setHorario(data);
        } catch (error) {
            console.log("Error al obtener el horario", error);
        }
    };

    const eliminarHorario = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/horarios/${id}`);
        } catch (error) {
            console.log(`Error al eliminar ${id}`, error);
        }
        fetchHorario();
    };

    useEffect(() => {
        fetchHorario();
    }, []);

    return (
        <Flex direction="column" align="center" justify="center">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Día</Th>
                        <Th>Materia</Th>
                        <Th>Hora de inicio</Th>
                        <Th>Hora de fin</Th>    
                        <Th>Curso</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {horario &&
                        horario.map((horario_curso_alumno) => (
                            <Tr key={horario_curso_alumno.id}>
                                <Td>{horario_curso_alumno.horario_id}</Td>
                                <Td>{horario_curso_alumno.curso_id}</Td>
                                <td>{horario_curso_alumno.alumno_id}</td>
                                <td>{horario_curso_alumno.maestro_id}</td>                            
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </Flex>
    );
}