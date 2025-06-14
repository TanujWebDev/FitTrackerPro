import React, { useEffect, useState } from "react";
import axios from "axios";

const AIRecommendations = ({ goal }) => {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(true);

  const prompt = `Suggest an AI-based weekly fitness and diet plan for the goal: "${goal.title}" of type "${goal.type}" with a target date of ${goal.targetDate}. Keep it beginner-friendly and practical.`;

  useEffect(() => {
    const fetchSuggestion = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer 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`,
              "Content-Type": "application/json",
            },
          }
        );

        const aiText =
          response.data.choices?.[0]?.message?.content ||
          "No suggestion found.";
        setSuggestion(aiText);
      } catch (err) {
        setSuggestion("❌ Failed to get suggestion. Try again later.");
      }
      setLoading(false);
    };

    fetchSuggestion();
  }, [goal]);

  return (
    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-md mb-6 border border-blue-200 dark:border-gray-600">
      <h2 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
        🤖 AI Recommendation
      </h2>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-300">Generating plan...</p>
      ) : (
        <pre className="text-sm whitespace-pre-wrap text-gray-800 dark:text-white">
          {suggestion}
        </pre>
      )}
    </div>
  );
};

export default AIRecommendations;
