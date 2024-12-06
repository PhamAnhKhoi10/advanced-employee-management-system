import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { requestProfileEdit } from "../services/employee.service";

const ProfilePage = () => {
  const { user } = useSelector(selectEmployees);
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({
    id: user.employee_id,
    Name: user.name,
    Position: user.position,
    PhoneNumber: user.phone_number,
    Address: user.address,
  });

  useEffect(() => {
    setProfileData({
      id: user.employee_id,
      Name: user.name,
      Position: user.position,
      PhoneNumber: user.phone_number,
      Address: user.address,
    });
  }, [user, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setProfileData({
      id: user.employee_id,
      Name: user.name,
      Position: user.position,
      PhoneNumber: user.phone_number,
      Address: user.address,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(requestProfileEdit(profileData));
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
        <form onSubmit={handleEdit} className="w-full space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-extrabold mb-1 text-blue-500">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Name"
                value={profileData.Name}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
            <div className="flex-1">
              <label className="block font-extrabold mb-1 text-blue-500">
                Position
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Position"
                value={profileData.Position}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
              />
            </div>
          </div>
          <div>
            <label className="block font-extrabold mb-1 text-blue-500">
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="PhoneNumber"
              value={profileData.PhoneNumber}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#2B2B3C] text-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#353546] transition"
            />
          </div>
          <div>
            <label className="block font-extrabold mb-1 text-blue-500">
              Address
            </label>
            <input
              name="address"
              value={profileData.Address}
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
