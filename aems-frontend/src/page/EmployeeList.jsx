import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { requestEmployeeList } from "../services/hr.service";
import { selectHr } from "../redux/slice/hrSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectEmployees);
  const { employeeList } = useSelector(selectHr);

  useEffect(() => {
    if (user.role !== "HR") {
      alert("You are not authorized to view this page");
      navigate("/");
    } else {
      dispatch(requestEmployeeList());
    }
  }, [user, dispatch]);

  const [filters, setFilters] = useState({
    name: "",
    id: "",
    position: "",
    email: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredEmployees = employeeList?.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      employee.id.toLowerCase().includes(filters.id.toLowerCase()) &&
      employee.position
        .toLowerCase()
        .includes(filters.position.toLowerCase()) &&
      employee.email.toLowerCase().includes(filters.email.toLowerCase())
    );
  });

  const handleView = (id) => {
    navigate(`/employee/details/${id}`); // Navigate to EmployeeDetails with the ID
  };

  const handleAdd = () => {
    navigate("/employee/add"); // Navigate to AddEmployee page
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-8">Employee Details</h1>

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
            htmlFor="position"
            className="text-blue-600 text-sm mb-1 font-bold"
          >
            Position
          </label>
          <input
            id="position"
            name="position"
            type="text"
            placeholder="Employee"
            value={filters.position}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="relative flex flex-col mb-4 w-[300px]">
          <label
            htmlFor="email"
            className="text-blue-600 text-sm mb-1 font-bold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Employee1@gmail.com"
            value={filters.email}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={handleAdd}
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition text-base"
        >
          Add Employee
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-[#161619] p-4 rounded-3xl max-w-5xl mx-auto">
        <table className="min-w-full table-auto text-left rounded-3xl">
          <thead>
            <tr className="text-white uppercase text-sm bg-[#27272a]">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees &&
              filteredEmployees.map((employee, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700  transition duration-100"
                >
                  <td className="px-6 py-4">{employee.name}</td>
                  <td className="px-6 py-4">{employee.id}</td>
                  <td className="px-6 py-4">{employee.position}</td>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleView(employee.id)}
                      className="text-blue-500 hover:underline hover:text-blue-400 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
