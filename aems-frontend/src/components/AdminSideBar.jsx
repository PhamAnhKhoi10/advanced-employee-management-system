import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaMoneyBillAlt, FaBell} from 'react-icons/fa';

const AdminSideBar = () => {
  return (
    <div className="border-r border-gray-500 bg-black text-white w-20 md:w-28 lg:w-36 h-screen flex flex-col items-center py-6 space-y-8 shadow-lg">
      {/* Create Account */}
      <Link
        to="/admin/create-account"
        className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded"
      >
        <FaUserPlus className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Create</span>
      </Link>

      <Link to="/admin/salary" className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded">
        <FaMoneyBillAlt className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Salary</span>
      </Link>

      <Link to="/admin/notifications" className='flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded'>
        <FaBell className='w-10 h-10' />
        <span className='text-sm md:text-base mt-2'>Notifications</span>
      </Link>
    </div>
  );
};

export default AdminSideBar;
