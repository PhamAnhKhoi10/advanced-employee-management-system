import React, { useState } from 'react';

const AttendanceReport = ({ attendanceData = [
    { id: 1, name: "Tra Sua Dai Loan", date: "20-11-2024", status: "Absent", remarks: "Request Approved" },
    { id: 2, name: "Banh Bao Nhan Thit", date: "20-11-2024", status: "Present", remarks: "Late" },
    { id: 3, name: "Thieu Bao Tram", date: "20-11-2024", status: "Absent", remarks: "No Approval" },
    { id: 1, name: "Tra Sua Dai Loan", date: "19-11-2024", status: "Absent", remarks: "Request Approved" },
    { id: 2, name: "Banh Bao Nhan Thit", date: "19-11-2024", status: "Present", remarks: "Late" },
    { id: 3, name: "Thieu Bao Tram", date: "19-11-2024", status: "Absent", remarks: "No Approval" },
] }) => {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    date: '',
    status: '',
    remarks: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filteredData = attendanceData.filter((item) => {
    return (
      (filters.id === '' || item.id.toString().includes(filters.id)) &&
      (filters.name === '' || item.name?.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.date === '' || item.date?.includes(filters.date)) &&
      (filters.status === '' || item.status?.toLowerCase().includes(filters.status.toLowerCase())) &&
      (filters.remarks === '' || item.remarks?.toLowerCase().includes(filters.remarks.toLowerCase()))
    );
  });

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
        {filteredData.length > 0 ? (
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
                {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-700 transition duration-200">
                    <td className="py-2 px-4">{item.id || '-'}</td>
                    <td className="py-2 px-4">{item.name || '-'}</td>
                    <td className="py-2 px-4">{item.date || '-'}</td>
                    <td className="py-2 px-4">{item.status || '-'}</td>
                    <td className="py-2 px-4">{item.remarks || '-'}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p className="text-center text-zinc-400">No attendance records found.</p>
        )}
        </div>
    </div>
  );
};

export default AttendanceReport;
