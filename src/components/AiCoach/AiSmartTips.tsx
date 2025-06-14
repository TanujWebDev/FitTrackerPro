import React, { useEffect, useState } from "react";

const tips = [
  "💧 Drink at least 3-4 litres of water daily to stay hydrated.",
  "🏃‍♂️ Start your day with 10 min cardio – jumpstart metabolism!",
  "🍳 High protein breakfast helps muscle growth & fat burn.",
  "🧘‍♂️ Take 10 min daily for stretching & breath control.",
  "⏱️ Short, intense workouts (HIIT) burn more fat in less time.",
  "📉 Avoid late-night snacks if you’re on a cutting plan.",
  "🛌 Muscles grow in sleep – aim for 7-9 hours daily.",
  "🍗 1.6–2.2g protein/kg body weight for lean muscle gain.",
  "❄️ Cold showers post-workout help reduce inflammation.",
  "🔥 Discipline beats motivation – stay consistent champ!",
];

const AiSmartTips = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }, []);

  return (
    <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 p-5 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-bold text-green-800 dark:text-green-100 mb-2">
        📘 AI Smart Tip of the Day
      </h2>
      <p className="text-sm text-green-700 dark:text-green-200">{tip}</p>
    </div>
  );
};

export default AiSmartTips;
