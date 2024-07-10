// TourSection.jsx
import React from "react";
import Split from "./Split";

const TourSection = () => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center mb-4">
      <div className="mb-3 md:mb-12">
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Take a Tour of
        </p>
        <p className="text-center text-orange-600 text-5xl font-cursive">
          Our Campus!
        </p>
      </div>
      <Split />
    </div>
  );
};

export default TourSection;
