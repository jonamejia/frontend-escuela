import React from "react";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue
} from "@chakra-ui/react"

import { IoMdTime, IoIosJournal, IoIosPerson } from "react-icons/io"
import { BsPerson } from "react-icons/bs"

function StatsCard(props) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function HomeOption() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        color={"blue.500"}
      >
        Bienvenido Jorge, aqui tienes las gestiones academicas que puedes realizar
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 4, lg: 7 }}>
        <StatsCard
          title={"Alumnos"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Meastros"}
          icon={<IoIosPerson size={"3em"} />}
        />
        <StatsCard
          title={"Cursos"}
          icon={<IoIosJournal size={"3em"} />}
        />
        <StatsCard
          title={"Horario"}
          icon={<IoMdTime size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  )
}
