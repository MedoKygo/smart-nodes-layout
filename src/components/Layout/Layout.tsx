import React from "react";
import {
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import CheckList from "../CheckList/CheckList";
import NavBar from "./NavBar";
import SideBarTest from "./SideBarTest";

const Layout = () => {
  return (
    <div className="bg-white  gird place-content-center mb-10">
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <SideBarTest />
        </GridItem>
        <GridItem bg="white" area={"main"}>
          
        </GridItem>
        <GridItem pl="2" area={"footer"} pb={"2rem"}>
          <UnorderedList justifyContent={"space-between"}>
            <List
              width={"5xl"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <ListItem>Pages</ListItem>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked1")}
                colorScheme="teal"
                variant="solid"
              >
                1
              </Button>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked2")}
                colorScheme="teal"
                variant="solid"
              >
                2
              </Button>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked3")}
                colorScheme="teal"
                variant="solid"
              >
                3
              </Button>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked4")}
                colorScheme="teal"
                variant="solid"
              >
                4
              </Button>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked5")}
                colorScheme="teal"
                variant="solid"
              >
                5
              </Button>
              <Button
                size={"sm"}
                onClick={() => console.log("Clicked6")}
                colorScheme="teal"
                variant="solid"
              >
                6
              </Button>
              <Button colorScheme="teal" size="sm">
                Go to
              </Button>
            </List>
          </UnorderedList>
        </GridItem>
      </Grid>
    </div>
  );
};
export default Layout;
