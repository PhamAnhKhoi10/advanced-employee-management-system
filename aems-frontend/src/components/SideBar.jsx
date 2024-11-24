import { Link } from "react-router-dom";
import {
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaChartBar,
  FaUserAlt,
  FaBell,
  FaUserPlus,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ role }) => {
  const getSidebarItems = () => {
    switch (role) {
      case "Employee":
        return [
          { href: "/salary", label: "Salary", icon: FaMoneyBillAlt },
          { href: "/attendance", label: "Attendance", icon: FaCalendarAlt },
          { href: "/performance", label: "Performance", icon: FaChartBar },
          { href: "/notifications", label: "Notifications", icon: FaBell },
        ];
      case "HR":
        return [
          { href: "/salary", label: "Salary", icon: FaMoneyBillAlt },
          { href: "/attendance", label: "Attendance", icon: FaCalendarAlt },
          { href: "/performance", label: "Performance", icon: FaChartBar },
          {
            href: "/employee/employee-info",
            label: "Emp Info",
            icon: FaUserAlt,
          },
          { href: "/notifications", label: "Notifications", icon: FaBell },
        ];
      case "Admin":
        return [
          {
            href: "/employee/create-account",
            label: "Create",
            icon: FaUserPlus,
          },
          { href: "/salary", label: "Salary", icon: FaMoneyBillAlt },
          {
            href: "/employee/create-notifications",
            label: "Create Notifications",
            icon: FaBell,
          },
          {
            href: "/employee/salary",
            label: "Employee Salary",
            icon: FaBell,
          },
        ];
      default:
        return [];
    }
  };

  const sidebarItems = getSidebarItems();

  return (
    <div className="bg-black text-white w-20 md:w-28 lg:w-36 h-screen flex flex-col items-center py-6 space-y-8 shadow-lg">
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded"
        >
          <item.icon className="w-10 h-10" />
          <span className="text-sm md:text-base mt-2">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaMoneyBillAlt, FaCalendarAlt, FaChartBar, FaUserAlt, FaBell, FaUserPlus } from "react-icons/fa";
//
// const Sidebar = ({ user }) => {
//   // Define role-specific sidebar items
//   const getSidebarItems = () => {
//     switch (user.role) {
//       case "Employee":
//         return [
//           { href: "/employee/salary", label: "Salary", icon: FaMoneyBillAlt },
//           { href: "/employee/attendance", label: "Attendance", icon: FaCalendarAlt },
//           { href: "/employee/performance", label: "Performance", icon: FaChartBar },
//           { href: "/employee/notifications", label: "Notifications", icon: FaBell },
//         ];
//       case "HR":
//         return [
//           { href: "/hr/salary", label: "Salary", icon: FaMoneyBillAlt },
//           { href: "/hr/attendance", label: "Attendance", icon: FaCalendarAlt },
//           { href: "/hr/performance", label: "Performance", icon: FaChartBar },
//           { href: "/hr/employee-info", label: "Emp Info", icon: FaUserAlt },
//           { href: "/hr/notifications", label: "Notifications", icon: FaBell },
//         ];
//       case "Admin":
//         return [
//           { href: "/admin/create-account", label: "Create", icon: FaUserPlus },
//           { href: "/admin/salary", label: "Salary", icon: FaMoneyBillAlt },
//           { href: "/admin/notifications", label: "Notifications", icon: FaBell },
//         ];
//       default:
//         return [];
//     }
//   };

//   const sidebarItems = getSidebarItems();

//   return (
//     <div className="bg-black text-white w-20 md:w-28 lg:w-36 h-screen flex flex-col items-center py-6 space-y-8 shadow-lg">
//       {sidebarItems.map((item, index) => (
//         <Link
//           key={index}
//           to={item.href}
//           className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded"
//         >
//           <item.icon className="w-10 h-10" />
//           <span className="text-sm md:text-base mt-2">{item.label}</span>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;
