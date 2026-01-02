import React from "react";
import { Link } from "react-router-dom";

import steelDetailingImg from "../assets/StructuralSteelImages/structural-steel-detailing.jpeg";
import structuralsteel from "../assets/StructuralSteelImages/structuralsteel.jpg";

const StructuralSteel = () => (
  <>
    {/* Hero Section */}
    <section id="steel-structure" className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={structuralsteel}
          alt="Steel Structure Background"
          className="w-full"
          style={{
            height: "50vh",
            width: "100vw",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          className="absolute left-0 top-1/3 z-10 ml-8"
          style={{ maxWidth: "50vw" }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-2 text-left px-20 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Structural Steel
          </h1>
        </div>
      </div>
    </section>

    {/* Two-column section: text (left) and image (right) */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Structural Steel
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Steel Detailing services from Mechyam use the state-of-the-art
              technical tools and solutions. Our services are tailored to our
              customers’ needs in an efficient and transparent manner.
            </p>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Driven by a passion to build a better tomorrow, we strive to go
              above and beyond customer expectations. With emphasis on research,
              and focus on quality, we offer highly innovative steel detailing
              solutions to our valued customers.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={steelDetailingImg}
              alt="Steel detailing"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Project types and services section */}
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          We provide NC files, KISS files, ABM’s for Fabtrol / CNC machines and
          PEDDIMAT & DSTV formats as well
        </h2>
        <ul className="list-none m-0 p-0 mb-8">
          {[
            "Heavy Industrial Buildings",
            "Multistory Structures",
            "Churches",
            "Schools",
            "Power Plants",
            "Miscellaneous",
            "Complex Commercial Buildings",
            "Hospitals & Medical Buildings",
            "Shopping Centers",
            "Auditoriums",
            "Petrochemical Refineries",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start mb-2">
              <span className="w-3 h-3 bg-blue-900 mr-3 mt-1 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* ✅ Updated Read More Cards (5) with equal height alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 01 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-indigo-600">01</span>
              <h3 className="text-xl font-bold mt-2">Engineering Design</h3>
              <p className="text-gray-600 mt-2 text-justify">
                Engineering design focuses on creating practical, efficient, and
                innovative structures and systems that meet project goals.
              </p>
            </div>
            <Link
              to="/engineering-design"
              className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          {/* 02 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-indigo-600">02</span>
              <h3 className="text-xl font-bold mt-2">Structural Analysis</h3>
              <p className="text-gray-600 mt-2 text-justify">
                Structural analysis ensures the stability and safety of
                structures by evaluating loads, stresses, and overall behavior.
              </p>
            </div>
            <Link
              to="/structural-analysis"
              className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          {/* 03 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-indigo-600">03</span>
              <h3 className="text-xl font-bold mt-2">
                Structural Engineering Services
              </h3>
              <p className="text-gray-600 mt-2 text-justify">
                Structural engineering ensures buildings and infrastructure
                remain safe, stable, and resilient to environmental forces.
              </p>
            </div>
            <Link
              to="/structural-engineering"
              className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          {/* 04 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-indigo-600">04</span>
              <h3 className="text-xl font-bold mt-2">
                Structural Steel Detailing
              </h3>
              <p className="text-gray-600 mt-2 text-justify">
                Structural steel detailing involves precise drawings for
                fabrication and assembly, ensuring accuracy and efficiency.
              </p>
            </div>
            <Link
              to="/structuralsteeldetailingservices"
              className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>

          {/* 05 */}
          
        </div>
      </div>
    </section>
  </>
);

export default StructuralSteel;
