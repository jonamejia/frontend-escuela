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
import ModalHorarios from "./ModalHorarios";

export default function TablasHorarios() {
    const [horarios, setHorarios] = useState([]);

    const fetchHorarios = async () => {
        try {
            const response = await axios.get("http://localhost:3000/horario"); // Reemplaza con la URL correcta de tu servidor local
            const data = response.data;
            setHorarios(data);
        } catch (error) {
            console.log("Error al obtener el horario", error);
        }
    };

    const eliminarHorario = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/horario/${id}`);
        } catch (error) {
            console.log(`Error al eliminar ${id}`, error);
        }
        fetchHorarios();
    };

    useEffect(() => {
        fetchHorarios();
    }, []);

    return (
        <Flex direction="column" align="center" justify="center">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Día</Th>
                        <Th>Hora de inicio</Th>
                        <Th>Hora de fin</Th>
                        <Th>Curso</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {horarios.map((horario) => (
                        <Tr key={horario.horario_id}>
                            <Td>{horario.dia_semana}</Td>
                            <Td>{horario.hora_inicio}</Td>
                            <Td>{horario.hora_fin}</Td>
                            <Td>{horario.curso_id}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
}