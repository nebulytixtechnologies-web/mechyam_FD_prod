import React from "react";

import rail from "../../assets/AerospaceandTransportation-Images/rail.jpg";
import rail01 from "../../assets/AerospaceandTransportation-Images/rail01.jpg";
import AerospaceImg from "../../assets/AerospaceandTransportation-Images/aerospace.jpg";
import Aerospceimg2 from "../../assets/AerospaceandTransportation-Images/aerospace01.jpg";

const AerospaceandTransportation = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={AerospaceImg}
          alt="Aerospace and Transportation Background"
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
            Aerospace and Transportation
          </h1>
        </div>
      </div>
    </section>

    {/* Aerospace Engineering Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Aerospace Engineering Services
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              At <strong>Mechyam</strong>, we are committed to advancing aerospace innovation through cutting-edge engineering,
              design, and digital technologies. Our expertise spans the complete lifecycle of aerospace systems — from concept
              design and structural analysis to manufacturing support and digital transformation.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              With a strong focus on <strong>precision, safety, and performance</strong>, we deliver reliable and cost-effective
              solutions for both civil and defense aviation sectors.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Aerospace Capabilities Include:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Airframe Design & Structural Engineering</li>
              <li>Avionics & Systems Integration</li>
              <li>Mechanical Design & Analysis (CAD/CAE)</li>
              <li>Digital Manufacturing & PLM Support</li>
              <li>Technical Documentation & Certification Support</li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={Aerospceimg2}
              alt="Aerospace Engineering"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Full-width paragraph */}
        <div className="w-full mt-8">
          <p className="text-lg text-gray-800 text-justify leading-relaxed">
            Mechyam combines domain knowledge with digital tools such as{" "}
            <strong>3D CAD</strong>, <strong>FEA</strong>, <strong>CFD</strong>, and{" "}
            <strong>AI-based analytics</strong> to enhance aircraft performance, reduce weight, and improve efficiency — shaping
            a safer, more sustainable aerospace future.
          </p>
        </div>
      </div>
    </section>

    {/* Transportation Engineering Section */}
    <section className="w-full bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Transportation Engineering Services
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              <strong>Mechyam</strong> partners with global OEMs and system integrators to deliver advanced engineering solutions
              across the <strong>rail, metro, and mobility sectors</strong>. We help clients improve reliability, safety, and
              passenger experience while optimizing lifecycle costs and performance.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our engineering team leverages expertise in <strong>mechanical, electrical, and digital design</strong> to support
              every stage of development — from concept to manufacturing and maintenance.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Transportation Expertise Covers:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Vehicle Design & Integration (Rail & Metro)</li>
              <li>3D CAD Modelling & Simulation</li>
              <li>Manufacturing & Production Support</li>
              <li>Testing, Validation & Certification</li>
              <li>Operations, Maintenance & Lifecycle Services</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify">
              From high-speed trains to urban metros, Mechyam delivers innovative and sustainable solutions that power the
              future of connected mobility — <strong>smarter, safer, and greener.</strong>
            </p>
          </div>

          {/* Right Image Section (Two Images) */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center">
            <img
              src={rail}
              alt="Rail Transportation"
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
            <img
              src={rail01}
              alt="Metro Transportation"
              className="w-full h-auto max-h-80 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Engineering Services Offered Section */}
    <section className="w-full text-left px-40 bg-gray-50">
      <p className="text-lg font-bold text-blue-900">
        <div>Engineering Services Offered:</div>
      </p>
    </section>

    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ul className="list-none m-0 p-0 mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Engineering Design & Modelling",
            "Finite Element Analysis (FEA)",
            "Digital Manufacturing & PLM Data Management",
            "Avionics and Electrical Systems Integration",
            "CAD/CAM/CAE Support across CATIA, NX, and SolidWorks",
            "Manufacturing Drawings & Assembly Documentation",
            "Testing, Validation, and Simulation Studies",
            "Sustainability and Compliance Consulting",
            "Technical Publications and Certification Documentation",
            "Maintenance and Lifecycle Engineering Support",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-3 h-3 bg-blue-900 mr-3 mt-1 flex-shrink-0"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default AerospaceandTransportation;
