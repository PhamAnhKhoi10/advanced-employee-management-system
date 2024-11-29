import React, { useEffect } from 'react';

const ProfilePage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCancel = () => {
    alert("Changes canceled!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="flex items-center justify-center bg-black mt-20">
      {/* Edit Profile Form */}
      <div
        className="flex flex-col justify-center bg-[#1E1E2A] p-10 rounded-3xl shadow-lg"
        style={{ width: "800px", height: "500px" }}
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 text-center mt-[-30px] transform hover:scale-105 hover:text-indigo-400 transition duration-300" >
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 text-blue-500">
                First Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-blue-500">
                Last Name
                <span className="text-red-500">*</span>
                </label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-blue-500">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
            />
          </div>
          <div>
            <label className="block mb-1 text-blue-500">Password</label>
            <input
              type="password"
              defaultValue="******"
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
