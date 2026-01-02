import React from "react";

import structuralImg from "../../assets/StructuralSystemsandInfrastructure-Images/structural-system.jpg";
import structuralImg2 from "../../assets/StructuralSystemsandInfrastructure-Images/structural-system01.jpg";
import InfrastructureImg from "../../assets/StructuralSystemsandInfrastructure-Images/infrastructure01.jpg";
import InfrastructureImg2 from "../../assets/StructuralSystemsandInfrastructure-Images/infrastructure02.jpg";

const StructuralSystemsandInfrastructure = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={structuralImg}
          alt="Structural Systems and Infrastructure Background"
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
            className="text-5xl md:text-5xl lg:text-l font-extrabold text-white mb-2 text-left px-20 py-2 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Structural Systems and Infrastructure
          </h1>
        </div>
      </div>
    </section>

    {/* Structural Systems Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Building the Foundation of Modern Infrastructure
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify leading-relaxed">
              At <strong>Mechyam</strong>, we specialize in providing innovative structural engineering solutions that
              strengthen infrastructure, enhance durability, and ensure safety. Our team delivers advanced analysis,
              design, and simulation support for bridges, buildings, industrial plants, and transport systems.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify leading-relaxed">
              We integrate <strong>engineering precision</strong> with <strong>digital tools</strong> to develop
              efficient, cost-effective, and sustainable structural systems aligned with modern standards and
              construction practices.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Structural Capabilities Include:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Structural Design and Detailing (Steel & Concrete)</li>
              <li>Finite Element Modelling and Analysis (Static & Dynamic)</li>
              <li>Seismic and Wind Load Analysis</li>
              <li>Bridge, Building & Industrial Structure Engineering</li>
              <li>Design Optimization and Weight Reduction Studies</li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={structuralImg2}
              alt="Structural Engineering Design"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Full-width paragraph */}
        <div className="w-full mt-8">
          <p className="text-lg text-gray-800 text-justify leading-relaxed">
            Our engineers use <strong>3D Modelling</strong>, <strong>FEA Tools</strong>, and <strong>BIM Platforms</strong> 
            to deliver accurate, safe, and compliant structural designs. Mechyam ensures every solution meets global
            codes, providing reliability and resilience to critical infrastructure systems.
          </p>
        </div>
      </div>
    </section>

    {/* Infrastructure Engineering Section */}
    <section className="w-full bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Infrastructure Engineering and Development
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify leading-relaxed">
              <strong>Mechyam</strong> provides end-to-end engineering services across infrastructure sectors such as
              transportation, utilities, and industrial facilities. We focus on creating efficient and resilient
              systems that support urban growth and sustainable development.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify leading-relaxed">
              Our multidisciplinary team combines expertise in <strong>civil, structural, and mechanical
              engineering</strong> to deliver optimized, buildable, and durable solutions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Infrastructure Expertise Covers:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Bridge and Highway Engineering</li>
              <li>Urban and Industrial Infrastructure Design</li>
              <li>3D Modelling and BIM Coordination</li>
              <li>Construction Support and As-Built Documentation</li>
              <li>Safety, Compliance, and Sustainability Analysis</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify leading-relaxed">
              From concept to commissioning, Mechyam ensures every project is engineered for performance, longevity,
              and environmental responsibility — <strong>building the framework for a smarter tomorrow.</strong>
            </p>
          </div>

          {/* Right Image Section (Two Images) */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center">
            <img
              src={InfrastructureImg}
              alt="Bridge Engineering"
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
            <img
              src={InfrastructureImg2}
              alt="Infrastructure Construction"
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    

   
  </>
);

export default StructuralSystemsandInfrastructure;
