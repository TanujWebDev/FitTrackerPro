import React, { useState } from "react";

const SecuritySettingsCard = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    console.log("Saved Email:", email);
    console.log("Updated Password:", password);
    // 🔐 Add backend/API call here
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          🔐 Security Settings
        </h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-blue-500 hover:underline text-sm"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            disabled={!editing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            New Password
          </label>
          <input
            type="password"
            disabled={!editing}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
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

export default SecuritySettingsCard;
