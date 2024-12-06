import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useEffect } from "react";
import { requestSalary } from "../services/employee.service";

const UserSalary = () => {
  const { user, salary } = useSelector(selectEmployees);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(requestSalary(user.employee_id));
    }
  }, [user, dispatch]);
  // Mock data (to be replaced with data from backend)

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
            <span>${salary[0]?.BasicPay ?? ""}</span>
          </div>
          <div className="flex justify-between text-base text-zinc-400 mb-2">
            <span>Allowances</span>
            <span>${salary[0]?.Bonuses ?? ""}</span>
          </div>
          <div className="flex justify-between text-base text-zinc-400 mb-2">
            <span>Deductions</span>
            <span>${salary[0]?.Deductions ?? ""}</span>
          </div>
          <div className="flex justify-between text-base text-white font-bold mt-4">
            <span>Net Salary</span>
            <span>${salary[0]?.NetPay ?? ""}</span>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-6">
          <table className="w-full text-left text-base text-zinc-400">
            <thead className="text-zinc-300 bg-zinc-700">
              <tr>
                <th className="py-2 px-4">Month</th>
                <th className="py-2 px-4">Salary</th>
              </tr>
            </thead>
            <tbody>
              {salary?.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-700 transition duration-200"
                >
                  <td className="py-2 px-4">{item.Month}</td>
                  <td className="py-2 px-4">${item.NetPay}</td>
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
