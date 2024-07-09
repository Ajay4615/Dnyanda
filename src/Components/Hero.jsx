import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import Split from "./Split";
import Philosopy from "./Philosophy";

function Hero() {
  
  return (
    <>
      <div className="flex flex-wrap">
      <div className="w-full ">
        <div className="relative h-40vh md:h-screen flex items-center justify-center bg-yellow-500">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('/images/background.jpeg')" }}
          ></div>
          <div className="relative p-4">
            <p className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl underline text-center">
              <b>ज्ञानदा संस्कृत प्रबोधिनी</b>
            </p>
          </div>
        </div>
      </div>
     
    </div>
        <div className=" flex justify-center items-center bg-yellow-300 py-6">
          <div className="w-screen md:w-2/3 p-2">
            <p
              className="text-black  md:text-xl text-base font-mono"
              style={{ fontFamily: "monospace" }}
            >
              We pride ourselves on providing a supportive and immersive
              learning environment. Our experienced instructors, comprehensive
              curriculum, and interactive teaching methods ensure that you
              receive the highest quality education. Whether you aim to pursue
              academic research, enhance your spiritual practice, or simply
              explore a new language, our academy is the perfect place to start.
            </p>
          </div>
        </div>
      {/* </div> */}

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
        <Split/>
      </div>

      <div className="bg-yellow-500 w-full flex justify-center items-center h-full rounded-lg mt-24">
      <div className="flex flex-col items-center justify-center text-center w-11/12 md:w-2/3 lg:w-1/2 pb-16">
        <div className="py-5">
          <p className="text-black text-xl md:text-2xl lg:text-3xl font-bold w-full">
            The <span className="text-white text-3xl sm:text-4xl lg:text-6xl" style={{ fontFamily: "cursive" }}>Dnayanada</span> Vision
          </p>
        </div>
        <div className="w-full">
          <div className="bg-white w-full h-44 sm:h-80 flex items-center justify-center rounded-lg">
            <img src="/images/logo.jpg" alt="Dnayanada Logo" className="max-w-full max-h-full sm:h-72" />
          </div>
        </div>
      </div>
    </div>


      
      <div className="  w-full flex justify-center mt-20">
      <div className="  lg:w-3/4 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-16 md:p-4 ">
      <div className="bg-yellow-200 rounded-lg  overflow-hidden p-2 " style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}>
            {/* <img className="w-full h-48 object-cover rounded-xl" src="/images/about.jpg"/>  */}
            <img className="w-full h-48 object-cover rounded-xl" src="/images/campus1.jpg"/> 
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">About</h2>
              <ul className="list-disc list-inside space-y-1">
                
                  <li className="text-gray-700">No Content</li>
                
              </ul>
            </div>
            <button className="w-full"><CiCircleChevLeft className="w-full h-14 "/></button>
          </div>
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden p-2" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}>
            {/* <img className="w-full h-48 object-cover rounded-xl" src="/images/courses.jpg"/> */
             <img className="w-full h-48 object-cover rounded-xl" src="/images/campus2.jpg"/>
            }
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">Courses</h2>
              <ul className="list-disc list-inside space-y-1">
                
                  <Link><li className="text-gray-700">Sanskrit</li></Link>
                  <Link><li className="text-gray-700">Marathi</li></Link>
                  <Link><li className="text-gray-700">Hindi</li></Link>
                  <Link><li className="text-gray-700">English</li></Link>
                  <Link><li className="text-gray-700">CBSE, STATE, ICSE(Board)</li></Link>
                  <Link><li className="text-gray-700">8th, 9th, 10th, 11th, 12th(standards)</li></Link>
                  <Link><li className="text-gray-700">BAMS, B.A, M.A</li></Link>
                
              </ul>
            </div>
            <button className="w-full"><CiCircleChevLeft className="w-full h-14 "/></button>
          </div>
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden p-2" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}>
            <img className="w-full h-48 object-cover rounded-xl" src="/images/admission.jpg"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">Admission</h2>
              <ul className="list-disc list-inside space-y-1">
                
                  <Link><li className="text-gray-700">Online Regestration</li></Link>
                  <Link><li className="text-gray-700">Scheduled school tour and orientation</li></Link>
                  <Link><li className="text-gray-700">Admission forms are available on the school or the school website.</li></Link>
                  <Link><li className="text-gray-700">The admission form along</li></Link>

              </ul>
            </div>
            <button className="w-full"><CiCircleChevLeft className="w-full h-14 "/></button>
          </div>
      </div>
    </div>
      
    </div>
    <div className=" mt-12 flex-col justify-center items-center mb-4">
    <div className="pb-7 text-center">
          <p className="text-black text-xl  md:text-2xl lg:text-3xl font-bold w-full max-h-32 ">
            The <span className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl" style={{fontFamily:"cursive"}}>Dnayanada</span> Philosopy
          </p>
        </div>
      <div className="text-center text-xl">
        <p>We believe in a holistic model of education and are strong believers in the methodology and prescriptions of the Centre on the
        </p>
      </div>
    <Philosopy/>
      
    </div>

    
    </>
  );
}

export default Hero;
