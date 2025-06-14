import React from "react";

const sampleUserData = {
  name: "Tanuj",
  email: "tanuj@example.com",
  goals: [
    { title: "Lose Weight", progress: "60%" },
    { title: "Build Muscle", progress: "30%" },
  ],
  workouts: [
    { date: "2025-06-12", type: "Cardio", duration: "30 mins" },
    { date: "2025-06-13", type: "Strength", duration: "45 mins" },
  ],
};

const DownloadDataCard = () => {
  const handleDownload = () => {
    const dataStr = JSON.stringify(sampleUserData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "my-fitness-data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        📥 Download My Data
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Export your workout, goals, and activity data as a JSON file.
      </p>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
      >
        ⬇️ Download JSON
      </button>
    </div>
  );
};

export default DownloadDataCard;
