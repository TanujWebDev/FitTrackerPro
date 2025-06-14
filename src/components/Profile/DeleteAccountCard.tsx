import React, { useState } from "react";
import toast from "react-hot-toast";

const DeleteAccountCard = () => {
  const [confirming, setConfirming] = useState(false);

  const handleDelete = () => {
    setConfirming(false);
    toast.success("Account deleted (demo)");
    // ⚠️ Actual API call to delete account goes here
    // await deleteAccountAPI(userId);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6 border border-red-500">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">
          ⚠️ Delete Account
        </h2>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Deleting your account is irreversible. All your data will be lost
        forever.
      </p>

      {!confirming ? (
        <button
          onClick={() => setConfirming(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Delete My Account
        </button>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-red-500">
            Are you sure? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccountCard;
