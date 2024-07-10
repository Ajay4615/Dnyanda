import React from "react";

const CentersPage = () => {
  const centers = [
    {
      id: 1,
      imageUrl: "/images/center1.jpg",
      title: "Center 1",
      description:
        "Located in Pune, Maharashtra, Center 1 offers a serene environment for education and learning.",
      address: "Address: Center 1, Pune, Maharashtra",
      contact: "Contact: +91-9876543210",
    },
    {
      id: 2,
      imageUrl: "/images/center2.jpg",
      title: "Center 2",
      description:
        "Center 2 is situated in Mumbai, Maharashtra, known for its vibrant atmosphere and educational facilities.",
      address: "Address: Center 2, Mumbai, Maharashtra",
      contact: "Contact: +91-9876543210",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Centers
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Explore our centers dedicated to providing quality education and
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {centers.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={center.imageUrl}
                alt={center.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {center.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{center.description}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-gray-700">{center.address}</p>
                  <p className="text-gray-700">{center.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentersPage;
