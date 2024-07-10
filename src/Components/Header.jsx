import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";

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
          <div className="h-16 md:h-20 md:w-20 w-1/2">
            <img
              src={"./images/logo.jpg"}
              alt="Logo"
              className="object-cover w-16 md:w-full h-full rounded"
            />
          </div>
          <nav className="hidden md:flex ml-6 space-x-6 lg:space-x-11 text-lg lg:text-2xl">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.to}
                to={navLink.to}
                className="text-orange-600 hover:text-black hover:border-b-2 hover:border-black pb-2"
                activeClassName="border-b-2 text-black border-orange-500"
                onClick={() => setIsVisible(false)}
              >
                {navLink.label}
              </NavLink>
            ))}
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
          className="fixed top-0 right-0 bg-yellow-800 text-white z-30 transform transition-transform duration-300 ease-in-out translate-x-0 md:translate-x-full md:top-2 md:right-5 w-full md:max-w-xs"
        >
          <button
            onClick={handleCloseButtonClick}
            className="absolute top-3 right-3 text-white hover:text-gray-300"
          >
            <FiX className="h-6 w-6" />
          </button>
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.to}
                to={navLink.to}
                className="block text-center py-2 hover:text-black hover:bg-yellow-700 w-2/3"
                activeClassName="text-black bg-yellow-700"
                onClick={() => setIsVisible(false)}
              >
                {navLink.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/AboutUs", label: "About" },
  { to: "/Sector", label: "Sector" },
  { to: "/Centers", label: "Centers" },
  { to: "/Services", label: "Services" },
  { to: "/Donate", label: "Donate" },
  { to: "/Contact", label: "Contact" },
];

export default Header;
