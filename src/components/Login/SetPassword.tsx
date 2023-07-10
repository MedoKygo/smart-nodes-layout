import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    useColorModeValue,
    InputRightElement,
    InputGroup,
  } from "@chakra-ui/react";
  import {BiSolidHide, BiShow} from 'react-icons/bi'

import { useState } from "react";
import React from "react";
  
  
  
  const SetPassword = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
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
          <InputGroup size="md">
          <Input
          placeholder="**********"
          type={show?"text":"password"}
          variant="filled"
          mb={6}
        />
         <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <BiSolidHide/> : <BiShow/>}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
        <Input
          placeholder="**********"
          type={show?'text':"password"}
          variant="filled"
          mb={6}
        />
            <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <BiSolidHide/> : <BiShow/>}
            </Button>
          </InputRightElement>
        </InputGroup>
          <Button colorScheme="teal" mb={8} mt={6}>
            Save Changes
          </Button>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark_mode" ml="20"></FormLabel>
          </FormControl>
        </Flex>
      </Flex>
    );
  };
  
  export default SetPassword;