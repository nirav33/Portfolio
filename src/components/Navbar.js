import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinkClasses = () => 
  "relative text-lg text-teal-100 transition duration-300 ease-in-out hover:text-white" +
  " after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-teal-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg">
        <div className="container mx-auto px-7 py-4 flex justify-between items-center">
          <Link to="/" className="md:text-3xl text-xl font-extrabold text-teal-100">
            <span className="md:text-4xl text-2xl text-teal-300">N</span>irav <span className="md:text-4xl text-2xl text-teal-300">P</span>armar
          </Link>

          {/* Toggle button for mobile menu */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <span
                className={`block absolute h-1 w-full bg-white rounded transition-transform duration-500 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}
              />
              <span
                className={`block absolute h-1 w-full bg-white rounded transition-opacity duration-500 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block absolute h-1 w-full bg-white rounded transition-transform duration-500 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}
              />
            </div>
          </button>

          {/* Desktop navigation links */}
          <nav className={`hidden md:block space-x-9 mr-10`}>
            <button
              onClick={() => handleScrollToSection("home")}
              className={navLinkClasses()}
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("project")}
              className={navLinkClasses()}
            >
              Project
            </button>
            <button
              onClick={() => handleScrollToSection("skill")}
              className={navLinkClasses()}
            >
              Skill
            </button>
            <button
              onClick={() => handleScrollToSection("education")}
              className={navLinkClasses()}
            >
              Education
            </button>
            <button
              onClick={() => handleScrollToSection("achievement")}
              className={navLinkClasses()}
            >
              Achievement
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className={navLinkClasses()}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <button
                onClick={() => handleScrollToSection("home")}
                className={navLinkClasses()}
              >
                Home
              </button>
              <button
                onClick={() => handleScrollToSection("project")}
                className={navLinkClasses()}
              >
                Project
              </button>
            <button
              onClick={() => handleScrollToSection("skill")}
              className={navLinkClasses()}
            >
              Skill
            </button>
              <button
                onClick={() => handleScrollToSection("education")}
                className={navLinkClasses()}
              >
                Education
              </button>
              <button
                onClick={() => handleScrollToSection("achievement")}
                className={navLinkClasses()}
              >
                Achievement
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className={navLinkClasses()}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
