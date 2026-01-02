import React from "react";

import utilityImg from "../../assets/UtilitiesandRandDInstitutions-Images/utilities.jpg"; 
import researchImg from "../../assets/UtilitiesandRandDInstitutions-Images/utilities01.jpg"; 
import innovationImg from "../../assets/UtilitiesandRandDInstitutions-Images/randdinstitutions.jpg"; 

const UtilitiesandRandDInstitutions = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={utilityImg}
          alt="Utilities and R&D Background"
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
            className="text-5xl md:text-5xl font-extrabold text-white mb-2 text-left px-20 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Utilities & R&D Institutions
          </h1>
        </div>
      </div>
    </section>

    {/* Main Content Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* First Row: Utilities Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Utilities Infrastructure Services
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              <strong>Mechyam</strong> provides comprehensive engineering and technology solutions 
              for the <strong>utilities sector</strong>, supporting essential infrastructure like 
              power generation, water management, waste treatment, and energy distribution systems.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              We ensure that critical utilities are efficient, sustainable, and resilient — 
              meeting both modern demands and environmental standards.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Utilities Services include:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Power & Energy Distribution Systems</li>
              <li>Water & Wastewater Treatment Solutions</li>
              <li>Automation & Control Systems Integration</li>
              <li>Maintenance and Reliability Engineering</li>
              <li>Infrastructure Modernization and Upgrades</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify leading-relaxed">
              Our goal is to enable smarter, safer, and more efficient utilities through 
              innovative technologies and sustainable engineering practices.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={researchImg}
              alt="Utilities Engineering"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Second Row: R&D Institutions Section */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={innovationImg}
              alt="R&D Institutions"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h3 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Research & Development Institutions
            </h3>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              We collaborate with <strong>R&D institutions</strong> and innovation centers 
              to accelerate scientific and technological progress across multiple domains.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our engineering and data-driven capabilities empower researchers to design, 
              prototype, and validate breakthrough technologies efficiently and safely.
            </p>

            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Design and Prototyping Support</li>
              <li>Testing, Simulation & Validation</li>
              <li>Data Acquisition & Analysis Systems</li>
              <li>Automation & Instrumentation Solutions</li>
              <li>Collaborative Innovation Platforms</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify">
              Through strong partnerships, Mechyam bridges the gap between 
              <strong>research, engineering, and real-world implementation</strong>, 
              enabling continuous innovation and knowledge advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UtilitiesandRandDInstitutions;
