// CoursesSection.jsx

import React from "react";
import CourseCard from "./CourseCard"; // Adjust the path as per your project structure

const CoursesSection = () => {
  const courses = [
    {
      imageUrl: "/images/campus1.jpg",
      title: "About",
      links: [{ path: "/about", text: "No Content" }],
    },
    {
      imageUrl: "/images/campus2.jpg",
      title: "Courses",
      links: [
        { path: "/sanskrit", text: "Sanskrit" },
        { path: "/marathi", text: "Marathi" },
        { path: "/hindi", text: "Hindi" },
        { path: "/english", text: "English" },
        { path: "/cbse", text: "CBSE, STATE, ICSE(Board)" },
        { path: "/standards", text: "8th, 9th, 10th, 11th, 12th (standards)" },
        { path: "/bams", text: "BAMS, B.A, M.A" },
      ],
    },
    {
      imageUrl: "/images/admission.jpg",
      title: "Admission",
      links: [
        { path: "/online-registration", text: "Online Registration" },
        {
          path: "/school-tour",
          text: "Scheduled school tour and orientation",
        },
        {
          path: "/admission-forms",
          text: "Admission forms are available on the school or the school website.",
        },
        { path: "/admission-form", text: "The admission form along" },
      ],
    },
  ];

  return (
    <div className="w-full px-12 md:px-6 flex justify-center mt-20">
      <div className="lg:w-3/4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:p-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              links={course.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
