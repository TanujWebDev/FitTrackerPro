import React, { useState } from "react";

const ProfileInfoCard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Tanuj",
    age: 22,
    gender: "Male",
    height: 175, // in cm
    weight: 76, // in kg
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    // API call or localStorage saving logic can be added here
    console.log("Saved info:", userInfo);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          👤 Profile Info
        </h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-blue-500 hover:underline text-sm"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            disabled={!editing}
            value={userInfo.name}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white`}
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Age
          </label>
          <input
            type="number"
            name="age"
            disabled={!editing}
            value={userInfo.age}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white`}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Gender
          </label>
          <select
            name="gender"
            disabled={!editing}
            value={userInfo.gender}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white`}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Height (cm)
          </label>
          <input
            type="number"
            name="height"
            disabled={!editing}
            value={userInfo.height}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white`}
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            disabled={!editing}
            value={userInfo.weight}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white`}
          />
        </div>

        {editing && (
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfoCard;
