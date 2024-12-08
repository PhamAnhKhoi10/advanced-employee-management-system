import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useSelector } from "react-redux";

const CalculateSalary = () => {
  const { user } = useSelector(selectEmployees);
  const [basicSalary, setBasicSalary] = useState(1000);
  const [bonus, setBonus] = useState(1000);
  const [subsidy, setSubsidy] = useState(1000);
  const [penalty, setPenalty] = useState(1000);
  const [advanceSalary, setAdvanceSalary] = useState(1000);
  const [taxRate] = useState(0.1);
  const [userID, setUserID] = useState(null);
  const [HRManagerID, setHRManagerID] = useState(null);

  const navigate = useNavigate();

  const grossSalary = basicSalary + bonus + subsidy;
  const taxPayment = taxRate * basicSalary;
  const totalDeductions = penalty + advanceSalary + taxPayment;
  const netSalary = grossSalary - totalDeductions;

  const handleGeneratePayslip = () => {
    navigate("/payslips", {
      state: {
        basicSalary,
        bonus,
        subsidy,
        penalty,
        advanceSalary,
        taxPayment,
        grossSalary,
        totalDeductions,
        netSalary,
        employee: {
          id: userID,
          HRManagerID: HRManagerID,
        },
      },
    });
  };

  return (
    <div className="p-20">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Calculate Salary</h2>
      </div>

      {/* Employee Information */}
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 mb-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Employee Information</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">ID:</label>
            <input
              onChange={(e) => setUserID(e.target.value)}
              type="number"
              className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Manager ID</label>
            <input
              onChange={(e) => setHRManagerID(e.target.value)}
              type="number"
              placeholder="Duration"
              className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Salary and Deductions Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column: Salary Details */}
        <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Salary Details</h3>
          <div className="space-y-4">
            {["Basic Salary", "Bonus", "Subsidy"].map((label, index) => (
              <div key={index}>
                <label className="block text-sm text-zinc-400">{label}</label>
                <input
                  type="number"
                  value={
                    label === "Basic Salary"
                      ? basicSalary
                      : label === "Bonus"
                      ? bonus
                      : subsidy
                  }
                  onChange={(e) =>
                    label === "Basic Salary"
                      ? setBasicSalary(Number(e.target.value))
                      : label === "Bonus"
                      ? setBonus(Number(e.target.value))
                      : setSubsidy(Number(e.target.value))
                  }
                  className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm text-zinc-400">
                Gross Salary
              </label>
              <input
                type="number"
                value={grossSalary}
                className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Right Column: Deductions */}
        <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Deductions</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400">Tax Payment</label>
              <input
                type="text"
                value={`10% * ${basicSalary}`}
                className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500"
                disabled
              />
            </div>
            {["Penalty", "Advance Salary"].map((label, index) => (
              <div key={index}>
                <label className="block text-sm text-zinc-400">{label}</label>
                <input
                  type="number"
                  value={label === "Penalty" ? penalty : advanceSalary}
                  onChange={(e) =>
                    label === "Penalty"
                      ? setPenalty(Number(e.target.value))
                      : setAdvanceSalary(Number(e.target.value))
                  }
                  className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm text-zinc-400">
                Total Deduction
              </label>
              <input
                type="number"
                value={totalDeductions}
                className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <div className="flex items-center bg-zinc-800 rounded-xl px-4 py-2 shadow-md">
          <span className="mr-4 text-white">Net Salary</span>
          <input
            type="number"
            value={netSalary}
            className="w-32 p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 text-center text-white"
            disabled
          />
        </div>
        <button
          className="ml-4 bg-red-600 px-6 py-3 rounded-xl text-sm font-semibold text-white hover:bg-red-400 shadow-md transition duration-200 ease-in-out"
          onClick={handleGeneratePayslip}
        >
          Generate Payslip
        </button>
      </div>
    </div>
  );
};

export default CalculateSalary;
