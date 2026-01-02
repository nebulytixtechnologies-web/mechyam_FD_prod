import React from "react";

import embedded from "../../assets/Embedded-images/embedded.jpg";
import embedded01 from "../../assets/Embedded-images/embedded01.jpg";
const EmbeddedDesign = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="relative w-screen flex items-center justify-start -mx-4">
          <img
            src={embedded}
            alt="Embedded Design"
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
              Embedded Design
            </h1>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl font-bold text-black-900 mb-4 bg-gray-200 p-5 rounded">
                Embedded Design
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                The controller system design, responsible for embedding hardware
                and software design. The embedded design plays an essential role
                in the computer system. The term embed defines as ‘fix something
                firmly and deeply’ – in short, a dependable system design. The
                embedded design includes, but not limited to Application
                Software, Maintenance Bug Fix, Porting, Package Implementation,
                Interfaces, Independent Testing, Simulations.
              </p>

              <h4 className="text-xl font-bold text-blue-900 mb-4">
                Hardware Design
              </h4>

              <ul className="list-none space-y-2">
                {[
                  "High Speed Digital And Mixed Signal Design",
                  "PCB Design, Layout / Signal Integrity",
                  "Design For EMI / EMC, ESD And Intrinsic Safety",
                  "Integrated Design From Silicon To System",
                  "Product Conceptualization",
                  "System Architecture And Hardware / Software Partitioning",
                  "Design, Simulation And Analysis",
                  "Proof Of Concept And FPGA Prototyping",
                  "Enclosure Design",
                  "OS, Middleware And Application Development In Parallel",
                  "System Integration And Verification",
                  "Transition To Manufacturing Along With Complete Compliance Testing And Certification",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 mr-3 mt-2 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={embedded01}
                alt="Embedded Hardware"
                className="w-full h-auto max-h-[450px] object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmbeddedDesign;
