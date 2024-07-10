// PhilosophySection.jsx
import React from "react";
import Philosopy from "./Philosophy";

const PhilosophySection = () => {
  return (
    <div className="mt-12 flex-col justify-center items-center mb-4">
      <div className="pb-7 text-center">
        <p className="text-black text-xl md:text-2xl lg:text-3xl font-bold w-full">
          The{" "}
          <span className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl font-cursive">
            Dnayanada
          </span>{" "}
          Philosophy
        </p>
      </div>
      <div className="text-center text-xl">
        <p>
          We believe in a holistic model of education and are strong believers
          in the methodology and prescriptions of the Centre on the
        </p>
      </div>
      <Philosopy />
    </div>
  );
};

export default PhilosophySection;
