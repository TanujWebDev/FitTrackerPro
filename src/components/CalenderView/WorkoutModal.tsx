// WorkoutModal.tsx
import React from "react";

interface WorkoutModalProps {
  onClose: () => void;
  onSave: () => void;
  workout: string;
  setWorkout: (value: string) => void;
  date: string;
}

const WorkoutModal: React.FC<WorkoutModalProps> = ({
  onClose,
  onSave,
  workout,
  setWorkout,
  date,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Workout for {date}
        </h2>

        <input
          type="text"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="Enter workout details..."
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={onSave}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Workout
        </button>
      </div>
    </div>
  );
};

export default WorkoutModal;
