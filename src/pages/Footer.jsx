import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaLinkedin, FaGlobe, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Added icons
import MADS from "../assets/Logo-Image/MADS01.jpg";

const Footer = () => {
  const services = {
    "STRUCTURAL STEEL": [
      { name: "Engineering Design", link: "/engineering-design" },
      { name: "Structural Analysis", link: "/structural-analysis" },
      { name: "Structural Engineering Services", link: "/structural-engineering" },
      { name: "Structural Steel Detailing Services", link: "/structuralsteeldetailingservices" },

    ],
    MECHANICAL: [
      { name: "Product Design & Development", link: "/product-design-development" },
      { name: "Computer Aided Engineering (CAE) Service", link: "/computer-aided-engineering" },
      { name: "Embedded Design", link: "/embedded-design" },
    ],
    INDUSTRIES: [
      { name: "Aerospace and Transportation", link: "/aerospace-transportation" },
      { name: "Wind Energy and Renewables", link: "/windenergyrenewables" },
      { name: "Manufacturing and Plant Engineering", link: "/manufacturing-plantengineering" },
      { name: "Structural System and Infrastructure", link: "/structural-infrastructure" },
      { name: "Utilities & R&D Instutions", link: "/utilities-r&dinstutions" }
    ],
    GENERAL: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
      { name: "Contact", link: "/contact" },

    ],
    CAREERS: [{ name: "View Opportunities", link: "/careers" }],
  };

  return (
    <footer className="bg-[#3a3a3a] text-white py-14">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SECTION - CONTACT INFO */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-8">
              <img src={MADS} alt="Mechyam Logo" className="w-20 h-30 mr-3" />
              <h1 className="text-3xl font-bold text-blue-800">Mechyam</h1>
            </div>

            <h2 className="text-lg font-semibold mb-4 tracking-wide border-b border-gray-600 pb-2">
              CONTACT
            </h2>
            <div className="mb-6 text-sm leading-6 space-y-3">

              <p className="font-semibold text-gray-300 text-lg">MECHYAM AI DESIGN SOLUTIONS PVT. LTD.</p>

              {/* Address */}
              <div className="flex items-start text-gray-300 mt-3 ">
                <FaMapMarkerAlt className=" mr-2 text-blue-400" size={25} />
                <a
                  href="https://www.google.com/maps/place/17%C2%B025'09.4%22N+78%C2%B037'38.8%22E/@17.4193417,78.6274306,49m/data=!3m1!1e3!4m4!3m3!8m2!3d17.419264!4d78.627434!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-blue-400 transition"
                >
                  Plot No. 97-E EP, Mahalaxmipuram, Narapally,
                  Ghatkesar (M), Medhcal-Malkajgiri (D),
                  Hyderabad, Telangana – 500 088.
                </a>

              </div>

              {/* Contact Numbers */}
              <div className="flex items-center text-gray-300">
                <FaPhoneAlt className="mr-2 text-blue-400" />
                <p> + 91 80089 71490</p>
              </div>
              {/* Corporate Office */}
              <p className="font-semibold text-gray-300 text-lg mt-3">
                CORPORATE OFFICE (India)
              </p>
              <div className="flex items-start text-gray-300 ">
                <FaMapMarkerAlt className=" mr-2 text-blue-400 " size={30} />
                <a
                  href="https://www.google.com/maps/place/PSR+Prime+Tower/@17.4468856,78.3522741,442m/data=!3m1!1e3!4m6!3m5!1s0x3bcb93bc4ed905dd:0xde04a2d79881269f!8m2!3d17.4470695!4d78.354116!16s%2Fg%2F12qf68vbt!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-blue-400 transition"
                >
                  #501-B,PSR Prime Towers, 5th Floor,
                  Beside DLF, Gachibowli,
                  Hyderabad, Telangana – 500 032.
                </a>
              </div>

              <div className="flex items-center text-gray-300">
                <FaPhoneAlt className="mr-2 text-blue-400" />
                <p>+91 8125263737, +91 8125263838</p>
              </div>


              <hr className="my-3 border-gray-700" />

              {/* Website */}
              <div className="flex items-center text-gray-400 hover:text-blue-400  transition duration-300">
                <FaGlobe className="mr-2 text-blue-400" />
                <a
                  href="https://www.mechyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  www.mechyam.com
                </a>


              </div>

              {/* Emails */}
              <div className="flex flex-col space-y-1 mt-2 text-gray-400">

                {/* HR Mail */}
                <div className="flex items-center hover:text-blue-400 transition duration-300">
                  <FaEnvelope className="mr-2 text-blue-400" />
                  <a
                    href="mailto:hr@mechyam.com?subject=Job%20Application"
                    className="underline"
                  >
                    hr@mechyam.com
                  </a>
                </div>
              </div>


              <hr className="my-3 border-gray-700" />

              {/* Social Media */}
              <div>
                <p className="font-semibold text-gray-300 mb-2">
                  Follow us on social for updates
                </p>
                <div className="flex flex-row space-x-4 mt-2">
                  <a
                    href="https://in.linkedin.com/in/mechyam-ai-design-solutions-private-limited-mads-383583361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex hover:text-blue-500 transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={28} />

                  </a>


                  <a
                    href="https://www.instagram.com/Mechyam_2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition "
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - SERVICES */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <div className="mb-8">
                <h3 className="font-bold text-white mb-4 text-base tracking-wide">
                  STRUCTURAL STEEL
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services["STRUCTURAL STEEL"].map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="hover:text-white cursor-pointer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4 text-base tracking-wide">MECHANICAL</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services["MECHANICAL"].map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="hover:text-white cursor-pointer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-white mb-4 text-base tracking-wide">INDUSTRIES</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {services["INDUSTRIES"].map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="hover:text-white cursor-pointer">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <div className="mb-8">
                <h3 className="font-bold text-white mb-4 text-base tracking-wide">GENERAL</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services["GENERAL"].map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="hover:text-white cursor-pointer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4 text-base tracking-wide">CAREERS</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services["CAREERS"].map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="hover:text-white cursor-pointer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>Copyright © 2025 Mechyam - All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              TERMS OF USE
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
