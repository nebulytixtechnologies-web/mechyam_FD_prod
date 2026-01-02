import React from "react";


import project from "../../assets/ProductDesignAndDevelopment-Images/project.jpg";
import projectdesign from "../../assets/ProductDesignAndDevelopment-Images/projectdesign.jpg";

const ProductDesignAndDevelopment = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="relative w-screen flex items-center justify-start -mx-4">
          <img
            src={projectdesign}
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
              Product Design and Development
            </h1>
          </div>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold text-black mb-4 bg-gray-200 p-5 rounded">Product Design And Development</h2>
            <section className="w-full py-4 text-center bg-gray-50">
         <h2 className="text-l font-bold mb-4 text-blue-900 text-justify">
          Product Design Services for Reduced Design Cycles, Faster Time-To-Market & higher ROI
        </h2>
      </section>
              <p className="text-lg text-gray-800 mb-4 text-justify">
               Staying competitive in today’s marketplace increasingly requires Reduced Design Cycles, Faster Time-To-Market, Lower Costs and Ultimately Higher ROI on Product Development Investments. At Mechyam, our product design services, including custom product design services, industrial product design services, and product development consulting, help global companies achieve their goals with innovative solutions.
              </p>

              <section className="w-full py-4 text-left bg-gray-50">
         <h2 className="text-l font-bold mb-4 text-blue-900">
          Our aim is to transform your ideas into reality
        </h2>
      </section>
              <p className="text-lg text-gray-800 mb-4 text-justify">
               Our Design team places great importance on client inputs. With a fully transparent design and development process, we work closely with our clients at every step.

We help you to validate your concept and turn it into real, market-ready products. Our design approach focuses equally on aesthetics and functionality, ensuring your product looks great but also performs better.
              </p>
              <section className="w-full py-4 text-left bg-gray-50">
         <h2 className="text-l font-bold mb-4 text-blue-900">
          Product Design & Development - Mechyam Technical Services
        </h2>
        </section>
        <p className="text-lg text-gray-800 mb-4 text-justify">
               Our Design team places great importance on client inputs. With a fully transparent design and development process, we work closely with our clients at every step.

We help you to validate your concept and turn it into real, market-ready products. Our design approach focuses equally on aesthetics and functionality, ensuring your product looks great but also performs better.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={project}
                alt="Steel detailing"
                className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* ✅ Updated Services Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <ul className="list-none m-0 p-0 mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Concept design',
'DFA / DFM / DFSS',
'Detailed engineering design',
'Engineering change management',
'Reverse engineering/ Re-engineering',
'Data conversion / migration'
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

export default ProductDesignAndDevelopment;
