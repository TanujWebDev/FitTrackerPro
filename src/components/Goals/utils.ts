// utils.ts

import { formatDistanceToNow, isToday, parseISO } from "date-fns";

/**
 * Calculate user's current streak based on last check-in date
 */
export function calculateStreak(lastCheckin: string | null): number {
  if (!lastCheckin) return 0;

  const lastDate = parseISO(lastCheckin);
  if (isToday(lastDate)) return 1;

  const daysSinceLast = formatDistanceToNow(lastDate, { addSuffix: false });
  return daysSinceLast.includes("day") ? 1 : 0;
}

/**
 * Format date as "x days ago"
 */
export function formatRelativeDate(dateStr: string | null): string {
  if (!dateStr) return "Never";
  const parsed = parseISO(dateStr);
  return formatDistanceToNow(parsed, { addSuffix: true });
}

/**
 * Generate an AI prompt based on goal type
 */
export function generatePrompt(goal: {
  title: string;
  type: string;
  targetDate: string;
}) {
  return `
You are a fitness coach AI.

The user has set this goal: "${goal.title}", which is related to ${goal.type}. 
They want to achieve it by ${goal.targetDate}. 

Please suggest:
- A personalized daily plan
- Motivational advice
- Key habits to follow
- Mistakes to avoid

Make it short, clear, and engaging!
`;
}
