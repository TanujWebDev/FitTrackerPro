import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import WorkoutModal from "../CalenderView/WorkoutModal"; // Correct import

const CalendarDay = ({ date }: { date: Date }) => {
  const [showModal, setShowModal] = useState(false);
  const [workout, setWorkout] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const formattedDate = date.toISOString().split("T")[0];

  useEffect(() => {
    const fetchWorkout = async () => {
      const { data } = await supabase
        .from("workouts")
        .select("*")
        .eq("date", formattedDate)
        .single();

      if (data) {
        setWorkout(data.workout);
        setIsCompleted(true);
      }
    };

    fetchWorkout();
  }, [formattedDate]);

  const handleSave = async () => {
    if (!workout) return;

    const { error } = await supabase
      .from("workouts")
      .upsert({ date: formattedDate, workout });

    if (!error) {
      setIsCompleted(true);
      setShowModal(false);
    }
  };

  return (
    <>
      <div
        className="border h-20 rounded-md p-2 text-sm hover:bg-gray-100 cursor-pointer relative"
        onClick={() => setShowModal(true)}
      >
        <p className="text-xs font-semibold">{date.getDate()}</p>

        {isCompleted && (
          <span className="w-2 h-2 rounded-full bg-green-500 absolute bottom-2 right-2"></span>
        )}
      </div>

      {showModal && (
        <WorkoutModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          workout={workout}
          setWorkout={setWorkout}
          date={formattedDate}
        />
      )}
    </>
  );
};

export default CalendarDay;
