import React from "react";

interface ProgressLineProps {
  label: string;
  value: number; // current value
  max: number; // total target
  color?: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  label,
  value,
  max,
  color = "#3b82f6",
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {value}/{max}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
        <div
          className="h-4 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressLine;
