import React, { useState } from "react";

const GoalForm = ({ onAddGoal }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Weight Loss");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !targetDate) {
      alert("Please fill all fields.");
      return;
    }

    const newGoal = {
      title,
      type,
      targetDate,
    };

    onAddGoal(newGoal);

    // Reset form
    setTitle("");
    setType("Weight Loss");
    setTargetDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded p-4 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        ➕ Add New Goal
      </h2>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Goal Title
        </label>
        <input
          type="text"
          placeholder="e.g. Run 5km daily"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Goal Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option>Weight Loss</option>
          <option>Muscle Gain</option>
          <option>Strength</option>
          <option>Consistency</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Target Date
        </label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Save Goal
      </button>
    </form>
  );
};

export default GoalForm;
