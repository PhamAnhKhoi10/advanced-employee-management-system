import React, { useState } from "react";

const LeaveRequestApproval = () => {
  const [requests, setRequests] = useState([
    { id: 1, reason: "Sick", date: "5-10-2024", duration: "1 day" },
    { id: 2, reason: "Stomach ache", date: "12-10-2024", duration: "1 day" },
    { id: 3, reason: "Lazy", date: "31-10-2024", duration: "7 days" },
  ]);

  const [actionNotification, setActionNotification] = useState({});

  const handleAction = (id, action) => {
    // Show notification message
    setActionNotification({
      id,
      message: `Request ${action}`,
      color: action === "Approved" ? "text-green-500" : "text-red-500",
    });

    // Shorter delay before removing the row
    setTimeout(() => {
      setRequests((prev) => prev.filter((req) => req.id !== id));
      setActionNotification({});
    }, 1000); // 1 second transition
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
              <th className="py-3 px-6">Reason</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Duration</th>
              <th className="py-3 px-6 text-center">Approval</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="hover:bg-zinc-700 transition duration-200"
              >
                <td className="py-4 px-6">{req.reason}</td>
                <td className="py-4 px-6">{req.date}</td>
                <td className="py-4 px-6">{req.duration}</td>
                <td className="py-4 px-6 text-center">
                  {actionNotification.id === req.id ? (
                    <span
                      className={`font-semibold ${actionNotification.color}`}
                    >
                      {actionNotification.message}
                    </span>
                  ) : (
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleAction(req.id, "Approved")}
                        className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(req.id, "Rejected")}
                        className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
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
