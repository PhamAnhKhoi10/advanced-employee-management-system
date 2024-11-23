import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyBillAlt, FaCalendarAlt, FaChartBar, FaUserAlt, FaBell } from 'react-icons/fa';

const HRSidebar = () => {
  return (
    <div className="border-r border-gray-500 bg-black text-white w-20 md:w-28 lg:w-36 h-screen flex flex-col items-center py-6 space-y-8 shadow-lg">
      {/* Salary */}
      <Link to="hr/salary" className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded">
        <FaMoneyBillAlt className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Salary</span>
      </Link>

      {/* Attendance Report */}
      <Link to="/hr/attendance" className="flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded">
        <FaCalendarAlt className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Attendance</span>
      </Link>

      {/* Employee Performance */}
      <Link to="/hr/performance" className="flex flex-col items-center hover:bg-zinc-800 hover:transition hover:scale-110 p-4 rounded">
        <FaChartBar className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Performance</span>
      </Link>

      {/* Employee Info */}
      <Link to="/hr/employee-info" className="flex flex-col items-center hover:bg-zinc-800 hover:transition hover:scale-110 p-4 rounded">
        <FaUserAlt className="w-10 h-10" />
        <span className="text-sm md:text-base mt-2">Emp Info</span>
      </Link>

      <Link to="/hr/notifications" className='flex flex-col items-center hover:bg-zinc-800 hover:transition p-4 hover:scale-110 rounded'> 
        <FaBell className='w-10 h-10' />
        <span className='text-sm md:text-base mt-2'>Notifications</span>  
      </Link>
    </div>
  );
};

export default HRSidebar;
