import React from "react";
import FSD from "../assets/Excelr.jpg";
import Internship from "../assets/internship.jpg";
import Apprecitation from "../assets/rfchh_appreciation.jpg";

function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development Certification",
      description:
        "Certified by EXCELR Raising Excellence for mastering Full Stack Java Development.",
      issueDate: "02 September 2024",
      image: FSD,
    },
    {
      title: "Internship from AiVariant",
      description:
        "Awarded for successfully completing the Internship Project through Full Stack Java Developer from 15 July 2024 to 15 October 2024.",
      issueDate: "16 October 2024",
      image: Internship,
    },
    {
      title: "Appreciation Certificate from RFCHH",
      description:
        "Awarded for outstanding contribution to the organization, demonstrating leadership and commitment to excellence.",
      issueDate: "01 November 2024",
      image: Apprecitation,
    },
  ];

  return (
    <section
      id="certificates"
      className="relative py-16 bg-gray-900 text-white"
    >
      {/* Line on top of the section */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-gray-500 text-sm mb-4">
                  Issued on: {cert.issueDate}
                </p>
                <p className="text-yellow-500 font-medium hover:underline">
                  View Certificate
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

