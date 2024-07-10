// FeaturesSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";

const FeaturesSection = () => {
  return (
    <div className="max-w-6xl flex justify-center mt-20 ">
      <div className="lg:w-3/4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:p-4">
          {/* About */}
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden p-2">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="/images/campus1.jpg"
              alt="About"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">About</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-gray-700">No Content</li>
              </ul>
            </div>
            <button className="w-full">
              <CiCircleChevLeft className="w-full h-14" />
            </button>
          </div>

          {/* Courses */}
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden p-2">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="/images/campus2.jpg"
              alt="Courses"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Courses
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-gray-700">
                  <Link to="#">Sanskrit</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">Marathi</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">Hindi</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">English</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">CBSE, STATE, ICSE (Board)</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">8th, 9th, 10th, 11th, 12th (standards)</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">BAMS, B.A, M.A</Link>
                </li>
              </ul>
            </div>
            <button className="w-full">
              <CiCircleChevLeft className="w-full h-14" />
            </button>
          </div>

          {/* Admission */}
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden p-2">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="/images/admission.jpg"
              alt="Admission"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Admission
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-gray-700">
                  <Link to="#">Online Registration</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">Scheduled school tour and orientation</Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">
                    Admission forms are available on the school or the school
                    website.
                  </Link>
                </li>
                <li className="text-gray-700">
                  <Link to="#">The admission form along</Link>
                </li>
              </ul>
            </div>
            <button className="w-full">
              <CiCircleChevLeft className="w-full h-14" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
