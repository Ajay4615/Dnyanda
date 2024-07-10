import React from "react";

const ContactusSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Have questions or want to learn more about our services? Reach out
            to us using the contact information below or fill out the form, and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="text-lg text-gray-800 mb-4">
              <p>
                <span className="font-semibold">Address:</span> Alandi, Pune,
                Maharashtra, India - 412105
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91-9922456832,
                +91-9175116107
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                gorakshaue@gmail.com
              </p>
            </div>
            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-green-500 transition duration-300"
              >
                <i className="fab fa-whatsapp-square"></i>
              </a>
            </div>
          </div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactusSection;
