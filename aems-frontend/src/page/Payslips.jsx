import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPayslips, createSalary } from "../services/employee.service";
import { selectEmployees } from "../redux/slice/employeeSlice";

const Payslips = () => {
  const { state } = useLocation();
  const { user } = useSelector(selectEmployees);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!state) {
    return (
      <div className="text-white text-center">No Payslip Data Available</div>
    );
  }

  const {
    basicSalary,
    bonus,
    subsidy,
    penalty,
    advanceSalary,
    taxPayment,
    netSalary,
    employee,
  } = state;
  const handleSubmit = async () => {
    try {
      const response = await dispatch(
        createSalary({
          EmployeeID: employee.id,
          BasicPay: basicSalary,
          Bonuses: bonus,
          Deductions: penalty + advanceSalary + taxPayment,
          NetPay: netSalary,
          Month: (new Date().getMonth() + 1).toString(),
          Year: new Date().getFullYear().toString(),
        })
      );

      if (createSalary.fulfilled.match(response)) {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split("T")[0]; // Format the date to YYYY-MM-DD

        const response2 = await dispatch(
          createPayslips({
            EmployeeID: employee.id,
            Month: new Date().getMonth() + 1,
            Year: new Date().getFullYear(),
            GeneratedBy: user.employee_id,
            CreatedAt: formattedDate, // Use the formatted date
          })
        );

        if (createPayslips.fulfilled.match(response2)) {
          alert("Payslip created successfully");
          navigate("/dashboard");
        } else {
          alert("Failed to create payslip");
        }
      } else {
        alert("Failed to create salary");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-bold mb-6">Payslips</h1>
      <div className="bg-zinc-800 rounded-lg shadow-md w-3/4 p-6">
        {/* Employee Information */}
        <div className="grid grid-cols-2 gap-4 mb-6 bg-zinc-900 p-4 rounded-lg">
          <div>
            <p className="text-sm font-semibold text-gray-400">ID</p>
            <p className="text-lg font-bold">{employee.id}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400">Manager ID</p>
            <p className="text-lg font-bold">{employee.HRManagerID}</p>
          </div>
        </div>

        {/* Salary Details */}
        <div className="bg-zinc-900 p-4 rounded-lg">
          <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
            <p className="text-lg font-bold">Title</p>
            <p className="text-lg font-bold">Amount</p>
          </div>
          {[
            { title: "Basic Salary", amount: `${basicSalary} $` },
            { title: "Bonus", amount: `${bonus} $` },
            { title: "Subsidy", amount: `${subsidy} $` },
            { title: "Tax", amount: `-${taxPayment} $` },
            { title: "Penalty", amount: `-${penalty} $` },
            { title: "Advance Salary", amount: `-${advanceSalary} $` },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm text-gray-300 py-1"
            >
              <p>{item.title}</p>
              <p>{item.amount}</p>
            </div>
          ))}
          {/* Total */}
          <div className="flex justify-between border-t border-gray-700 pt-2 mt-2 font-bold text-lg">
            <p>TOTAL</p>
            <p>{netSalary} $</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
          Export PDF
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default Payslips;
