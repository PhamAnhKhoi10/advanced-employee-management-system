import React from "react";
import { useLocation } from "react-router-dom";

const Payslips = () => {
    const { state } = useLocation();

    if (!state) {
        return <div className="text-white text-center">No Payslip Data Available</div>;
    }

    const {
        basicSalary,
        bonus,
        subsidy,
        penalty,
        advanceSalary,
        taxPayment,
        grossSalary,
        totalDeductions,
        netSalary,
        employee,
    } = state;

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
                        <p className="text-sm font-semibold text-gray-400">Age</p>
                        <p className="text-lg font-bold">{employee.age}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-400">Name</p>
                        <p className="text-lg font-bold">{employee.name}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-400">Position</p>
                        <p className="text-lg font-bold">{employee.position}</p>
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
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                    Payment
                </button>
            </div>
        </div>
    );
};

export default Payslips;
