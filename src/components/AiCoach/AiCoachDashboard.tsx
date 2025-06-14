import React from "react";
import AiSmartTips from "./AiSmartTips";
// Future: import AiChatTrainer from "./AiChatTrainer";
// Future: import AiWorkoutPlanner from "./AiWorkoutPlanner";
// Future: import AiDietRecommender from "./AiDietRecommender";
// Future: import AiFaqBot from "./AiFaqBot";

const AiCoachDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        🤖 AI Fitness Coach
      </h1>

      {/* Tips section (full-width) */}
      <AiSmartTips />

      {/* Cards for coming features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* 1. Chat With Trainer */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            💬 Chat With AI Trainer
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Ask anything about fitness, form, or motivation.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Coming Soon
          </button>
        </div>

        {/* 2. Workout Plan Generator */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            🏋️‍♂️ AI Workout Planner
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Get a daily or weekly workout plan based on your goals.
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Coming Soon
          </button>
        </div>

        {/* 3. Diet Recommendation */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            🥗 AI Diet Suggestion
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Personalized diet plans — muscle gain, fat loss, maintenance.
          </p>
          <button className="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
            Coming Soon
          </button>
        </div>

        {/* 4. FAQ Coach Bot */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            ❓ Ask AI - FAQs
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Confused about gym, calories, or protein? Ask here.
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiCoachDashboard;
