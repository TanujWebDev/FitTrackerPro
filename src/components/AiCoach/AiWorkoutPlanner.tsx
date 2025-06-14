import React, { useState } from "react";

const AiWorkoutPlanner = () => {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [focus, setFocus] = useState("");
  const [plan, setPlan] = useState<string[] | null>(null);

  const generatePlan = () => {
    if (!goal || !level || !focus) return;

    const dummyPlans: { [key: string]: string[] } = {
      "weight loss-beginner-full body": [
        "Jumping Jacks - 3x30 sec",
        "Bodyweight Squats - 3x15",
        "Push Ups (knee) - 3x10",
        "Plank - 3x20 sec",
      ],
      "muscle gain-intermediate-upper body": [
        "Pull Ups - 4x6",
        "Dumbbell Bench Press - 4x8",
        "Shoulder Press - 4x10",
        "Triceps Dips - 3x12",
      ],
      "cutting-advanced-core": [
        "Leg Raises - 4x15",
        "Russian Twists - 4x20",
        "Mountain Climbers - 4x30 sec",
        "Plank to Push Up - 3x10",
      ],
    };

    const key = `${goal}-${level}-${focus}`.toLowerCase();
    const matchedPlan = dummyPlans[key] || [
      "🏋️ Plan coming soon for your selection!",
    ];

    setPlan(matchedPlan);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        🧠 AI Workout Planner
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">🎯 Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="cutting">Cutting</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">📈 Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">💪 Focus Area</option>
          <option value="full body">Full Body</option>
          <option value="upper body">Upper Body</option>
          <option value="core">Core</option>
        </select>
      </div>

      <button
        onClick={generatePlan}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Generate Plan
      </button>

      {plan && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            📝 Your Workout Plan:
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {plan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiWorkoutPlanner;
