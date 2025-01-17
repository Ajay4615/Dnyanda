import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-yellow-300 py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
          We pride ourselves on providing a supportive and immersive learning
          environment. Our experienced instructors, comprehensive curriculum,
          and interactive teaching methods ensure that you receive the highest
          quality education.
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
          Whether you aim to pursue academic research, enhance your spiritual
          practice, or simply explore a new language, our academy is the perfect
          place to start.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
