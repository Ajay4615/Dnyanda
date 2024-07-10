import React from "react";
import {
  AiOutlineBook,
  AiOutlineUnorderedList,
  AiOutlineFundProjectionScreen,
  AiOutlineBank,
} from "react-icons/ai";

const ServicesSection = () => {
  const services = [
    {
      icon: <AiOutlineBook size={50} color="#3182CE" />,
      title: "Language Courses",
      description:
        "Explore a variety of language courses including Sanskrit, Marathi, Hindi, English, and more.",
    },
    {
      icon: <AiOutlineUnorderedList size={50} color="#3182CE" />,
      title: "Board Preparation",
      description:
        "Prepare for CBSE, State Board, ICSE exams with expert guidance and comprehensive study materials.",
    },
    {
      icon: <AiOutlineFundProjectionScreen size={50} color="#3182CE" />,
      title: "Academic Standards",
      description:
        "Courses tailored for 8th, 9th, 10th, 11th, and 12th standards ensuring academic excellence.",
    },
    {
      icon: <AiOutlineBank size={50} color="#3182CE" />,
      title: "Higher Education",
      description:
        "Advance your knowledge with courses in BAMS, BA, MA, and other higher education programs.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 ">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Explore our wide range of services tailored to meet your educational
            needs and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
