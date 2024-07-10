// CourseCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";

const CourseCard = ({ imageUrl, title, links }) => {
  return (
    <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <ul className="list-disc list-inside space-y-1">
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              <li className="text-gray-700 hover:text-black hover:underline">
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <button className="w-full flex justify-center items-center py-2 bg-yellow-300 hover:bg-yellow-400 transition duration-300">
        <CiCircleChevLeft className="w-6 h-6 mr-2" />
        <span className="text-lg">Back</span>
      </button>
    </div>
  );
};

export default CourseCard;
