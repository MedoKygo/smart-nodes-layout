import React from "react";
import Login from "./components/Login/Login";
import SaveChanges from "./components/Create/SaveChanges";
import ResetPassword from "./components/Login/ResetPassword";
import SetPassword from "./components/Login/SetPassword";
import Create from "./components/Create/Create";
import Layout from "./components/Layout/Layout";
import Group1 from "./components/Groups/Group1";
import Group2 from "./components/Groups/Group2";
import Group3 from "./components/Groups/Group3";
import CheckList from "./components/CheckList/CheckList";

const file1 = () => {
  return (
    <>
      <Login />
      <ResetPassword />
      <SetPassword />
      <Group1
        title={"title"}
        number={0}
        change={{
          title: "change.title",
          children: <span>change.number</span>,
        }}
        href={"href"}
      />
      <Group2 title={"title"} number={0} subtitle={"subtitle"} />
      <Group3 Downloaded={"Downloaded"} number={0} images={"images"} />
      <Layout />
      <Create />
      <SaveChanges />
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
    </>
  );
};

export default file1;
