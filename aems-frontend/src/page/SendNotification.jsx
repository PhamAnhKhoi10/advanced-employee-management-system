import React, { useState } from "react";

const SendNotification = () => {
    const [recipients, setRecipients] = useState("");
    const [subject, setSubject] = useState("");
    const [messageContent, setMessageContent] = useState("");

    // Notification history starts empty
    const [notificationHistory, setNotificationHistory] = useState([]);

    // Handle form submission
    const handleSend = () => {
        if (recipients && subject && messageContent) {
            const newNotification = {
                recipient: recipients,
                subject: subject,
                message: messageContent,
                timestamp: new Date().toLocaleString(),
                status: "Sent", // Add status field
            };

            // Add new notification to history
            setNotificationHistory((prevHistory) => [newNotification, ...prevHistory]);

            // Clear form fields
            setRecipients("");
            setSubject("");
            setMessageContent("");
        } else {
            alert("Please fill in all fields before sending.");
        }
    };

    return (
        <div className="p-10">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h2 className="text-5xl font-bold text-white">Notifications</h2>
            </div>

            {/* Notification Form */}
            <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 mb-8 text-white">
                <div className="grid grid-cols-2 gap-7 mb-4">
                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">
                            Select Recipients
                        </label>
                        <input
                            type="text"
                            value={recipients}
                            onChange={(e) => setRecipients(e.target.value)}
                            className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200 focus:scale-105"
                            placeholder="Enter recipient names"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Subject</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200 focus:scale-105"
                            placeholder="Enter subject"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-zinc-400 mb-1">
                        Message Content
                    </label>
                    <textarea
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        className="w-full max-w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition transform duration-200 focus:scale-105 resize-none"
                        placeholder="Enter your message here"
                        rows="4"
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSend}
                        className="bg-blue-500 px-9 py-3 rounded-xl text-base font-semibold hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </div>
            </div>

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
                                <th className="py-2 px-4">Timestamp</th>
                                <th className="py-2 px-4">Status</th> {/* Add Status column */}
                            </tr>
                        </thead>
                        <tbody>
                            {notificationHistory.map((notification, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-zinc-700 transition duration-200"
                                >
                                    <td className="py-2 px-4">{notification.recipient}</td>
                                    <td className="py-2 px-4">{notification.subject}</td>
                                    <td className="py-2 px-4">
                                        <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-lg">
                                            {notification.message}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">{notification.timestamp}</td>
                                    <td className="py-2 px-4">{notification.status}</td> {/* Display Status */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-zinc-400">No notifications sent yet.</p>
                )}
            </div>
        </div>
    );
};

export default SendNotification;
