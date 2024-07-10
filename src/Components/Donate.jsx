import React from "react";

const DonatePage = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Donate to Support Our Cause
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
            Your contribution helps us continue our mission of providing quality
            education and support to our community. Every donation makes a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ways to Donate
            </h3>
            <ul className="text-lg text-gray-800">
              <li className="mb-3">
                <span className="font-semibold">Online:</span> Visit our secure
                donation portal to make a one-time or recurring donation.
              </li>
              <li className="mb-3">
                <span className="font-semibold">Bank Transfer:</span> You can
                transfer funds directly to our bank account. Contact us for
                details.
              </li>
              <li className="mb-3">
                <span className="font-semibold">Cheque:</span> Send a cheque
                payable to "Dnyanada Sanskrit Prabodhini" to our address.
              </li>
            </ul>
          </div>
          <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Online Donation Form
            </h3>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600"
              />
              <input
                type="number"
                placeholder="Donation Amount (INR)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600"
              />
              <textarea
                placeholder="Your Message (Optional)"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-yellow-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
