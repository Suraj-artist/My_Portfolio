import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const sectionIDs = {
    "Home": "home",
    "About Me": "about",
    "Education": "education",
    "Skills": "skills",
    "Projects": "projects",
    "Certificates": "certificates", 
    "Contact": "contact",
  };

  const [activeSection, setActiveSection] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Suraj Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`
            flex flex-col lg:flex-row gap-6 items-center fixed lg:static inset-0 
            bg-gray-800 lg:bg-transparent p-8 lg:p-0 transition-transform 
            ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          {Object.keys(sectionIDs).map((item) => {
            const section = sectionIDs[item];
            return (
              <li key={section}>
                <button
                  onClick={() => handleSetActive(section)}
                  className={`capitalize hover:text-yellow-500 py-2 px-4 rounded-lg transition 
                    ${
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
      </nav>
    </header>
  );
};

export default Header;
