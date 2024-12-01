/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { selectHr } from "../redux/slice/hrSlice";
import { useDispatch, useSelector } from "react-redux";
import { requestAttendanceReport } from "../services/hr.service";

const AttendanceReport = () => {
  const dispatch = useDispatch();
  const { attendanceReport } = useSelector(selectHr);
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    date: "",
    status: "",
    remarks: "",
  });

  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [filters]);

  useEffect(() => {
    dispatch(requestAttendanceReport(debouncedFilters));
  }, [debouncedFilters, dispatch]);

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Attendance Report</h2>
      </div>

      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 text-white">
        {/* Filter Inputs */}
        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            name="id"
            value={filters.id}
            onChange={handleFilterChange}
            placeholder="Filter by ID"
            className="bg-zinc-700 text-base px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Filter by Name"
            className="bg-zinc-700 text-base px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            placeholder="Filter by Date"
            className="bg-zinc-700 text-base px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            placeholder="Filter by Status"
            className="bg-zinc-700 text-base px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="remarks"
            value={filters.remarks}
            onChange={handleFilterChange}
            placeholder="Filter by Remarks"
            className="bg-zinc-700 text-base px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Attendance Table */}
        {attendanceReport.length > 0 ? (
          <table className="w-full text-left text-base text-zinc-400">
            <thead className="text-zinc-300 bg-zinc-700">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Employee Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {attendanceReport.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-700 transition duration-200"
                >
                  <td className="py-2 px-4">{item.id || "-"}</td>
                  <td className="py-2 px-4">{item.name || "-"}</td>
                  <td className="py-2 px-4">{item.date || "-"}</td>
                  <td className="py-2 px-4">{item.status || "-"}</td>
                  <td className="py-2 px-4">{item.remarks || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-zinc-400">
            No attendance records found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AttendanceReport;
