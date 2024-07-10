// Home.jsx

import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 md:h-screen flex items-center justify-center bg-yellow-100">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/background.jpeg')" }}
        ></div>
        <div className="relative p-4 text-center">
          <p className="text-gray-900 text-4xl bg-yellow-400 rounded-md p-2 md:p-4 sm:text-5xl md:text-6xl lg:text-8xl underline font-bold">
            <b>ज्ञानदा संस्कृत प्रबोधिनी</b>
          </p>
          <p className="text-xl mt-4 text-gray-800">
            Providing a supportive and immersive learning environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
