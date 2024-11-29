import React, { useState } from "react";

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    id: "E000001",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address: "aa Street, District b, TPHCM",
    phoneNumber: "0123456789",
    salary: "Employee",
    role: "Employee",
    dateOfBirth: "",
    gender: "male", // Default gender value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (action) => {
    console.log(`Action: ${action}`, formData);
  };

  const handleSendNotification = () => {
    window.location.href = "/employee/notification";
  }

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Employee Details</h2>
      </div>

      {/* Form Section */}
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 text-white">
        <div className="grid grid-cols-2 gap-6">
          {/* Form Fields */}
          <div>
            <label className="block text-sm text-zinc-400 mb-2">ID *</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Salary *</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Role *</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Gender Section */}
        <div className="mt-6">
          <label className="block text-sm text-zinc-400 mb-2">Gender</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleGenderChange}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleGenderChange}
              />
              <span>Female</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="others"
                checked={formData.gender === "others"}
                onChange={handleGenderChange}
              />
              <span>Others</span>
            </label>
          </div>
        </div>

        {/* Notification Sections */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-zinc-700 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Notifications History</h3>
            <p className="text-sm text-zinc-400">Description</p>
          </div>
          <div className="bg-zinc-700 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <p className="text-sm text-zinc-400">Description</p>
            <button className="bg-blue-500 px-4 py-2 mt-4 rounded-lg text-white hover:bg-blue-600 transition"
                onClick={handleSendNotification}
            >
              Send Notifications
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => handleSubmit("delete")}
            className="bg-red-500 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={() => handleSubmit("update")}
            className="bg-blue-500 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition"
          >
            Update
          </button>
          <button
            onClick={() => handleSubmit("cancel")}
            className="bg-zinc-700 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
