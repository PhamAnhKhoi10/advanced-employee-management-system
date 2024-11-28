import { Link } from "react-router-dom";
import {
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaChartBar,
  FaUserAlt,
  FaBell,
  FaUserPlus,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaDollarSign,
} from "react-icons/fa";

const Sidebar = ({ role }) => {
  const getSidebarItems = () => {
    switch (role) {
      case "Employee":
        return [
          { href: "/salary", label: "Salary", icon: FaMoneyBillAlt },
          { href: "/attendance", label: "Attendance", icon: FaCalendarAlt },
          { href: "/performance", label: "Performance", icon: FaChartBar },
          { href: "/notification", label: "Notifications", icon: FaBell },
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
          { href: "/notification", label: "Notifications", icon: FaBell },
          { href: "/employee/attendance", label: "Reports", icon: FaFileAlt },
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
            href: "/employee/create-notification",
            label: "Create Notifications",
            icon: FaEnvelopeOpenText,
          },
          {
            href: "/employee/salary",
            label: "Employee Salary",
            icon: FaDollarSign,
          },
        ];
      default:
        return [];
    }
  };

  const sidebarItems = getSidebarItems();

  return (
    <div className="bg-black text-white w-20 md:w-28 lg:w-36 h-screen flex flex-col items-center py-6 shadow-lg">
      <div className="flex-grow overflow-y-auto scrollbar-hide w-full">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded"
          >
            <item.icon className="w-8 h-8" />
            <span className="text-xs md:text-sm mt-2 text-center">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
