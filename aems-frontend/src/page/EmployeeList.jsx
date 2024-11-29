import React from "react";

const EmployeeDetailsPage = () => {
    const employees = [
        { name: "Employee1", id: "E000001", position: "Employee", email: "Employee1@gmail.com" },
        { name: "Employee2", id: "H000002", position: "HR Manager", email: "HRManager1@gmail.com" },
        { name: "Employee3", id: "E000003", position: "Employee", email: "Employee2@gmail.com" },
    ];

    return (
        <div className="p-6 bg-black min-h-screen text-white">
            {/* Header */}
            <h1 className="text-5xl font-bold text-center mb-8">Employee Details</h1>

            {/* Input Section */}
            <div className="bg-[#27272a] p-4 rounded-lg flex justify-between items-center space-x-4 mb-6 max-w-5xl mx-auto">
                {/* NAME Input */}
                <div className="relative flex flex-col mb-4 w-[150px]">
                    <label htmlFor="name" className="text-blue-600 text-sm mb-1 font-bold">NAME</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John"
                        className="bg-gray-700  text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* ID Input */}
                <div className="relative flex flex-col mb-4 w-[150px]">
                    <label htmlFor="id" className="text-blue-600 text-sm mb-1 font-bold">ID</label>
                    <input
                        id="id"
                        type="text"
                        placeholder="H000002"
                        className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Position Input */}
                <div className="relative flex flex-col mb-4 w-[150px]">
                    <label htmlFor="position" className="text-blue-600 text-sm mb-1 font-bold">Position</label>
                    <input
                        id="position"
                        type="text"
                        placeholder="Employee"
                        className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email Input */}
                <div className="relative flex flex-col mb-4 w-[300px]">
                    <label htmlFor="email" className="text-blue-600 text-sm mb-1 font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Employee1@gmail.com"
                        className="bg-gray-700 text-white border border-blue-500 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Buttons */}
                <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition text-base">
                    Filter
                </button>
                <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition text-base">
                    Add
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto bg-[#161619] p-4 rounded-3xl max-w-5xl mx-auto">
                <table className="min-w-full  table-auto text-left rounded-3xl">
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
                        {employees.map((employee, index) => (
                            <tr key={index} className="hover:bg-gray-700">
                                <td className="px-6 py-4">{employee.name}</td>
                                <td className="px-6 py-4">{employee.id}</td>
                                <td className="px-6 py-4">{employee.position}</td>
                                <td className="px-6 py-4">{employee.email}</td>
                                <td className="px-6 py-4 text-center">
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline hover:text-blue-400 transition"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeDetailsPage;
