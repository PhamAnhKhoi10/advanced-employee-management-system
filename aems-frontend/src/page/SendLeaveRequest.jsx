import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useForm } from "react-hook-form";
import { requestLeave } from "../services/employee.service";

const SendLeaveRequest = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectEmployees);
  const { leaveRequests } = useSelector(selectEmployees);
  const methods = useForm({
    defaultValues: {
      name: user.name,
      id: user.id,
      date: "",
      duration: "",
      reason: "",
    },
  });
  const { handleSubmit, register } = methods;
  const handleRequest = handleSubmit(async (data) => {
    console.log("object", data);
    dispatch(requestLeave(data));
  });

  return (
    <>
      {/* Header */}
      <div className="text-center m-8">
        <h2 className="text-5xl font-bold text-white">Leave Request</h2>
      </div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row bg-zinc-900 rounded-lg shadow-lg p-6 gap-7 text-white mx-14">
        {/* Form Section */}
        <div className="bg-zinc-800 p-7 rounded-lg w-full md:w-1/3">
          <form onSubmit={handleRequest}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Date:</label>
              <input
                {...register("date")}
                type="date"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Duration:</label>
              <input
                {...register("duration")}
                type="number"
                placeholder="Duration"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Reason:</label>
              <textarea
                {...register("reason")}
                placeholder="Type your reason"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-500 transition duration-300"
              >
                Submit Your Request
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="bg-zinc-800 p-6 rounded-lg w-full md:w-2/3">
          <table className="w-full text-left text-gray-300">
            {/* Will loop through each user to take their information */}
            <thead>
              <tr>
                <th className="pb-3">REASON</th>
                <th className="pb-3">DATE</th>
                <th className="pb-3">DURATION</th>
                <th className="pb-3">STATUS</th>
              </tr>
            </thead>

            <tbody>
              {leaveRequests &&
                leaveRequests.map((leaveRequest) => (
                  <>
                    <tr className="border-b border-gray-700">
                      <td className="py-2">{leaveRequest.reason}</td>
                      <td className="py-2">{leaveRequest.date}</td>
                      <td className="py-2">{leaveRequest.duration}</td>
                      <td className="py-2">{leaveRequest.status}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SendLeaveRequest;
