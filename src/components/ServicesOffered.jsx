import React from "react";
import reactPng from "../assets/react.png";
import nodeLogo from "../assets/node2.png";
import mobileLogo from "../assets/mobile.png";
import apiLogo from "../assets/api.png";
import onlineStore from "../assets/onlinestore.png";
import dbLogo from "../assets/database.png";
import cloudLogo from "../assets/cloud.png";
import securityLogo from "../assets/cybersecurity.png";

const ServicesOfferedArray = [
  {
    title: "Frontend Web Development ✔✔",
    description:
      "Building responsive and high-quality websites using modern web technologies like HTML, CSS, JavaScript, and frameworks like React.",
    imageUrl: reactPng,
  },
  {
    title: "Backend Development ✔",
    description:
      "Developing robust and scalable server-side applications using Node.js, Express, and databases like MongoDB.",
    imageUrl: nodeLogo,
  },
  {
    title: "Mobile App Development (Not available for now!!)",
    description:
      "Creating user-friendly and efficient mobile applications for both Android and iOS platforms using technologies like React Native.",
    imageUrl: mobileLogo,
  },

  {
    title: "API Development ✔",
    description:
      "Creating and integrating RESTful and GraphQL APIs to enable seamless communication between different parts of an application.",
    imageUrl: apiLogo,
  },
  {
    title: "E-commerce Development (Not available for now!)",
    description:
      "Building custom e-commerce solutions with features like product management, payment gateways, and order processing.",
    imageUrl: onlineStore,
  },

  {
    title: "Database Management ✔",
    description:
      "Setting up and managing databases to store, retrieve, and manipulate data efficiently for web and (mobile applications! ).",
    imageUrl: dbLogo,
  },
  {
    title: "Cloud Computing (Not available for now!)",
    description:
      "Deploying applications on cloud platforms like AWS, Azure, and Google Cloud to ensure scalability, security, and performance.",
    imageUrl: cloudLogo,
  },
  {
    title: "Cybersecurity (Not available for now!)",
    description:
      "Implementing security measures to protect applications and data from cyber threats like hacking, malware, and data breaches.",
    imageUrl: securityLogo,
  },
];

const ServicesOffered = () => {
  return (
    <section className="py-12 px-4 dark:bg-transparent rounded-lg bg-cyan-50">
      <h2 className="text-3xl dark:text-white font-semibold mb-4">
        Services I Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ServicesOfferedArray.map((service, index) => (
          <div
            key={index}
            className="bg-slate-100 dark:bg-gradient-to-b dark:text-white from-cyan-800 to-teal-400 dark:shadow-lg  p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-1/2 h-52  rounded-t-lg mb-4"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700  text-2xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;
