import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchProfileData = async () => {
      const mockData = {
        firstName: "John",
        lastName: "Terry",
        email: "johnterry@example.com",
        password: "******", // Placeholder password
      };
      setProfileData(mockData);
    };

    fetchProfileData();

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    alert("Changes canceled!");
    // Optionally, reset form data to the original fetched data
    const resetData = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "******",
    };
    setProfileData(resetData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
    // Simulate sending updated data to the backend
    console.log("Updated Profile Data:", profileData);
  };

  return (
    <div className="flex items-center justify-center bg-black mt-20">
      {/* Edit Profile Form */}
      <div
        className="flex flex-col justify-center bg-[#18181b] p-10 rounded-3xl shadow-lg"
        style={{ width: "800px", height: "500px" }}
      >
        <h2 className="text-5xl text-white font-extrabold mb-6 text-center mt-[-30px]">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-extrabold mb-1 text-blue-500">
                First Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
            <div className="flex-1">
              <label className="block font-extrabold mb-1 text-blue-500">
                Last Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
          </div>
          <div>
            <label className="block font-extrabold mb-1 text-blue-500">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
            />
          </div>
          <div>
            <label className="block font-extrabold mb-1 text-blue-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-[#4A90E2] text-white py-2 px-6 rounded-lg hover:bg-blue-600 hover:scale-105 transition transform duration-300"
            >
              Update
            </button>
            <button
              type="button"
              className="bg-[#E94E77] text-white py-2 px-6 rounded-lg hover:bg-red-600 hover:scale-105 transition transform duration-300"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
