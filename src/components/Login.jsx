import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {

    const [userEmail, setUserText] = useState('');
    const textValue = ({ target }) => {
        setUserText(target.value);
        console.log(target.value)
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
      <VStack spacing={4} align={"flex-start"} w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Login</Heading>
          <Text>Ingrese su usuario y contraseña </Text>
        </VStack>

        <FormControl>
          <FormLabel>Usuario:</FormLabel>
          <Input rounded="none" variant="filled" value={userEmail} onChange={textValue}/>
        </FormControl>

        <FormControl>
          <FormLabel>Contraseña:</FormLabel>
          <Input rounded="none" variant="filled" type="password" />
        </FormControl>

        <Button rounded="none" colorScheme="blue" w='full' >
          Login
        </Button>
      </VStack>
    </Box>
  );
}
