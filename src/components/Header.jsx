import { useState } from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  // Section ID Mapping (ID should match exactly with sections in your content)
  const sectionIDs = {
    "Home": "home",
    "About Me": "about",
    "Education": "education",
    "Skills": "skills",
    "Projects": "projects",
    "Certificates": "certificates", // This should match the ID of the Certificates section
    "Contact": "contact",
  };

  // State to track the active section
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (section) => {
    setActiveSection(section);
    // Ensure the section scrolls into view when clicked
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Suraj Logo"
          className="w-15 h-15 object-cover rounded-full"
        />

        {/* Navigation Menu */}
        <ul className="flex gap-6 items-center">
          {Object.keys(sectionIDs).map((item) => {
            const section = sectionIDs[item]; 
            return (
              <li key={section}>
                <button
                  onClick={() => handleSetActive(section)}
                  className={`capitalize hover:text-yellow-500 py-2 px-4 rounded-lg transition ${
                    activeSection === section
                      ? "underline underline-offset-4 text-yellow-500 font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Contact Me Button */}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          onClick={() => handleSetActive("contact")}
        >
          Contact Me
        </button>
      </nav>
    </header>
  );
};

export default Header;

