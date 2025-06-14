import React from "react";
import ProgressLine from "./ProgressLine";

const ProgressLineGraph = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📈 Weekly Progress Overview
      </h2>

      <ProgressLine label="Calories" value={700} max={1000} />
      <ProgressLine label="Steps" value={8500} max={10000} color="#10b981" />
      <ProgressLine label="Workouts" value={4} max={5} color="#f97316" />
    </div>
  );
};

export default ProgressLineGraph;
