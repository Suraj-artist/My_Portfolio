import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Track scroll position and display the arrow based on the footer visibility
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Show the arrow when the footer is near the bottom of the screen
        if (footerPosition <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Footer Section */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Left Side: About */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              About Me
            </h3>
            <p className="text-gray-400">
              I'm a passionate Full Stack Developer with expertise in building
              dynamic and user-friendly web applications. I thrive on creating
              innovative solutions that make an impact.
            </p>
          </div>

          {/* Middle: Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Connect With Me
            </h3>
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
              <a
                href="https://github.com/Suraj-artist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side: Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2025 Suraj. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button - Display when footer is visible */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-yellow-500 p-3 rounded-full cursor-pointer hover:bg-yellow-600 transition duration-300"
        >
          <FaArrowUp className="text-white text-2xl" />
        </div>
      )}
    </footer>
  );
}

export default Footer;
