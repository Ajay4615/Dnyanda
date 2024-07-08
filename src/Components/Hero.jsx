import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import Split from "./Split";
import Philosopy from "./Philosophy";

function Hero() {
  
  return (
    <>
      <div className="flex-col bg-yellow-300 rounded-xl ">
        <div className="">
          <img
            src={"/images/background.jpeg"}
            alt="My Image"
            className="bg-yellow-500 opacity-65 xl:h-screen lg:w-screen lg:object-cover "
          />

          <div className="absolute inset-0 flex items-center justify-center h-80 sm:h-70vh lg:h-screen mt-20 name">
            <p className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold opacity-80 underline">
              ज्ञानदा संस्कृत प्रबोधिनी
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-yellow-300 py-6">
          <div className="w-screen md:w-1/2 p-2">
            <p
              className="text-black  md:text-lg text-base font-mono"
              style={{ fontFamily: "cursive" }}
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
      </div>

      <div className="mt-3 mb-7">
        <div>
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
        {/* <div className="flex justify-center items-center w-full flex-wrap">
          <div className="px-10  py-5 md:p-11 xl:px-20 w-full md:w-1/2 ">
            <img
              src="./images/background.jpg"
              alt="left side image"
              className="rounded-tl-3xl rounded-br-3xl w-full"
            />
          </div>
          <div className="px-10 py-5 md:p-11 xl:px-20 w-full md:w-1/2 ">
            <img
              src="./images/background.jpg"
              alt="right side image"
              className="rounded-tl-3xl rounded-br-3xl w-full"
            />
          </div>
          <p className="text-wrap text-sm md:text-auto">
            Deccan College (Dictionary Kosh ),Pune
          </p>
        </div> */}
      </div>

      <div className="bg-yellow-500 w-full flex justify-center items-center h-50vh sm:h-80vh rounded-lg">
        <div className="flex-col items-center justify-center text-center w-1/2 ">
        <div className="pb-7">
          <p className="text-black text-xl  md:text-2xl lg:text-3xl font-bold w-full h-10vh ">
            The <span className="text-white text-3xl sm:text-4xl lg:text-6xl" style={{fontFamily:"cursive"}}>Dnayanada</span> Vision
          </p>
        </div>
          <div className="w-full ">
          <div className="bg-white w-full h-44 sm:h-96  items-center  flex justify-center">
            <img src="/images/logo.jpg" alt="" className="w-fit h-40 sm:h-80" />
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
          <p className="text-black text-xl  md:text-2xl lg:text-3xl font-bold w-full h-10vh ">
            The <span className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl" style={{fontFamily:"cursive"}}>Dnayanada</span> Philosopy
          </p>
        </div>
      <div className="text-center text-xl">
        <p>We believe in a holistic model of education and are strong believers in the methodology and prescriptions of the Centre on the
        </p>
      </div>
    <Philosopy/>
      {/* <div>
      <div className="flex justify-center items-center w-full flex-wrap">
          <div className="px-10  py-5 md:p-11 xl:px-20 w-full md:w-1/2 ">
            <img
              src="./images/background.jpg"
              alt="left side image"
              className="rounded-tl-3xl rounded-br-3xl w-full"
            />
          </div>
          <div className="px-10 py-5 md:p-11 xl:px-20 w-full md:w-1/2 ">
            <img
              src="./images/background.jpg"
              alt="right side image"
              className="rounded-tl-3xl rounded-br-3xl w-full"
            />
          </div>
        </div>
      </div> */}
    </div>

    
    </>
  );
}

export default Hero;
