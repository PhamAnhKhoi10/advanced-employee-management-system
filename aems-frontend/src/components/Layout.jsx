import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";

const Layout = ({ children }) => {
    const {user} = useSelector(selectEmployees);
    // if (!user) {
    //     console.log("User not found");
    //     return <div>Loading...</div>;
    // } 
    return (
    <div>
        <NavBar />
        <Sidebar />
        <main>{children}</main>
    </div>
    );
};

export default Layout;