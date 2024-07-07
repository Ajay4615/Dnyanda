import React from "react";

function Sector() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/flower.jpg"
          alt="flower"
          className="h-80vh md:h-60vh w-full object-cover opacity-40 rounded-xl"
        />
        <div className="absolute bottom-4 left-4">
          <p className="text-xl md:text-2xl text-white">
            {/* <b>Latest updates regarding school, events, and achievements.</b> */}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-4xl text-center text-orange-500 font-cursive mb-8">
          <b>News</b>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex justify-center items-center p-3 border-4 border-orange-500 rounded-lg">
            <img
              src="/images/news1.jpg"
              alt="news1"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center p-3 border-4 border-orange-500 rounded-lg">
            <img
              src="/images/news2.jpg"
              alt="news2"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center p-3 border-4 border-orange-500 rounded-lg">
            <img
              src="/images/news3.jpg"
              alt="news3"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center p-3 border-4 border-orange-500 rounded-lg">
            <img
              src="/images/news4.jpg"
              alt="news4"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sector;
