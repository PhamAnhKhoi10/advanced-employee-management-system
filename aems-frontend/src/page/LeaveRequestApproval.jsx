import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHr } from "../redux/slice/hrSlice";
import {
  requestLeaveRequests,
  updateLeaveRequest,
} from "../services/hr.service";

const LeaveRequestApproval = () => {
  const { employeePerRecord } = useSelector(selectHr);
  const dispatch = useDispatch();

  const requestInformation = async () => {
    for (let i = 2; i <= 20; i++) {
      dispatch(requestLeaveRequests(i));
    }
  };
  console.log(employeePerRecord);
  useEffect(() => {
    requestInformation();
  }, []);

  const approveRequest = async (body) => {
    const response = await dispatch(
      updateLeaveRequest({
        LeaveRequestID: body.LeaveRequestID,
        Status: body.Status,
        Reason: body.Reason,
      })
    );
    if (response.meta.requestStatus === "fulfilled") {
      requestInformation();
    }
  };

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Leave Request</h2>
      </div>

      {/* Requests Table */}
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 text-white max-w-4xl mx-auto">
        <table className="w-full text-left text-base text-zinc-400">
          <thead className="text-zinc-300 bg-zinc-700">
            <tr>
              <th className="py-3 px-6">Employee Name</th>
              <th className="py-3 px-6">Reason</th>
              <th className="py-3 px-6">Start Date</th>
              <th className="py-3 px-6">End Date</th>
              <th className="py-3 px-6 text-center">Approval</th>
            </tr>
          </thead>
          <tbody>
            {employeePerRecord?.LeaveRequests?.map((req) => (
              <tr
                key={req.LeaveRequestID}
                className="hover:bg-zinc-700 transition duration-200"
              >
                <td className="py-4 px-6">{req.Name}</td>
                <td className="py-4 px-6">{req.Reason}</td>
                <td className="py-4 px-6">{req.StartDate}</td>
                <td className="py-4 px-6">{req.EndDate}</td>
                <td className="py-4 px-6 text-center">
                  {req.Status === "Pending" && (
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          approveRequest({
                            LeaveRequestID: req.LeaveRequestID,
                            Status: "Approved",
                            Reason: req.Reason,
                          })
                        }
                        className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() =>
                          approveRequest({
                            LeaveRequestID: req.LeaveRequestID,
                            Status: "Rejected",
                            Reason: req.Reason,
                          })
                        }
                        className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {employeePerRecord?.LeaveRequests?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-zinc-400">
                  No Leave Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestApproval;
