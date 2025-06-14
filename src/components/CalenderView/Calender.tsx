import React, { useState } from "react";
import CalendarDay from "../CalenderView/CalenderDay";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const monthName = format(currentMonth, "MMMM yyyy");

  // Track total workouts (dummy data, real data can come from Supabase)
  const totalWorkouts = 15; // Replace with dynamic fetch later

  return (
    <div className="p-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300"
        >
          ← Previous
        </button>

        <h2 className="text-2xl font-bold text-center">{monthName}</h2>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300"
        >
          Next →
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}

        {days.map((date) => (
          <CalendarDay key={date.toISOString()} date={date} />
        ))}
      </div>

      {/* Monthly Summary */}
      <div className="bg-blue-100 dark:bg-blue-900 rounded p-4 text-center text-blue-900 dark:text-blue-100 shadow-md">
        <h3 className="text-xl font-semibold mb-2">📊 Monthly Summary</h3>
        <p>
          ✅ Total Workouts: <span className="font-bold">{totalWorkouts}</span>
        </p>
        <p>
          📅 Days Remaining:{" "}
          <span className="font-bold">{days.length - totalWorkouts}</span>
        </p>
        <p>🔥 Goal: Stay consistent!</p>
      </div>
    </div>
  );
};

export default Calendar;
