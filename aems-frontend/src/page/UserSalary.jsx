import React from "react";

const UserSalary = () => {
  // Mock data (to be replaced with data from backend)
  const salarySummary = {
    basicSalary: 2000,
    allowances: 100,
    deductions: -300,
    netSalary: 1800,
  };

  const salaryHistory = [
    { month: "October", salary: 1800, status: "Pending" },
    { month: "September", salary: 1800, status: "Paid" },
    { month: "August", salary: 1500, status: "Paid" },
  ];

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Your Salary</h2>
      </div>

      {/* Summary Section */}
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 text-white max-w-md mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <div className="flex justify-between text-base text-zinc-400 mb-2">
            <span>Basic Salary</span>
            <span>${salarySummary.basicSalary}</span>
          </div>
          <div className="flex justify-between text-base text-zinc-400 mb-2">
            <span>Allowances</span>
            <span>${salarySummary.allowances}</span>
          </div>
          <div className="flex justify-between text-base text-zinc-400 mb-2">
            <span>Deductions</span>
            <span>${salarySummary.deductions}</span>
          </div>
          <div className="flex justify-between text-base text-white font-bold mt-4">
            <span>Net Salary</span>
            <span>${salarySummary.netSalary}</span>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-6">
          <table className="w-full text-left text-base text-zinc-400">
            <thead className="text-zinc-300 bg-zinc-700">
              <tr>
                <th className="py-2 px-4">Month</th>
                <th className="py-2 px-4">Salary</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistory.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-700 transition duration-200">
                  <td className="py-2 px-4">{item.month}</td>
                  <td className="py-2 px-4">${item.salary}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      item.status === "Pending" ? "text-yellow-400" : "text-green-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSalary;
