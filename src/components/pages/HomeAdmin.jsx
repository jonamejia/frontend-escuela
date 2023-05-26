import React from "react";
import {Link as RouterLink} from 'react-router-dom';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue
} from "@chakra-ui/react"
import TableAlumno from "./GestionAlumno";



export default function HomeAdmin() {
    return (
        <Stack minH={"100%"} direction={{ base: "column", md: "row" }}>
            <Flex p={10} m={5} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: useBreakpointValue({ base: "20%", md: "30%" }),
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "blue.400",
                                zIndex: -1
                            }}
                        >
                            Sistema Academico Estudiantil Diriangen
                        </Text>
                        <br />{" "}
                        <Text color={"blue.400"} as={"span"}>
                            Administracion
                        </Text>{" "}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.700"}>
                        Gestione a sus docentes y alumnos de manera comoda, eficiente y rapida
                    </Text>
                    <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                        <Button
                            rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500"
                            }}
                        >
                            <RouterLink to="/tablealumno">Gestionar Alumnos</RouterLink>
                        </Button>
                        <Button rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500"
                            }}>Gestionar Docentes</Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    borderRadius={"8px"}
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                />
            </Flex>
        </Stack>


    )
}