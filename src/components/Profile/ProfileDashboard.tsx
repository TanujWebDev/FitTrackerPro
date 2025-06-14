import React from "react";
import ProfileInfoCard from "../Profile/ProfileInfoCard";
import FitnessPreferencesCard from "../Profile/FitnessPreferencesCard";
import TargetSettingsCard from "../Profile/TargetSettingsCard";
import SecuritySettingsCard from "../Profile/SecuritySettingsCard";
import DeleteAccountCard from "../Profile/DeleteAccountCard";
import ThemeToggleCard from "../Profile/ThemeToggleCard";
import DownloadDataCard from "../Profile/DownloadDataCard";
import ConnectedServicesCard from "../Profile/ConnectedServicesCard";

const ProfileDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        👤 Your Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileInfoCard />
        <FitnessPreferencesCard />
        <TargetSettingsCard />
        <SecuritySettingsCard />
        <ThemeToggleCard />
        <DownloadDataCard />
        <ConnectedServicesCard />
        <DeleteAccountCard />
      </div>
    </div>
  );
};

export default ProfileDashboard;
