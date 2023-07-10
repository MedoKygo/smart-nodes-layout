import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ResetPassword = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Reset Password</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Button colorScheme="teal" mb={8} mt={6}>
          Send Reset Link
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" ml="20"></FormLabel>
        </FormControl>

        <Text flexDirection="row" textColor={"#81E6D9"} ml={10}>
          Have an account?{" "}
          <Link ml={1} textColor={"white"}>
            Login
          </Link>
        </Text>
        <Text textColor={"#81E6D9"} mt={5} ml={12}>
          Don't have an account?
        </Text>
        <Link ml={1} marginLeft={16} textColor={"white"}>
          Buy a subscribtion
        </Link>
      </Flex>
    </Flex>
  );
};

export default ResetPassword;