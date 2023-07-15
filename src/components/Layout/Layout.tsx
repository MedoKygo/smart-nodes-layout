import React from "react";
import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import SideBarTest from "./SideBar";
import CheckList from "../CheckList/CheckList";
import Create from "../Create/Create";
import SaveChanges from "../Create/SaveChanges";
import Group1 from "../Groups/Group1";

const Layout = () => {
  return (
    <>
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
          {/* Navbar */}
          <NavBar />
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          {/* Sidebar */}
          <SideBarTest />
        </GridItem>
        <GridItem bg="white" area={"main"} mt={36}>
          {/* Page */}
          <CheckList
        Lists={[
          {
            Id: 1,
            ImageSet: "Set1",
            Files: "file1",
            Status: "Completed",
            LastUsed: 12 - 4 - 2023,
            Details: 12 - 4 - 2023,
          },
          {
            Id: 2,
            ImageSet: "Set2",
            Files: "file2",
            Status: "In Progress",
            LastUsed: 12 - 4 - 2023,
            Details: 12 - 4 - 2023,
          },
          {
            Id: 3,
            ImageSet: "Set3",
            Files: "file3",
            Status: "In Progress",
            LastUsed: 12 - 4 - 2023,
            Details: 12 - 4 - 2023,
          },
          {
            Id: 4,
            ImageSet: "Set4",
            Files: "file4",
            Status: "In Progress",
            LastUsed: 12 - 4 - 2023,
            Details: 12 - 4 - 2023,
          },
          {
            Id: 5,
            ImageSet: "Set5",
            Files: "file5",
            Status: "In Progress",
            LastUsed: 12 - 4 - 2023,
            Details: 12 - 4 - 2023,
          },
        ]}
      />
        </GridItem>
        <GridItem pl="2" area={"footer"} pb={"2rem"}>
          {/* Footer */}
        </GridItem>
      </Grid>
    </div>
    </>
  );
};
export default Layout;
