import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAttendanceReport } from "../services/hr.service";
import { selectHr } from "../redux/slice/hrSlice";

const AttendanceReport = () => {
  const dispatch = useDispatch();
  const { attendanceReport } = useSelector(selectHr);

  const requestInformationOfEachEmployee = async (id) => {
    dispatch(requestAttendanceReport(id));
  };

  useEffect(() => {
    const requestInformation = async () => {
      for (let i = 4; i <= 20; i++) {
        await requestInformationOfEachEmployee(i);
      }
    };
    requestInformation();
  }, [dispatch]);

  const [filters, setFilters] = useState({
    name: "",
    id: null,
    status: "",
    Date: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredEmployees = attendanceReport?.filter((employee) => {
    return (
      (!filters.name ||
        employee.Name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.id || employee.EmployeeID.toString() === filters.id) &&
      (!filters.status ||
        employee.Status.toLowerCase().includes(filters.status.toLowerCase())) &&
      (!filters.Date ||
        employee.Date.toLowerCase().includes(filters.Date.toLowerCase()))
    );
  });

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-8">Attendance Report</h1>

      {/* Input Section */}
      <div className="bg-[#27272a] p-4 rounded-lg flex justify-between items-center space-x-4 mb-6 max-w-5xl mx-auto">
        {/* NAME Input */}
        <div className="relative flex flex-col mb-4 w-[150px]">
          <label
            htmlFor="name"
            className="text-blue-600 text-sm mb-1 font-bold"
          >
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={filters.name}
            onChange={handleFilterChange}
            className="bg-gray-700  text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ID Input */}
        <div className="relative flex flex-col mb-4 w-[150px]">
          <label htmlFor="id" className="text-blue-600 text-sm mb-1 font-bold">
            ID
          </label>
          <input
            id="id"
            name="id"
            type="text"
            placeholder="H000002"
            value={filters.id}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Position Input */}
        <div className="relative flex flex-col mb-4 w-[150px]">
          <label
            htmlFor="status"
            className="text-blue-600 text-sm mb-1 font-bold"
          >
            Date
          </label>
          <input
            id="Date"
            name="Date"
            type="text"
            placeholder="Employee"
            value={filters.Date}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="relative flex flex-col mb-4 w-[150px]">
          <label
            htmlFor="Status"
            className="text-blue-600 text-sm mb-1 font-bold"
          >
            Status
          </label>
          <input
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-[#161619] p-4 rounded-3xl max-w-5xl mx-auto">
        <table className="min-w-full table-auto text-left rounded-3xl">
          <thead>
            <tr className="text-white uppercase text-sm bg-[#27272a]">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Hours Worked</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.EmployeeID}
                className="hover:bg-gray-700  transition duration-100"
              >
                <td className="px-6 py-4">{employee.Name}</td>
                <td className="px-6 py-4">{employee.EmployeeID}</td>
                <td className="px-6 py-4">{employee.Date}</td>
                <td className="px-6 py-4">{employee.Status}</td>
                <td className="px-6 py-4">{employee.HoursWorked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReport;
