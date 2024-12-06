import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectHr } from "../redux/slice/hrSlice";
import {
  deleteEmployee,
  requestEmployeeDetails,
  updateEmployeeDetails,
} from "../services/hr.service";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Extract the employee ID from the URL
  const dispatch = useDispatch();
  const { employee } = useSelector(selectHr);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [setFormData, employee]);

  // Fetch employee details based on the ID
  useEffect(() => {
    if (id) {
      dispatch(requestEmployeeDetails(id));
    }
  }, [id, dispatch]);

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

  const handleUpdate = (data) => {
    dispatch(updateEmployeeDetails(data));
  };
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    setTimeout(() => {
      navigate("/employee/employee-info");
    }, 1000);
  };
  const handleSendNotification = () => {
    window.location.href = "/employee/notification";
  };

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
            <label className="block text-base text-zinc-400 mb-2">ID *</label>
            <input
              type="text"
              name="EmployeeID"
              value={formData?.EmployeeID}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              disabled
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="Name"
              value={formData?.Name}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Position
            </label>
            <input
              type="text"
              name="Position"
              value={formData?.Position}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="Email"
              value={formData?.Email}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Address
            </label>
            <input
              type="text"
              name="Address"
              value={formData?.Address}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              value={formData?.PhoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Salary *
            </label>
            <input
              type="text"
              name="salary"
              value={formData?.salary}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">Role *</label>
            <input
              type="text"
              name="role"
              value={formData?.role}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Gender Section */}
        <div className="mt-6">
          <label className="block text-base text-zinc-400 mb-2">Gender</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData?.gender === "male"}
                onChange={handleGenderChange}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData?.gender === "female"}
                onChange={handleGenderChange}
              />
              <span>Female</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="others"
                checked={formData?.gender === "others"}
                onChange={handleGenderChange}
              />
              <span>Others</span>
            </label>
          </div>
        </div>

        {/* Notification Sections */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-zinc-700 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">
              Notifications History
            </h3>
            <p className="text-sm text-zinc-400">Description</p>
          </div>
          <div className="bg-zinc-700 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <p className="text-sm text-zinc-400">Description</p>
            <button
              className="bg-blue-500 px-4 py-2 mt-4 rounded-lg text-white hover:bg-blue-600 transition"
              onClick={handleSendNotification}
            >
              Send Notifications
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => handleDelete(formData.id)}
            className="bg-red-500 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={() => handleUpdate(formData)}
            className="bg-blue-500 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition"
          >
            Update
          </button>
          <button
            onClick={() => {
              navigate("/employee/employee-info");
            }}
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
