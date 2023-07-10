import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";



const Login = () => {
const formBackground = useColorModeValue("white", "gray.700");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6} ml={14}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Button colorScheme="teal" mb={8} mt={6}>
        <a href="/Home"> Enter Password</a>
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" ml="20"></FormLabel>
        </FormControl>

        <Text flexDirection="row" textColor={"#81E6D9"}>
          Forgot password? <Link ml={1} textColor={"white"}>Reset it here</Link>
        </Text>
        <Text textColor={'#81E6D9'} mt={5} ml={7}>
          Don't have an account?
        </Text>
        <Link ml={1} marginLeft={12} textColor={"white"}>Buy a subscribtion</Link>
      </Flex>
    </Flex>
  );
};

export default Login;