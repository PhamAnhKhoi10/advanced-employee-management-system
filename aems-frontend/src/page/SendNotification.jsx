import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { sendNotification } from "../services/admin.service";

const SendNotification = () => {
  const [notificationHistory, setNotificationHistory] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector(selectEmployees);
  const methods = useForm({
    defaultValues: {
      SenderID: user.employee_id,
      RecipientID: null,
      Title: "",
      Content: "",
    },
  });

  const { handleSubmit, register } = methods;

  const SendNotification = handleSubmit(async (data) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    dispatch(sendNotification({ ...data, SentAt: formattedDate }));
    setNotificationHistory((prev) => [
      ...prev,
      {
        RecipientID: data.RecipientID,
        Title: data.Title,
        Content: data.Content,
        Status: "Sent", // Add Status to the notification
      },
    ]);
  });

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Notifications</h2>
      </div>

      {/* Notification Form */}
      <form
        onSubmit={SendNotification}
        className="bg-zinc-800 rounded-2xl shadow-lg p-6 mb-8 text-white"
      >
        <div className="grid grid-cols-2 gap-7 mb-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">
              Select Recipients
            </label>
            <input
              {...register("RecipientID")}
              type="number"
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200"
              placeholder="Enter recipient ID"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Subject</label>
            <input
              {...register("Title")}
              type="text"
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200"
              placeholder="Enter subject"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Message Content
          </label>
          <textarea
            {...register("Content")}
            className="w-full max-w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200"
            placeholder="Enter your message here"
            rows="4"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 px-9 py-3 rounded-xl text-base font-semibold hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>

      {/* Notification History */}
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Notification History</h3>
        {notificationHistory.length > 0 ? (
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="text-zinc-300 bg-zinc-700">
              <tr>
                <th className="py-2 px-4">Recipient</th>
                <th className="py-2 px-4">Subject</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Status</th> {/* Add Status column */}
              </tr>
            </thead>
            <tbody>
              {notificationHistory.map((notification, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-700 transition duration-200"
                >
                  <td className="py-2 px-4">{notification.RecipientID}</td>
                  <td className="py-2 px-4">{notification.Title}</td>
                  <td className="py-2 px-4">
                    <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-lg">
                      {notification.Content}
                    </span>
                  </td>
                  <td className="py-2 px-4">{notification.Status}</td>{" "}
                  {/* Display Status */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-zinc-400">
            No notifications sent yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default SendNotification;
