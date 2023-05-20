import React from "react"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
} from "@chakra-ui/react"

export default function Card() {
    return (
        <Center py={6}>
            <Box
                maxW={"270px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
            >
                <Image
                    h={"120px"}
                    w={"full"}
                    src={
                        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    }
                    objectFit={"cover"}
                />
                <Flex justify={"center"} mt={-12}>
                    <Avatar
                        size={"xl"}
                        src={
                            "https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/314064799_152761684158213_8696728516093042996_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yMdEVzlqfhUAX-_cFAB&_nc_ht=scontent.fmga4-1.fna&oh=00_AfDOq1KSy8gDP632-PrHCsFJ0fRhU46kJyHHZ9CLMsut7A&oe=646DD26F"
                        }
                        alt={"Author"}
                        css={{
                            border: "2px solid white"
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={1} align={"center"} mb={6}>
                        <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                            Edgardo Plata
                        </Heading>
                        <Text color={"gray.600"}>Profesor</Text>
                    </Stack>

                    <Stack direction={"row"} justify={"center"} spacing={6}>
                    <Text color={"gray.500"} textAlign={"center"}>Administradores de Bases de Datos</Text>
                    </Stack>

                    <Button
                        w={"full"}
                        mt={8}
                        bg={useColorModeValue("#151f21", "gray.900")}
                        color={"white"}
                        rounded={"md"}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                    >
                        Saber mas
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}
