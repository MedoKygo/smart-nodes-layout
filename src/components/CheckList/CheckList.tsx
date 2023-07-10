import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import {GrRefresh} from 'react-icons/gr'

 interface CheckListProps {
  Id: number;
  ImageSet: string;
  Files: string;
  Status: number | string;
  LastUsed: number;
  Details: number;
}
 interface Props {
  Lists: CheckListProps[];
}

const CheckList2 = ({ Lists }: Props) => {
  return (
    <Flex justifyContent="center">
      <TableContainer width={"4xl"}>
        <Table size="sm">
          <Thead color={"gray.500"}>
            <Tr>
              <Th className="px-4 py-2">File Sets</Th>
              <Button colorScheme="teal" variant="outline">
                View Log
              </Button>
              <Button colorScheme="teal" variant="solid">
                + New Set
              </Button>
              <Button><GrRefresh/></Button>
            </Tr>
          </Thead>
          <Thead>
            <Tr>
              <Th>Image Set</Th>
              <Th>files</Th>
              <Th>status</Th>
              <Th>last used</Th>
              <Th>details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Lists.map((List) => (
              <Tr key={List.Id}>
                <Td>{List.ImageSet}</Td>
                <Td>{List.Files}</Td>
                <Td>{List.Status}</Td>
                <Td>{List.LastUsed}</Td>
                <Td>{List.Details}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default CheckList2;
