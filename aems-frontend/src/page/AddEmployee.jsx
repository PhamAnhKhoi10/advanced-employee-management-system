import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../services/hr.service";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Name: "",
    DepartmentID: null,
    Position: "",
    DateOfJoining: "",
    PhoneNumber: "",
    Address: "",
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

  const handleAddEmployee = () => {
    dispatch(addEmployee(formData));
  };

  return (
    <div className="p-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">Add Employee</h2>
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
              disabled
              value={formData.EmployeeID}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="E000001"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">Name *</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Position
            </label>
            <input
              type="text"
              name="Position"
              value={formData.Position}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="johndoe@example.com"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Address
            </label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="aa Street, District b, TPHCM"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="0123456789"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Salary *
            </label>
            <input
              type="text"
              name="Salary"
              value={formData.Salary}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="3000 $"
            />
          </div>
          <div>
            <label className="block text-base text-zinc-400 mb-2">
              Date of joining *
            </label>
            <input
              type="date"
              name="DateOfJoining"
              value={formData.DateOfJoining}
              onChange={handleInputChange}
              className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="yyyy-mm-dd"
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

        {/* Note Section */}
        <div className="mt-6">
          <label className="block text-base text-zinc-400 mb-2">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleInputChange}
            className="w-full p-2 bg-zinc-600 border border-zinc-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            placeholder="Description"
            rows="4"
          />
        </div>

        {/* Add Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddEmployee}
            className="bg-green-500 px-20 py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
