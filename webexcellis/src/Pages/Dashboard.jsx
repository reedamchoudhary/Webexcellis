import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, listUsers } from "../async/user.async";
import { UPDATE_DATA_BASE } from "../constants/path";
import {
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const [tableHeads] = useState(["First name", "Last name", "Email", "Action"]);
  const navigate = useNavigate();
  useEffect(() => {
    listUsers(setDataList);
  }, []);

  const updateHandler = (id) => {
    navigate(UPDATE_DATA_BASE + "/" + id);
  };

  const deleteHandler = (id) => {
    deleteUser(id, setDataList);
  };

  return (
    <ChakraProvider>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        className={"flex"}
      >
        <Heading margin={"20px 0px 40px "}>Dashboard</Heading>
        <TableContainer width={"90%"}>
          <Table variant={"striped"} colorScheme={"blue"}>
            <Thead>
              <Tr>
                {tableHeads.map((item) => (
                  <Th>{item}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {dataList.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.firstName}</Td>
                  <Td>{item.lastName}</Td>
                  <Td>{item.email}</Td>
                  <Td>
                    <Button
                      marginRight={"10px"}
                      onClick={() => updateHandler(item.id)}
                    >
                      Update
                    </Button>
                    <Button onClick={() => deleteHandler(item.id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </ChakraProvider>
  );
};

export default Dashboard;
