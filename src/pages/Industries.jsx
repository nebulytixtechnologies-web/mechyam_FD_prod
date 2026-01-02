import React from "react";
import { Link } from "react-router-dom";
import industries01 from "../assets/Industries-Image/industries01.jpg";

const Industries = () => (
  <>
    <section id="steel-structure" className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={industries01}
          alt="Industries Background"
          className="w-full"
          style={{ height: "50vh", objectFit: "cover" }}
        />
        <div className="absolute left-0 top-1/3 z-10 ml-8">
          <h1
            className="text-6xl  lg:text-l font-extrabold text-white mb-2 px-20 w-auto h-auto bg-gray-800 rounded bg-opacity-50"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Industries
          </h1>
        </div>
      </div>
    </section>

    {/* Offerings Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          Our offerings for the industrial sector include:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Common Card Style */}
          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-6">
            <div>
              <h1 className="text-6xl font-extrabold text-black">01</h1>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Aerospace & Transportation
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                Offering design and analysis services for aerospace and transport
                systems, Mechyam supports clients with innovation, reliability, and
                precision engineering solutions.
              </p>
            </div>
            <Link
              to="/aerospace-transportation"
              className="text-blue-700 font-semibold hover:underline mt-auto"
            >
              Read More
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-6">
            <div>
              <h1 className="text-6xl font-extrabold text-black">02</h1>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Wind Energy & Renewables
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                We help organizations transition to renewable energy sources
                efficiently—aligning with sustainability goals and reducing carbon footprints.
              </p>
            </div>
            <Link
              to="/windenergyrenewables"
              className="text-blue-700 font-semibold hover:underline mt-auto"
            >
              Read More
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-6">
            <div>
              <h1 className="text-6xl font-extrabold text-black">03</h1>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Manufacturing & Plant Engineering
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                We focus on integrating modern manufacturing technologies such as digital twins, robotics, and intelligent control systems to enhance production reliability and scalability.
              </p>
            </div>
            <Link
              to="/manufacturing-plantengineering"
              className="text-blue-700 font-semibold hover:underline mt-auto"
            >
              Read More
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-6">
            <div>
              <h1 className="text-6xl font-extrabold text-black">04</h1>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Structural Systems and Infrastructure
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                We integrate engineering precision with digital tools to develop efficient, cost-effective, and sustainable structural systems aligned with modern standards and construction practices.
              </p>
            </div>
            <Link
              to="/structural-infrastructure"
              className="text-blue-700 font-semibold hover:underline mt-auto"
            >
              Read More
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-6">
            <div>
              <h1 className="text-6xl font-extrabold text-black">05</h1>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Utilities & R&D Institutions
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                Our goal is to enable smarter, safer, and more efficient utilities through innovative technologies and sustainable engineering practices.
              </p>
            </div>
            <Link
              to="/utilities-r&dinstutions"
              className="text-blue-700 font-semibold hover:underline mt-auto"
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default Industries;
