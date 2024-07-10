// VisionSection.jsx
import React from "react";

const VisionSection = () => {
  return (
    <div className="bg-yellow-500 w-full flex justify-center items-center h-full rounded-lg mt-24">
      <div className="flex flex-col items-center justify-center text-center w-11/12 md:w-2/3 lg:w-1/2 pb-16">
        <div className="py-5">
          <p className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
            The{" "}
            <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-cursive">
              Dnayanada
            </span>{" "}
            Vision
          </p>
        </div>
        <div className="w-full">
          <div className="bg-white w-full h-44 sm:h-80 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="/images/logo.jpg"
              alt="Dnayanada Logo"
              className="max-w-full max-h-full sm:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
