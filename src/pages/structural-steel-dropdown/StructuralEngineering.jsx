import React from "react";


import structuralengineering from "../../assets/StructuralEngineeringServicesImages/structuralengineering.jpg";

import ses from "../../assets/StructuralEngineeringServicesImages/ses.jpg";



const StructuralEngineering = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="relative w-screen flex items-center justify-start -mx-4">
          <img
            src={structuralengineering}
            alt="Structural Engineering"
            className="w-full"
            style={{
              height: "50vh",
              width: "100vw",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="absolute left-8 top-1/3 z-10"
            style={{ maxWidth: "60vw" }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-l font-extrabold text-white px-20 mb-2 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
            >
              Structural Engineering Services
            </h1>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">Structural Engineering Sevices</h2>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                Steel Detailing services from Mechyam use the state-of-the-art
                technical tools and solutions. Our services are tailored to our
                customers' needs in an efficient and transparent manner. The
                majority of our offerings are CAD-based with 3D modeling. We
                believe in using the right technology tools with skilled
                personnel to deliver optimum solutions to customers in a closed
                loop style.
              </p>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                Driven by a passion to build a better tomorrow, we strive to go
                above and beyond customer expectations. With emphasis on
                research and focus on quality, we offer highly innovative steel
                detailing solutions to our valued customers. We are committed to
                delivering quality solutions on time, every time.
              </p>
            </div>

           <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                  src={ses}
                  alt="Steel detailing"
                  className="w-full max-w-[350px]  object-contain rounded-md shadow-md"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Heading Section */}
      <section className="w-full py-4 text-center bg-gray-50">
         <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Some of the structural engineering services offered are:
        </h2>
      </section>

      {/* ✅ Updated Services Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <ul className="list-none m-0 p-0 mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Connection Design Services",
              "Building Design",
              "Virtual Construction and Bid Permits",
              "Industrial Platform Design",
              "Pipe Supports and Pipe Stress Analysis",
              "Estimation Take-Off",
              "Stair and Handrail Design",
              "Value Engineering",
              "Preliminary Design",
              "BIM Services",
              "Foundation Design",
              "Silo Design",
              "FEA/FEM Analysis",
              "Erection Engineering and Construction Support Services",
              "Shoring Analysis Bridge Detailing Services",
              "Bundled Services",
              "Dynamic Analysis (Protective Structures)",
              "BOM for Joist & Deck Manufacturers",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-3 h-3 bg-blue-900 mr-3 mt-1 flex-shrink-0"></span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default StructuralEngineering;
