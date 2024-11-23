// import React from 'react';

// const NavBar = ({ user }) => {
//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
//       {/* Left Section - Logo */}
//       <div className="flex items-center space-x-4">
//         <h1 className="text-xl font-bold">IU Management</h1>
//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <a href="/dashboard" className="hover:text-gray-300">
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="/request-leave" className="hover:text-gray-300">
//               Request Leave
//             </a>
//           </li>
//           <li>
//             <a href="/profile" className="hover:text-gray-300">
//               Profile
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Right Section - User Info */}
//       <div className="flex items-center space-x-4">
//         {/* User Image */}
//         <img
//           src={user.image}
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         {/* User Info */}
//         <div className="text-sm">
//           <p className="font-semibold">{user.name}</p>
//           <p className="text-gray-400">@{user.username}</p>
//         </div>
//         {/* Sign Out Button */}
//         <button
//           onClick={user.signOut}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Sign out
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// Design of the nav bar - with no user info
import React from 'react';

const AdminNavbar = () => {
  return (
    <nav className="border-b border-gray-500 bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-9">
        <h1 className="text-xl font-bold">IU Management</h1>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/admin/dashboard" className="hover:text-gray-400 hover">
              Dashboard
            </a>
          </li>

          <li>
            <a href="admin/profile" className="hover:text-gray-400">
              Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section - User Info */}
      <div className="flex items-center space-x-4">
        {/* Placeholder User Image */}
        <img
          src="https://vnn-imgs-f.vgcloud.vn/2021/01/21/08/thieu-bao-tram-la-ai-10.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* Placeholder User Info */}
        <div className="text-sm">
          <p className="font-semibold">Thieu Bao Tram</p>
          <p className="text-gray-400">@msthanhxuan</p>
        </div>
        {/* Sign Out Button */}
        <div className='flex items-center'>
            <button
                onClick={() => alert('No user logged in')}
                className="mr- px-4 py-2 bg-black text-blue-500 border border-blue-700 rounded hover:bg-gray-700 hover:text-white transition mr-6"
            >
                Sign out
            </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
