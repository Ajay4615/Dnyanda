import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import Split from "./Split";
import Philosopy from "./Philosophy";
import Home from "./Home";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";

function Hero() {
  return (
    <>
      <Home />
      {/* </div> */}
      <AboutSection />
      <div className="mt-12 flex-col justify-center items-center mb-4">
        <div className="mb-3 md:mb-12">
          <b>
            <p className="text-center text-2xl w-full md:w-auto">
              Take a Tour of
            </p>
            <p
              className=" text-center text-orange-600 text-5xl ms-3 "
              style={{ fontFamily: "cursive" }}
            >
              Our Campus!
            </p>
          </b>
        </div>
        <Split />
      </div>

      <div className="bg-yellow-500 w-full flex justify-center items-center h-full rounded-lg mt-24">
        <div className="flex flex-col items-center justify-center text-center w-11/12 md:w-2/3 lg:w-1/2 pb-16">
          <div className="py-5">
            <p className="text-black text-xl md:text-2xl lg:text-3xl font-bold w-full">
              The{" "}
              <span
                className="text-white text-3xl sm:text-4xl lg:text-6xl"
                style={{ fontFamily: "cursive" }}
              >
                Dnayanada
              </span>{" "}
              Vision
            </p>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-44 sm:h-80 flex items-center justify-center rounded-lg">
              <img
                src="/images/logo.jpg"
                alt="Dnayanada Logo"
                className="max-w-full max-h-full sm:h-72"
              />
            </div>
          </div>
        </div>
      </div>

      <CoursesSection />

      <div className=" mt-12 flex-col justify-center items-center mb-4">
        <div className="pb-7 text-center">
          <p className="text-black text-xl  md:text-2xl lg:text-3xl font-bold w-full max-h-32 ">
            The{" "}
            <span
              className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl"
              style={{ fontFamily: "cursive" }}
            >
              Dnayanada
            </span>{" "}
            Philosopy
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
    </>
  );
}

export default Hero;
