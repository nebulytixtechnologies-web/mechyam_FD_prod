import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactButton from "./ContactButton";
import EmailButton from "./EmailButton";
import CareerButton from "./CareerButton";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo-Image/MADS01.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  // ✅ Scroll Hide/Show State
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Scroll Behavior Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down & not at top
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openDropdown = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const scheduleCloseDropdown = (delay = 200) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimeoutRef.current = null;
    }, delay);
  };

  return (
    <>
      {/* ✅ Navbar Section */}
      <nav
        className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 ">
          {/* Left: Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Logo" className="h-28 w-auto" />

            </Link>
            
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="block md:hidden text-gray-800"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium relative z-50">
            {/* Structural Steel Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("steel")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <Link
                to="/structural-steel"
                className="hover:text-blue-600 transition px-1 py-1 inline-block"
              >
                Structural Steel ▾
              </Link>

              {activeDropdown === "steel" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[16rem]"
                  onMouseEnter={() => openDropdown("steel")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/engineering-design"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Engineering Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/structural-analysis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Structural Analysis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/structural-engineering"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Structural Engineering Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/structuralsteeldetailingservices"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Structural Steel Detailing Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Mechanical Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("mechanical")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <Link
                to="/mechanical"
                className="hover:text-blue-600 transition px-1 py-1 inline-block"
              >
                Mechanical ▾
              </Link>
              {activeDropdown === "mechanical" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[16rem]"
                  onMouseEnter={() => openDropdown("mechanical")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/product-design-development"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Product Design & Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/computer-aided-engineering"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Computer Aided Engineering (CAE)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/embedded-design"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Embedded Design
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("industries")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <Link
                to="/industries"
                className="hover:text-blue-600 transition px-1 py-1 inline-block"
              >
                Industries ▾
              </Link>
              {activeDropdown === "industries" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[16rem]"
                  onMouseEnter={() => openDropdown("industries")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/aerospace-transportation"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Aerospace and Transportation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/windenergyrenewables"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Wind Energy and Renewables
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/manufacturing-plantengineering"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Manufacturing and Plant Engineering
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/structural-infrastructure"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Structural Systems and Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/utilities-r&dinstutions"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Utilities & R&D Institutions
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* R&D */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("rnd")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <span className="hover:text-blue-600 transition px-1 py-1 inline-block cursor-pointer">
                R&D ▾
              </span>
              {activeDropdown === "rnd" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[18rem]"
                  onMouseEnter={() => openDropdown("rnd")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/structural-rnd"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Structural Detailing R&D
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mechanical-rnd"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Mechanical Engineering R&D
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-blue-600 transition px-1 py-1 inline-block"
              >
                Projects
              </Link>
            </li>

            {/* About */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("about")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <Link
                to="/about"
                className="hover:text-blue-600 transition px-1 py-1 inline-block"
              >
                About ▾
              </Link>
              {activeDropdown === "about" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[12rem]"
                  onMouseEnter={() => openDropdown("about")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/company"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-clients"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Our Clients
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* More */}
            <li
              className="relative"
              onMouseEnter={() => openDropdown("more")}
              onMouseLeave={() => scheduleCloseDropdown()}
            >
              <span className="hover:text-blue-600 transition px-1 py-1 inline-block cursor-pointer">
                More ▾
              </span>
              {activeDropdown === "more" && (
                <div
                  className="absolute left-0 top-full bg-white rounded-md shadow-lg z-50 mt-0 min-w-[12rem]"
                  onMouseEnter={() => openDropdown("more")}
                  onMouseLeave={() => scheduleCloseDropdown()}
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/admin-page"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Admin Panel
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden md:flex space-x-3">
            <ContactButton />
            <EmailButton />
            <CareerButton />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col text-gray-800 font-medium px-6 py-4 space-y-3">
              <li>
                <Link to="/structural-steel" onClick={() => setMenuOpen(false)}>
                  Structural Steel
                </Link>
              </li>
              <li>
                <Link to="/mechanical" onClick={() => setMenuOpen(false)}>
                  Mechanical
                </Link>
              </li>
              <li>
                <Link to="/industries" onClick={() => setMenuOpen(false)}>
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/admin-login" onClick={() => setMenuOpen(false)}>
                  Admin Login
                </Link>
              </li>
              <div className="flex flex-col gap-2 pt-3">
                <ContactButton />
                <EmailButton />
                <CareerButton />
              </div>
            </ul>
          </div>
        )}
      </nav>

      {/* ✅ Spacer div to prevent page images from being overlapped */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
