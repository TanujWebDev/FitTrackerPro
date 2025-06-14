// GoalDashboard.jsx or .tsx
import React, { useState } from "react";
import GoalForm from "../Goals/GoalForm";
import GoalCard from "../Goals/GoalCard";
import AIRecommendations from "../Goals/AIRecommendations";

const initialGoals = [
  {
    id: 1,
    title: "Lose 5kg in 45 days",
    type: "Weight Loss",
    targetDate: "2025-08-01",
    streak: 3,
    lastCheckin: "2025-06-13",
  },
  {
    id: 2,
    title: "Workout 4x/week",
    type: "Consistency",
    targetDate: "2025-08-15",
    streak: 12,
    lastCheckin: "2025-06-12",
  },
];

const GoalDashboard = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const addGoal = (newGoal) => {
    setGoals((prev) => [
      ...prev,
      { ...newGoal, id: Date.now(), streak: 0, lastCheckin: null },
    ]);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        🌟 Your Fitness Goals
      </h1>

      {!selectedGoal && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          👇 Select a goal below to get AI-powered suggestions.
        </p>
      )}

      {selectedGoal && <AIRecommendations goal={selectedGoal} />}

      <GoalForm onAddGoal={addGoal} />

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onSelect={() => setSelectedGoal(goal)}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalDashboard;
