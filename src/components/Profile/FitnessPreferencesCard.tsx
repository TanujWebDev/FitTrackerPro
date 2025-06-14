import React, { useState } from "react";

const FitnessPreferencesCard = () => {
  const [preferences, setPreferences] = useState({
    goal: "Lose Fat",
    level: "Beginner",
    workoutTime: "Morning",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    console.log("Saved preferences:", preferences);
    // Add localStorage or API call here if needed
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          🏋️ Fitness Preferences
        </h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-blue-500 hover:underline text-sm"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Goal
          </label>
          <select
            name="goal"
            disabled={!editing}
            value={preferences.goal}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option>Lose Fat</option>
            <option>Gain Muscle</option>
            <option>Stay Fit</option>
            <option>Improve Strength</option>
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Fitness Level
          </label>
          <select
            name="level"
            disabled={!editing}
            value={preferences.level}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Workout Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Preferred Workout Time
          </label>
          <select
            name="workoutTime"
            disabled={!editing}
            value={preferences.workoutTime}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
        </div>

        {editing && (
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Preferences
          </button>
        )}
      </div>
    </div>
  );
};

export default FitnessPreferencesCard;
