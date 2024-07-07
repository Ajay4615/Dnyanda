import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

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

  const handleCloseDomain = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex h-20 md:h-24   mb-3" >
        <div className=" flex justify-center logo ">
          <img
            src={"./images/logo.jpg"}
            alt="My Image"
            className="md:w-28 w-20 md:h-22 h-18 ms-10 lg:ms-20 bg-t "
          />
        </div>

        <div className="flex items-center justify-center h-24vh text-center ms-8 md:ms-12 sm:ms-10 lg:ms-28">
          <ul className="flex hidd gap-3 sm:gap-4 md:gap-6 xl:gap-16 items-center text-sm lg:text-xl text-orange-600 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Sector"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Sector
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Centers"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Centers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donate"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 text-black border-orange-600"
                      : "text-orange-600 "
                  } pb-2`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center h-20 md:h-24 sym ms-5 ">
          <button onClick={handleButtonClick}>
            <FiAlignJustify className=" h-12 text-orange-600 ms-16 xl:ms-40 lg:ms-16 w-16  md:h-16 hid" />
          </button>

          {isVisible && (
            <div
              ref={domainRef}
              className="mt-4 bg-gray-500 text-center rounded-lg absolute right-14 top-16 z-30 w-20 text-white"
            >
            <div className="">
          <ul className="">
            <li>
              <NavLink
                to="/"
                onClick={handleCloseDomain}
                className=""
              >
                Home <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                onClick={handleCloseDomain}
                className=""
              >
                About <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Sector"
                onClick={handleCloseDomain}
                className=""
              >
                Sector <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Centers"
                onClick={handleCloseDomain}
                className=""
              >
                Centers <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                onClick={handleCloseDomain}
                className=""
              >
                Services <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donate"
                onClick={handleCloseDomain}
                className=""
              >
                Donate <hr />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                onClick={handleCloseDomain}
                className=""
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
