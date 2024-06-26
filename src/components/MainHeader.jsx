import React from "react";

const MainHeader = () => {
  return (
    <header className=" absolute bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-4">Dashboard</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-gray-700 p-2 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white w-64 py-1 px-2 focus:outline-none"
          />
        </div>
        <div className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;