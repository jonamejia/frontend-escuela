import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Tablas() {
  return (
    <TableContainer mt={5}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Alumno</Th>
            <Th>Materia</Th>
            <Th isNumeric>Notas</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Jorge</Td>
            <Td>Software II</Td>
            <Td isNumeric>100</Td>
          </Tr>
          <Tr>
            <Td>Jonathan</Td>
            <Td>Software II</Td>
            <Td isNumeric>100</Td>
          </Tr>
          <Tr>
            <Td>Edgardo</Td>
            <Td>Software II</Td>
            <Td isNumeric>100</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
