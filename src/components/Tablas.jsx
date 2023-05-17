import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
