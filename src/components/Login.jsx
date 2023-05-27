import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  Input,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    pass: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localhost:3000/login");
    const data = JSON.parse(res.request.response);

    const usuarios = data.some((user) => {
      const { username, pass, tipo_usuario } = user;
 
      if (username == login.username && pass == login.pass) {
        if (tipo_usuario == "admin") {
           navigate("/admin");
        } else if (tipo_usuario == "docente") {
          navigate("/docente");
        } else if (tipo_usuario == "estudiante") {
           navigate("/alumno");
        }

        return true;
      }
    });

    if (!usuarios) {
      alert("Usuario o contraseña incorrecta")
    } 
  };

  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack
        as="form"
        spacing={4}
        align={"flex-start"}
        w="full"
        onSubmit={handleSubmit}
      >
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Login</Heading>
          <Text>Ingrese su usuario y contraseña </Text>
        </VStack>

        <FormControl>
          <FormLabel>Usuario:</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            name="username"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contraseña:</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            type="password"
            name="pass"
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit" rounded="none" colorScheme="blue" w="full">
          Login
        </Button>
      </VStack>
    </Box>
  );
}
