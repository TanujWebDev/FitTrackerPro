import React, { useState } from "react";

const AiDietRecommender = () => {
  const [goal, setGoal] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");
  const [plan, setPlan] = useState<string[] | null>(null);

  const generateDiet = () => {
    if (!goal || !weight || !type) return;

    const w = parseFloat(weight);

    // Dummy logic for now – can replace with backend AI later
    let protein = Math.round(
      w * (goal === "muscle gain" ? 2.2 : goal === "cutting" ? 2 : 1.6)
    );
    let calories =
      goal === "weight loss" ? 1800 : goal === "muscle gain" ? 2800 : 2200;

    const vegPlan = [
      `🥗 Breakfast: Oats + Peanut Butter + Banana (Protein: 25g)`,
      `🍛 Lunch: Brown rice + Paneer curry + Salad (Protein: 35g)`,
      `🥤 Snack: Whey Protein + Dry Fruits (Protein: 25g)`,
      `🥘 Dinner: Soya chunks + Veggies + Multigrain Roti (Protein: 30g)`,
      `🧪 Total: ~${protein}g protein, ~${calories} kcal`,
    ];

    const nonVegPlan = [
      `🍳 Breakfast: 3 Eggs + Brown Bread + Fruit (Protein: 30g)`,
      `🍗 Lunch: Chicken breast + Rice + Salad (Protein: 40g)`,
      `🥤 Snack: Whey Protein + Boiled Eggs (Protein: 30g)`,
      `🍲 Dinner: Fish curry + Quinoa + Veggies (Protein: 35g)`,
      `🧪 Total: ~${protein}g protein, ~${calories} kcal`,
    ];

    setPlan(type === "veg" ? vegPlan : nonVegPlan);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        🥗 AI Diet Recommender
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

        <input
          type="number"
          placeholder="⚖️ Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 dark:text-white"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">🍽️ Food Type</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
      </div>

      <button
        onClick={generateDiet}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Generate Diet Plan
      </button>

      {plan && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            📝 Your AI Diet Plan:
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {plan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiDietRecommender;
