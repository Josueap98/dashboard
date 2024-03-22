import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">Primer Dashboard!</h1>
      <p className="text-xl text-gray-600 mt-5">
        Adipisicing ut aute excepteur proident.
      </p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5">
        Learn More
      </button>
    </div>
  );
}

export default HomePage;

