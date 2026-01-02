
import React from "react";

import structuralAnalysis from "../../assets/StructuralAnalysis-Images/structural-analysis.jpg";
import structuralAnalysis01 from "../../assets/StructuralAnalysis-Images/structural-analysis01.jpg";



const StructuralAnalysis = () => (
  <>
    <section  className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={structuralAnalysis}
          alt="Steel Structure Background"
          className="w-full"
          style={{ height: '50vh', width: '100vw', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute left-0 top-1/3 z-10 ml-8" style={{ maxWidth: '50vw' }}>
          <h1 className="text-5xl md:text-6xl lg:text-l font-extrabold text-white mb-2 text-left px-10 w-auto h-auto bg-opacity-50 bg-gray-800 rounded" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            Structural Analysis
          </h1>
        </div>
      </div>
    </section>
    
    {/* Two-column section: text (left) and image (right) */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">Structural Analysis</h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Structural reliability starts with deep analysis. Our team applies simulation and analytical methods to evaluate how structures behave under real-world conditions—ensuring safety, compliance, and confidence in every project.
            </p>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Our structural analysis services ensure the safety, stability, and performance of engineering structures under various loads and environmental conditions. Using advanced simulation tools like ANSYS, STAAD.Pro, and FEMAP, we evaluate stress distribution, deformation, and failure points to optimize designs for durability and cost efficiency. Our team focuses on delivering reliable and compliant solutions that meet global engineering standards, ensuring every structure performs as intended throughout its lifecycle.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
                <img src={structuralAnalysis01} alt="Steel detailing" className="w-full h-auto max-h-96 object-contain rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default StructuralAnalysis;
