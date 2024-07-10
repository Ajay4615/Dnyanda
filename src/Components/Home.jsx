import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 md:h-screen flex items-center justify-center bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/background.jpeg')" }}
        ></div>
        <div className="relative p-4 text-center font-extrabold">
          <p className="text-gray-900 text-4xl bg-yellow-400 rounded-md p-2 md:p-4 sm:text-5xl md:text-6xl lg:text-8xl underline font-bold">
            <b>ज्ञानदा संस्कृत प्रबोधिनी</b>
          </p>
          <p className="text-2xl mt-4 text-yellow-300">
            अपि स्वर्णमयी लङ्का न मे लक्ष्मण रोचते।
            <br />
            जननी जन्मभूमिश्च स्वर्गादपि गरीयसी॥
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
