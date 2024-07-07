import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block">आस्था समर्थानाम्</span>
              <span className="block text-orange-600 font-cursive text-5xl">
                परिचयः
              </span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/images/campus3.jpg"
                alt="Campus"
                className="rounded-lg shadow-lg max-h-80 md:max-h-full"
              />
            </div>
            {/* Middle Image */}
            <div className="flex justify-center">
              <img
                src="/images/middle.jpg"
                alt="Middle"
                className="rounded-lg shadow-lg max-h-80 md:max-h-full"
              />
            </div>
            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/images/right.jpg"
                alt="Right"
                className="rounded-lg shadow-lg max-h-80 md:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/aboutpage.jpg"
                alt="About Page"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-white tracking-wide mb-4">
                  अपना सफर
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  प्रा.गोरक्षनाथ बाबासाहेब उदागे <br />
                  संचलित<br />
                  ज्ञानदा संस्कृत प्रबोधिनी<br />
                  शाखा - पुणे, नगर<br />
                  स्थापना - 1/4/2013
                </p>
              </div>
              <div className="mt-8 text-center md:text-left">
                <p className="text-white text-lg leading-relaxed">
                  ज्ञानदा संस्कृत प्रबोधिनी, एक प्रेरणा और समृद्धि का केंद्र,
                  जहाँ समग्र विकास के लिए विद्यार्थियों का उत्थान किया जाता
                  है। हमारा लक्ष्य है कि विद्यार्थी न केवल अकादमिक बल्कि
                  आध्यात्मिक और सांस्कृतिक दृष्टिकोण में भी उत्कृष्टता प्राप्त
                  करें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
