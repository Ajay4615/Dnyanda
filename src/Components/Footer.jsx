import React from "react";

import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="w-full bg-black text-white pt-5">
        <div className="text-center text-2xl flex justify-center items-center ">
          © 2013 Dnyanada Prabodhini
        </div>
        <div className="flex flex-col md:flex-row  ">
          <div className="mt-5 pb-5 md:px-20 px-3 w-full md:w-1/2 ">
            <p>
              <br /> Add : Aalandi, Pune, Maharashtra, India. Pin - 412105{" "}
              <br />
              Phone : +91-9922456832, +91-9175116107 <br />
              Email : gorakshaue@gmail.com <br />
            </p>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center md:justify-end items-end p-8 ">
            <p className="flex gap-5 text-2xl">
              <Link>
                <IoLogoFacebook />
              </Link>
              <Link>
                <AiFillTwitterSquare />
              </Link>

              <Link>
                <FaInstagram />
              </Link>

              <Link>
                <FaWhatsapp />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
