import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify ,FiX } from "react-icons/fi";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const domainRef = useRef(null);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (domainRef.current && !domainRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  const handleCloseButtonClick = () => {
    setIsVisible(false); // Close the menu when close button is clicked
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-2 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center justify-center gap-10 w-full">
          <div className="h-16 md:h-20 md:w-20 w-1/2 ">
            <img
              src={"./images/logo.jpg"}
              alt="Logo"
              className="object-cover w-16  md:w-full h-full rounded"
            />
          </div>
          <nav className="hidden md:flex ml-6  space-x-6 lg:space-x-11 text-lg lg:text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              About
            </NavLink>
            <NavLink
              to="/Sector"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Sector
            </NavLink>
            <NavLink
              to="/Centers"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Centers
            </NavLink>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Services
            </NavLink>
            <NavLink
              to="/Donate"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Donate
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 text-black border-orange-500"
                    : "text-orange-600 "
                } pb-2  hover:border-b-2 hover:border-black `}
            >
              Contact
            </NavLink>
          </nav>
        <div className="lg:ms-10 max-w-52">
          <button onClick={handleButtonClick}>
            <FiAlignJustify className="h-12 w-12 text-black" />
          </button>
        </div>
        </div>
      </div>

     
      {isVisible && (
        <div
          ref={domainRef}
          className={`absolute top-0 right-0 md:top-2 md:right-5 bg-yellow-800 text-white z-30 transform transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ maxWidth: "250px", width: "100%" }}
        >
          <button
            onClick={handleCloseButtonClick}
            className="absolute top-3 left-5 text-white hover:text-gray-300"
          >
            <FiX className="h-6 w-6" />
          </button>
          <nav className="flex flex-col items-center py-4 space-y-2">
            <NavLink
              to="/"
              onClick={handleButtonClick}
              className="block text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >
              Home
            </NavLink>
            <hr className="w-3/4 mx-auto" />
            <NavLink
              to="/AboutUs"
              onClick={handleButtonClick}
              className="block  text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >
              About
            </NavLink>
            <hr className="w-3/4 mx-auto" />
            <NavLink
              to="/Sector"
              onClick={handleButtonClick}
              className="block  text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >
              Sector
            </NavLink>
            <hr className="w-3/4 mx-auto" />
            <NavLink
              to="/Centers"
              onClick={handleButtonClick}
              className="block  text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >
              Centers
            </NavLink>
            <hr className="w-3/4 mx-auto" />
            <NavLink
              to="/Services"
              onClick={handleButtonClick}
              className="block  text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >
              Services
            </NavLink>
            <hr className="w-3/4 mx-auto" />
            <NavLink
              to="/Donate"
              onClick={handleButtonClick}
              className="block  text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
            >      
              Donate
            </NavLink>
            <hr className="w-3/4 mx-auto " />
            <NavLink
              to="/Contact"
              onClick={handleButtonClick}
              className="block text-center py-2 hover:text-black hover:bg-yellow-700  w-2/3"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
