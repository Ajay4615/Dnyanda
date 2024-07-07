import React from "react";

function Sector() {
  return (
    <>
      <div className="">
        <img
          src="/images/flower.jpg"
          alt="flower"
          className="h-30vh md:h-80vh w-full opacity-40 rounded-xl"
        />
      </div>
      <div className="relative left-4 bottom-16  md:bottom-16 flex flex-col">
        <p className="text-center text-xl">
          <b>Latest updates regarding school, events and achievements.</b>
        </p>
        <p className="text-center text-red-700 text-xl md:block hidden">
          <b>-------------------------------------------------------</b>
        </p>
      </div>

      <div>
        <p
          className="text-center text-5xl text-orange-500"
          style={{ fontFamily: "cursive" }}
        >
          News
        </p>
        <div className="flex">
          <div className="flex-col  md:w-1/2">
            <div className="md:p-10 p-3 text-center">
              <img
                src="/images/news1.jpg"
                alt="image  "
                className="border border-x-4 border-y-4 border-black"
              />
            </div>
            <div className="md:p-10 p-3 ">
              <img
                src="/images/news2.jpg"
                alt="image  "
                className="border w-fit border-x-4 border-y-4 border-black"
              />
            </div>
          </div>
          <div className="flex-col md:w-1/2">
            <div className="md:p-10 p-3 ">
              <img
                src="/images/news3.jpg"
                alt="image  "
                className="border border-x-4 border-y-4 border-black"
              />
            </div>
            <div className="md:p-10 p-3 ">
              <img
                src="/images/news4.jpg"
                alt="image  "
                className="border border-x-4 border-y-4 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sector;
