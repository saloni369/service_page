import React from "react";
import appdevlopment from "../assets/appdevlopment.jpeg";
import maintenance from "../assets/maintenance.jpeg";
import skillbased from "../assets/skillbased.jpeg";
import uiux from "../assets/uiux.jpeg";
import webdevlopment from "../assets/webdevlopment.jpeg";


const services = [
  {
    title: "Skill-Based Training",
    description:
      "We help students build practical skills, learn AI technologies, gain confidence, and work on real-world projects for successful careers.",
    image: skillbased,
    icon: "🎓",
  },

  {
    title: "Web & Software Development",
    description:
      "We build scalable, user-friendly websites and software solutions for startups, schools, hospitals, hotels, and businesses.",
    image: webdevlopment,
    icon: "💻",
  },

  {
    title: "Mobile App Development",
    description:
      "We create fast, secure, and user-friendly Android, iOS, and cross-platform mobile apps for modern businesses.",
    image: appdevlopment,
    icon: "📱",
  },

  {
    title: "UI/UX Design",
    description:
      "Modern and engaging UI/UX designs for websites, dashboards, mobile apps, and business platforms.",
    image: uiux,
    icon: "🎨",
  },

  {
    title: "Maintenance & Support",
    description:
      "We provide updates, bug fixing, monitoring, and technical support to keep systems secure and optimized.",
    image: maintenance,
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <div className="bg-[#0f1537] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#f5c658] mb-5">
          Our Services
        </h2>

        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-8 tracking-wide">
          We provide innovative digital solutions that help students,
          startups, businesses, and enterprises grow with modern
          technology and creative development services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#a8e1ec] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 flex flex-col"
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
             className="w-[90%] h-56 object-cover mx-auto mt-5 rounded-2xl"
            />

            {/* Content */}
            <div className="p-8 text-center flex flex-col flex-grow relative">

              {/* Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#0f1537] mt-12 mb-5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-7 mb-8 flex-grow tracking-wide">
                {service.description}
              </p>

              {/* Button */}
              <button className="mt-auto bg-[#f5c658] hover:bg-[#ffc93c] px-7 py-3 rounded-full text-black font-semibold transition duration-300">
                Learn More →
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;