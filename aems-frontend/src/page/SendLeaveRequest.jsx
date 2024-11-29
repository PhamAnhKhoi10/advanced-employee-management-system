import React from 'react';

const SendLeaveRequest = () => {
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
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Name:</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Date:</label>
              <input
                type="date"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Duration:</label>
              <input
                type="text"
                placeholder="Duration"
                className="w-full p-3 bg-zinc-700 g-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Reason:</label>
              <textarea
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
                <th className="pb-3"> </th>
                <th className="pb-3">REASON</th>
                <th className="pb-3">DATE</th>
                <th className="pb-3">DURATION</th>
                <th className="pb-3">APPROVE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2">
                  <input type="radio" name="request" />
                </td>
                <td className="py-2">Sick</td>
                <td className="py-2">5/10/2024</td>
                <td className="py-2">5 days</td>
                <td className="py-2 text-green-500">Approved</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">
                  <input type="radio" name="request" />
                </td>
                <td className="py-2">Take Kid to School</td>
                <td className="py-2">12/10/2024</td>
                <td className="py-2">2 days</td>
                <td className="py-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2">
                  <input type="radio" name="request" />
                </td>
                <td className="py-2">Lazy</td>
                <td className="py-2">31/10/2024</td>
                <td className="py-2">7 days</td>
                <td className="py-2 text-red-500">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SendLeaveRequest;