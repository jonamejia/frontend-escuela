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
            const response = await axios.get("http://localhost:3000/horarios"); // Reemplaza con la URL correcta de tu servidor local
            const data = response.data;
            setHorarios(data);
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
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {horarios.map((horario) => (
                        <Tr key={horario.id}>
                            <Td>{horario.dia}</Td>
                            <Td>{horario.horaInicio}</Td>
                            <Td>{horario.horaFin}</Td>
                            <Td>
                                <Button
                                    colorScheme="red"
                                    onClick={() => eliminarHorario(horario.horario_id)}
                                >
                                    Eliminar
                                </Button>
                            </Td>
                            <Td>
                                <ModalHorarios
                                    colorEsquema="blue"
                                    insertar={() => {
                                        console.log("Desde edit");
                                        setDatos({
                                            dia_semana: horario.dia,
                                            hora_inicio: horario.horaInicio,
                                            hora_fin: horario.horaFin,
                                            curso: horario.curso
                                        });
                                        console.log(datos);
                                    }}
                                    margen="0"
                                    nombre_curso={horario.curso}
                                    descripcion=""
                                    handleSubmit={async (e) => {
                                        e.preventDefault();
                                        try {
                                            const response = await axios.put(
                                                `http://localhost:3000/horarios/${horario.horario_id}`,
                                                {
                                                    dia_semana: datos.dia_semana,
                                                    hora_inicio: datos.hora_inicio,
                                                    hora_fin: datos.hora_fin,
                                                    curso: datos.curso
                                                }
                                            );
                                            fetchHorarios();
                                        } catch (error) {
                                            console.log("Error al actualizar el horario", error);
                                        }
                                    }}
                                    content={`Editando horario con id: ${horario.horario_id}`}
                                    handleChangeData={handleChange}
                                >
                                    Editar
                                </ModalHorarios>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
}
