import React from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center text-2xl mb-4">
          <div className="flex flex-col items-center">
            <span className="block mb-2">ज्ञानदा संस्कृत प्रबोधिनी</span>
            <span className="block">Dnyanada Sanskrit Prabodhini</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 md:px-8 px-4 mb-4">
            <p className="text-sm">
              पता: आलंदी, पुणे, महाराष्ट्र, भारत. पिन - ४१२१०५ <br />
              फोन: +९१-९९२२४५६८३२, +९१-९१७५११६१०७ <br />
              ईमेल: gorakshaue@gmail.com
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end items-center px-4">
            <div className="flex gap-5 text-3xl">
              <Link to="#" className="text-white hover:text-gray-400">
                <IoLogoFacebook />
              </Link>
              <Link to="#" className="text-white hover:text-gray-400">
                <IoLogoTwitter />
              </Link>
              <Link to="#" className="text-white hover:text-gray-400">
                <IoLogoInstagram />
              </Link>
              <Link to="#" className="text-white hover:text-gray-400">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
