import React from "react";

const GoalCompletionCard = () => {
  // Dummy static data (isse tu future me backend ya localStorage se dynamic bana sakta hai)
  const totalGoals = 5;
  const completedGoals = 3;

  const percentage = Math.round((completedGoals / totalGoals) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        🥇 Goal Completion
      </h2>

      <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
        {completedGoals} of {totalGoals} goals completed
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
        🎯 {percentage}% completed
      </div>
    </div>
  );
};

export default GoalCompletionCard;
