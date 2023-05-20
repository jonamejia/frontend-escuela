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

export default function Login() {

  const [login, setLogin] = useState({
    usuario: "",
    pass: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login.usuario);
    console.log(login.pass);
  };

  const handleSubmit = e => {
    e.preventDefault();
  }

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
      <VStack as="form" spacing={4} align={"flex-start"} w="full" onSubmit={handleSubmit}>
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Login</Heading>
          <Text>Ingrese su usuario y contraseña </Text>
        </VStack>

        <FormControl>
          <FormLabel>Usuario:</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            name="usuario"
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
