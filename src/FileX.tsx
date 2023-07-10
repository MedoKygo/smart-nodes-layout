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
    </>
  );
};

export default file1;
