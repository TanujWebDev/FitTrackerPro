import React from "react";
import GoalCompletionCard from "../Analytics/GoalCompletionCard";
import WorkoutStreakChart from "../Analytics/WorkoutStreakChart";
import CaloriesBurnedChart from "../Analytics/CaloriesBurnedChart";
import ProgressLineGraph from "../Analytics/ProgressLineGraph";
import ProgressLine from "./ProgressLine";

const AnalyticsDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        📊 Your Fitness Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Goal completion bar */}
        <GoalCompletionCard />

        {/* 2. Weekly workout streak */}
        <WorkoutStreakChart />

        {/* 3. Calories burned bar chart */}
        <CaloriesBurnedChart />

        {/* 4. Weekly progress line chart */}
        <ProgressLineGraph />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
