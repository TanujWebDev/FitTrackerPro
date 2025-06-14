// utils.ts

import { format } from "date-fns";

/**
 * Format date as 'yyyy-MM-dd'
 */
export const formatDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};

/**
 * Check if a date has workout (based on workout data object)
 */
export const hasWorkoutForDate = (
  date: Date,
  workoutData: Record<string, string>
): boolean => {
  const formatted = formatDate(date);
  return !!workoutData[formatted];
};

/**
 * Save workout data to localStorage (optional)
 */
export const saveWorkoutToLocal = (data: Record<string, string>) => {
  localStorage.setItem("workoutData", JSON.stringify(data));
};

/**
 * Get workout data from localStorage (optional)
 */
export const getWorkoutFromLocal = (): Record<string, string> => {
  const data = localStorage.getItem("workoutData");
  return data ? JSON.parse(data) : {};
};
