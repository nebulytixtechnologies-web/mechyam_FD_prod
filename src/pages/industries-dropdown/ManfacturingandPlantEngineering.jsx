import React from "react";
import ManufacturingImg from "../../assets/ManufacturingandPlantEngineering-Images/manufacturing.jpg"; 
import ManufacturingImg01 from "../../assets/ManufacturingandPlantEngineering-Images/manufacturing01.jpg";
import PlantEngineeringImg from "../../assets/ManufacturingandPlantEngineering-Images/plantengineering.jpg"; 

const ManufacturingandPlantEngineering = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={ManufacturingImg}
          alt="Manufacturing and Plant Engineering Background"
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
            Manufacturing & Plant Engineering
          </h1>
        </div>
      </div>
    </section>

    {/* Main Content Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* First Row: Manufacturing Engineering */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Manufacturing Engineering Solutions
            </h2>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              At <strong>Mechyam</strong>, we bring precision, innovation, and efficiency to every stage of manufacturing. 
              Our team provides advanced <strong>manufacturing process design, optimization, and automation solutions </strong> 
              that help industries improve productivity, quality, and sustainability.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              We focus on integrating <strong>modern manufacturing technologies</strong> such as digital twins, 
              robotics, and intelligent control systems to enhance production reliability and scalability.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              From concept to commissioning, we deliver tailored engineering solutions for <strong>industrial plants, 
              fabrication facilities, and assembly lines</strong>.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
              Our Manufacturing Services include:
            </h3>
            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Production Line Design and Optimization</li>
              <li>Tooling and Fixture Design</li>
              <li>Industrial Automation and Robotics Integration</li>
              <li>Lean Manufacturing Implementation</li>
              <li>Quality and Process Improvement</li>
            </ul>

            <div className="w-full mt-8">
              <p className="text-lg text-gray-800 text-justify leading-relaxed">
                We collaborate with global manufacturers to ensure efficiency, safety, and cost-effectiveness — 
                achieving excellence through precision engineering.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={ManufacturingImg01}
              alt="Manufacturing Engineering"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Second Row: Plant Engineering */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={PlantEngineeringImg}
              alt="Plant Engineering"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-left text-lg text-justify leading-relaxed">
            <h3 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Plant Engineering Services
            </h3>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our <strong>Plant Engineering division</strong> specializes in designing, developing, and maintaining 
              efficient industrial plants and production systems that meet international standards of performance and safety.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              We provide <strong>end-to-end support</strong> — from feasibility analysis and layout design to 
              installation and commissioning.
            </p>

            <ul className="list-disc ml-6 mb-4 text-gray-800">
              <li>Plant Layout and Piping Design</li>
              <li>Equipment Installation and Integration</li>
              <li>Utility and Process Engineering</li>
              <li>Maintenance Planning and Asset Management</li>
              <li>Energy Efficiency and Safety Audits</li>
            </ul>

            <p className="text-lg text-gray-800 text-justify">
              With a strong focus on innovation and sustainability, Mechyam ensures that industrial plants operate 
              at maximum productivity while minimizing energy consumption and environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ManufacturingandPlantEngineering;
