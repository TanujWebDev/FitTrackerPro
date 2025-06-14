import React, { useState } from "react";

const TargetSettingsCard = () => {
  const [targets, setTargets] = useState({
    calories: 2200,
    protein: 160, // grams
    steps: 10000,
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargets({ ...targets, [e.target.name]: +e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    console.log("Saved targets:", targets);
    // Local storage or API saving logic here
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          🎯 Daily Target Settings
        </h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-blue-500 hover:underline text-sm"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        {/* Calories Target */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Daily Calories (kcal)
          </label>
          <input
            type="number"
            name="calories"
            disabled={!editing}
            value={targets.calories}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Protein Target */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Daily Protein (g)
          </label>
          <input
            type="number"
            name="protein"
            disabled={!editing}
            value={targets.protein}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 border rounded-lg ${
              editing
                ? "bg-white dark:bg-gray-700"
                : "bg-gray-100 dark:bg-gray-700"
            } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Steps Target */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Daily Steps Goal
          </label>
          <input
            type="number"
            name="steps"
            disabled={!editing}
            value={targets.steps}
            onChange={handleChange}
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
            Save Targets
          </button>
        )}
      </div>
    </div>
  );
};

export default TargetSettingsCard;
