import React from "react";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle, Flame, Dumbbell } from "lucide-react";

const GoalCard = ({ goal }) => {
  const { title, type, targetDate } = goal;

  const getTypeIcon = () => {
    switch (type) {
      case "Weight Loss":
        return <Flame className="text-red-500" />;
      case "Muscle Gain":
        return <Dumbbell className="text-green-500" />;
      case "Strength":
        return <CheckCircle className="text-blue-500" />;
      default:
        return <CheckCircle className="text-gray-500" />;
    }
  };

  const timeLeft = formatDistanceToNow(new Date(targetDate), {
    addSuffix: true,
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white">
          {getTypeIcon()}
          {title}
        </div>
        <span className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
          {type}
        </span>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        🎯 Target: <strong>{new Date(targetDate).toLocaleDateString()}</strong>
      </div>

      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
        ⏳ {timeLeft}
      </div>
    </div>
  );
};

export default GoalCard;
