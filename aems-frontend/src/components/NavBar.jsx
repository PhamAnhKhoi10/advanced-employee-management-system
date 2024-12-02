import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";

// eslint-disable-next-line react/prop-types
const NavBar = ({ role }) => {
  const { user } = useSelector(selectEmployees);
  const getNavItems = () => {
    switch (role) {
      case "HR":
        return [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/request-leave", label: "Request Leave" },
          { href: "/profile", label: "Profile" },
        ];
      case "Employee":
        return [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/request-leave", label: "Request Leave" },
          { href: "/profile", label: "Profile" },
        ];
      case "Admin":
        return [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/profile", label: "Profile" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-9">
        <a
          href="/dashboard"
          className="text-xl font-bold hover:text-gray-400 transition duration-300 ease-in-out"
        >
          IU Management
        </a>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li className="hover:scale-110 transition duration-300" key={index}>
              <a
                href={item.href}
                className="text-white transition duration-300 ease-in-out transform hover:text-gray-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - User Info */}
      {role && (
        <div className="flex items-center space-x-4">
          {/* Placeholder User Info */}
          <div className="text-sm">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
          {/* Sign Out Button */}
          <div className="flex items-center">
            <button
              onClick={() => alert("No user logged in")}
              className="px-4 py-2 bg-black text-blue-500 border border-blue-700 rounded hover:bg-gray-700 hover:text-white transition"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// const NavBar = ({ user }) => {
//   const getNavItems = () => {
//     switch (user.role) {
//       case "HR":
//         return [
//           { href: "/hr/dashboard", label: "Dashboard" },
//           { href: "/hr/request-leave", label: "Request Leave" },
//           { href: "/hr/profile", label: "Profile" },
//         ];
//       case "Employee":
//         return [
//           { href: "/employee/dashboard", label: "Dashboard" },
//           { href: "/employee/request-leave", label: "Request Leave" },
//           { href: "/employee/profile", label: "Profile" },
//         ];
//       case "Admin":
//         return [
//           { href: "/admin/dashboard", label: "Dashboard" },
//           { href: "/admin/profile", label: "Profile" },
//         ];
//       default:
//         return [];
//     }
//   };

//   const navItems = getNavItems();

//   return (
//     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
//       {/* Left Section - Logo */}
//       <div className="flex items-center space-x-9">
//         <a
//           href="/"
//           className="text-xl font-bold hover:text-gray-400 transition duration-300 ease-in-out"
//         >
//           IU Management
//         </a>
//         <ul className="hidden md:flex space-x-8">
//           {navItems.map((item, index) => (
//             <li className="hover:scale-110 transition duration-300" key={index}>
//               <a
//                 href={item.href}
//                 className="text-white transition duration-300 ease-in-out transform hover:text-gray-400"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Section - User Info */}
//       {role && (
//         <div className="flex items-center space-x-4">
//           {/* Placeholder User Info */}
//           <div className="text-sm">
//             <p className="font-semibold">user.name</p>
//             <p className="text-gray-400">user.department</p>
//           </div>
//           {/* Sign Out Button */}
//           <div className="flex items-center">
//             <button
//               onClick={() => alert("No user logged in")}
//               className="px-4 py-2 bg-black text-blue-500 border border-blue-700 rounded hover:bg-gray-700 hover:text-white transition"
//             >
//               Sign out
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
