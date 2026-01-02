import React from "react";

import cad from "../../assets/ComputerAidedEngineering-Images/cad-1.avif";
import cad01 from "../../assets/ComputerAidedEngineering-Images/cad01.jpg";

const ComputerAidedEngineering = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="relative w-screen flex items-center justify-start -mx-4">
          <img
            src={cad}
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
             Computer Aided Engineering (CAE)
            </h1>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold  text-black-900 mb-4 bg-gray-200 p-5 rounded">Computer Aided Engineering (CAE) Service</h2>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                Mechyam has distinguished itself as one of the leading engineering consulting organization with FEA and CFD experts to help you get to the root of most challenging engineering problems. Our Engineering teams act as an extension of our Customers’ teams – responsible for delivering results on time and every time. We extend the capabilities of your engineering teams through unmatched global delivery excellence.
              </p>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                At Mechyam, Finite Element Analysis is charged with precise calculations, accurate models and resourceful evaluation modes in the transportation, industrial, foodservice, semiconductor industries. We collaborate with design engineers to evaluate product design right from early design stages and minimize prototyping trials. Our FEA specialists provide key insights on the product behavior and constraints that lead to possible pre-mature failure. Additionally, we deliver design optimization solutions for existing products and help reduce resource utilization while keeping product designs efficient and work on below areas of CAE activities.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={cad01}
                alt="Steel detailing"
                className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heading Section */}
      <section className="w-full py-4 text-left bg-gray-50">
         <h2 className="text-xl font-bold mb-4 text-blue-900">
            <div className="w-full  text-center">
          Stress / Structural Analysis: Including
          </div>
        </h2>
      </section>

      {/* ✅ Updated Services Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <ul className="list-none m-0 p-0 mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {['CAE / CFD modelling',
'Static, Linear, Non-linear, Non-linear contact',
'Dynamic, Buckling, Fatigue, Thermal Analysis',
'Crash, Impact, Safety analysis',
'CFD (Computational Fluid Dynamics)',
'Design Optimization (Size, Shape & Topology)',
'Electromagnetics',
'Multibody dynamic analysis',
'Drop Test',
'Durability analysis',
'NVH analysis',
'Thermal and flow simulation',
'Moldflow analysis for injection molded components.',
'Electronic Cooling Analysis through Airflow Optimization, Product Thermal Design, Heatsink Selection/Design, PCB Thermal Simulation, Fan Selection'
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

export default ComputerAidedEngineering;
