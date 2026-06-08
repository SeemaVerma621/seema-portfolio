import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="text-center max-w-md">
        
        <div className="text-6xl mb-4">🚧</div>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Under Development
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This application is currently under active development.  
Core features are being implemented, and new functionalities are continuously in progress.
        </p>

        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
          Work in Progress
        </div>

        <div className="mt-6">
            <button
            onClick={() => {
  if (window.history.length > 1) navigate(-1);
  else navigate("/");
}}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default UnderDevelopment;