import React from 'react'
import Photo from "../assets/my.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-4 sm:px-6 bg-gray-900 text-white"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          Hello, I'm <span className="text-yellow-400">Baksi Suraj</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
          A results-driven{" "}
          <span className="text-yellow-400 font-bold">
            Full Stack Developer
          </span>{" "}
          and <span className="text-yellow-400 font-bold">UI/UX Designer</span>,
          dedicated to delivering user-friendly applications with exceptional
          performance and intuitive design.
        </p>

        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4 mb-6">
          <a
            href="https://www.facebook.com/share/19jhUeF6jQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/Suraj73965250?t=O8SIcv4f1-98QQA541LgQQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/cricket_lvr_abd_suraj_virat?igsh=ajE0dGU4ZWF1MWwx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/surajbaksi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href="https://portfolio-vercel-gamma-three.vercel.app"
          className="inline-block bg-yellow-400 text-gray-800 px-3 sm:px-4 md:px-6 py-2 rounded shadow hover:bg-yellow-500"
        >
          view cv
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 relative">
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-80 md:h-80 rounded-full border-4 border-transparent neon-ring animate-spin"></div>
        <img
          src={Photo}
          alt="Suraj"
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
