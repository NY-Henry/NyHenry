import React from "react";
import reactPng from "../assets/react.png";
import nodeLogo from "../assets/node2.png";
import mobileLogo from "../assets/mobile.png";
import apiLogo from "../assets/api.png";
import onlineStore from "../assets/onlinestore.png";
import dbLogo from "../assets/database.png";
import tutoringLogo from "../assets/tutoring.png";
import securityLogo from "../assets/cybersecurity.png";

const ServicesOfferedArray = [
  {
    title: "Frontend WebDevelopment🌟🌟🌟",
    description:
      "Building responsive and high-quality websites using modern web technologies like HTML, CSS, JavaScript, and frameworks like React and Next Js",
    imageUrl: reactPng,
  },
  {
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications using Node.js, Express, and databases like MongoDB.",
    imageUrl: nodeLogo,
  },
  {
    title: "Mobile App Development",
    description:
      "For both Android and iOS platforms using technologies like React Native.",
    imageUrl: mobileLogo,
  },

  {
    title: "API Development",
    description: "Creating and integrating RESTful.",
    imageUrl: apiLogo,
  },
  {
    title: "E-commerce Development",
    description:
      "Building custom e-commerce solutions with features like product management, payment gateways, and order processing.",
    imageUrl: onlineStore,
  },

  {
    title: "Database Management",
    description:
      "Setting up and managing databases to store, retrieve, and manipulate data efficiently for web and (mobile applications! ).",
    imageUrl: dbLogo,
  },
  {
    title: "Tutoring",
    description:
      "Providing personalized coaching and mentoring in web development technologies, helping students and developers enhance their programming skills.",
    imageUrl: tutoringLogo,
  },
  {
    title: "Cybersecurity (Not available for now!)",
    description:
      "Implementing security measures to protect applications and data from cyber threats like hacking, malware, and data breaches.",
    imageUrl: securityLogo,
  },
];

const ServicesOffered = ({ handleRef }) => {
  return (
    <section className="py-16 px-4 dark:bg-transparent rounded-lg bg-gradient-to-br from-cyan-50 to-white">
      <h2 className="text-4xl dark:text-black font-bold mb-8 text-center">
        Services I Offer
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServicesOfferedArray.map((service, index) => (
          <div
            onClick={handleRef}
            key={index}
            title={service.title}
            className=" hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-6">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-3/4 h-full object-contain mx-auto transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-teal-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;
