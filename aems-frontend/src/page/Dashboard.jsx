import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";

function Dashboard() {
  return (
    <>
      <NavBar role={"Employee"}/>
      <Sidebar role={"Employee"}/>
    </>
  );
}

export default Dashboard;