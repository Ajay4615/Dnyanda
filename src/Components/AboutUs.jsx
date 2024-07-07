import React from "react";


function AboutUs() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-3 md:mt-10">
        <div className=" flex gap-6 w-full md:w-2/3 py-20">
          <div className=" flex items-center justify-center w-2/3 ">
            <img
              src="/images/left.jpeg"
              alt="image"
              className=" rotate-[-20deg] h-full z-10 border-4 border-red-600 "
            />
          </div>
          <div className="flex items-center w-2/3">
            <img
              src="/images/middle.jpeg"
              alt="image"
              className=" h-full  z-20  border-4 border-red-600"
            />
          </div>
          <div className=" flex items-center w-2/3">
            <img
              src="/images/right.jpeg"
              alt="image"
              className=" rotate-[20deg] lg:h-full h-full  z-10 border-4 border-red-600 "
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl">
          <b>Know Us Better </b>
        </p>
        <p
          className="text-orange-600 text-3xl "
          style={{ fontFamily: "cursive" }}
        >
          <b>About</b>
        </p>
      </div>

      <div className="w-screen  bg-orange-500 mt-5">
        <div className="flex ">
          <div className=" px-4 md:px-10 w-1/2 flex justify-center items-center">
            <img src="./images/aboutpage.jpeg" alt="" className="w-fit h-2/3 " style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}/>
          </div>
          <div className=" flex items-center justify-center">
            <div className="text-black p-4 md:p-10  text-xl md:text-3xl flex items-center justify-center">  
           <p className="md:leading-loose"> प्रा.गोरक्षनाथ बाबासाहेब उदागे <br />संचलित<br />ज्ञानदा संस्कृत प्रबोधिनी<br />शाखा - पुणे,नगर<br />स्थापना - 1/4/2013</p>
            </div>
          </div>
        </div>

        <div className="pb-60">
          <p className="text-white px-10 md:px-32 text-lg md:text-2xl">Our journey began in 2013 .....</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
