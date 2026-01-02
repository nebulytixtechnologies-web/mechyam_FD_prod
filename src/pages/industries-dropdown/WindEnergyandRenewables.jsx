import React from "react";

import WindenergyImg from "../../assets/WindEnergyandRenewables-Images/windenergy.jpg";
import WindenergyImg01 from "../../assets/WindEnergyandRenewables-Images/windenergy01.jpg";
import RenewableEnergyImg from "../../assets/WindEnergyandRenewables-Images/renewableenergy.jpg"; // ✅ Add your new image here

const WindEnergyandRenewables = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={WindenergyImg}
          alt="Renewable Energy Background"
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
            className="text-5xl md:text-5xl lg:text-l font-extrabold text-white mb-2 text-left px-20 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Wind Energy & Renewables
          </h1>
        </div>
      </div>
    </section>

    {/* Main Content Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* First Row: Wind Energy */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Wind Energy & Renewable Energy Services
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              At <strong>Mechyam</strong>, we are driving the global transition toward a cleaner and more sustainable future. 
              Specializing in <strong>wind energy and renewable power solutions</strong>, we deliver innovative engineering, 
              maintenance, and technology-driven services that maximize efficiency, reliability, and performance across the renewable energy sector.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our mission is simple — <strong>to harness the power of nature and technology to create a greener tomorrow.</strong>
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              With expertise in <strong>wind turbine engineering, installation, and lifecycle management</strong>, Mechyam ensures seamless performance 
              from site development to operation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Wind Energy Services include:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Turbine Erection and Commissioning</li>
              <li>Operation & Maintenance (O&M)</li>
              <li>Blade Inspection and Repair</li>
              <li>Component Replacement and Upgrades</li>
              <li>Performance Monitoring and Data Analytics</li>
            </ul>
          <div className="w-full mt-8">
            <p className="text-lg text-gray-800 text-justify leading-relaxed">
              We collaborate with global OEMs and energy developers to deliver cost-effective, safe, and high-quality results 
              that improve turbine uptime and energy yield.
            </p>
          </div>
            
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={WindenergyImg01}
              alt="Wind Energy"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Second Row: Renewable Energy Services */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={RenewableEnergyImg}
              alt="Renewable Energy"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h3 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Renewable Energy Services
            </h3>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Beyond wind, Mechyam is expanding into <strong>solar, hybrid, and energy storage systems</strong>, enabling clients 
              to diversify their clean energy portfolios.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our multidisciplinary team provides end-to-end support:
            </p>

            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Feasibility Studies & Project Planning</li>
              <li>Engineering, Procurement & Construction (EPC)</li>
              <li>Asset Management & Technical Audits</li>
              <li>Sustainability Consulting & Compliance</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify">
              We help organizations transition to renewable energy sources efficiently — aligning with global sustainability goals 
              and reducing carbon footprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default WindEnergyandRenewables;
