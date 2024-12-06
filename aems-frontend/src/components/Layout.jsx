import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { user } = useSelector(selectEmployees);

  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <div className="w-full">
        <NavBar roleID={user?.roleID} /> {/* Fixed at top */}
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="h-full">
          <Sidebar roleID={user?.roleID} /> {/* Fixed at left side */}
        </div>
        <main className="flex-1 overflow-auto bg-[#000000]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
