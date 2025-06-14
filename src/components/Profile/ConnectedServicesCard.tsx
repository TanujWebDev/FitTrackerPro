import React, { useState } from "react";

const services = [
  { name: "Google Fit", icon: "📱", key: "google" },
  { name: "Apple Health", icon: "🍎", key: "apple" },
  { name: "Fitbit", icon: "⌚", key: "fitbit" },
  { name: "Strava", icon: "🚴", key: "strava" },
];

const ConnectedServicesCard = () => {
  const [connected, setConnected] = useState({
    google: false,
    apple: false,
    fitbit: true,
    strava: false,
  });

  const toggleService = (key: string) => {
    setConnected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        🔗 Connected Services
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Sync your workout data with external apps like Fitbit or Strava.
      </p>

      <div className="space-y-3">
        {services.map((service) => (
          <div
            key={service.key}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                {service.name}
              </span>
            </div>
            <button
              onClick={() => toggleService(service.key)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                connected[service.key]
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-400 text-white hover:bg-gray-500"
              }`}
            >
              {connected[service.key] ? "Connected" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedServicesCard;
