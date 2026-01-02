import React from "react";



import structRandD from "../../assets/StructuralDetailingRandD-Images/structRandD.jpg";
import structRandD02 from "../../assets/StructuralDetailingRandD-Images/structRandD02.jpg";



const StructuralRAndD = () => (
  <>
  <section className="w-full overflow-hidden">
    <div className="relative w-screen flex items-center justify-start -mx-4">
      <img
        src={structRandD}
        alt="Steel Structure Background"
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
          Structural  Detailing R&D
        </h1>
      </div>
    </div>
  </section>

  {/* Two-column section: text (left) and image (right) */}
  <section className="w-full bg-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
            Structural Detailing R&D
          </h2>
          <p className="text-lg text-gray-800 mb-4 text-justify">
           Mechyam has evolved into an eminent organization with enhanced automation support for carrying out manual/mundane activities in day to day modeling/checking/production of shop drawings. To accomplish this we use state-of-the-art Application Programming Interfaces, Plugins using Microsoft.net, C#, DotNet Frameworks, ASP.Net, Java, VBA.
          </p>
          <p className="text-lg text-gray-800 mb-4 text-justify">
            Automation team under our R and D department has developed extensive work on various 3D Modeling platforms for Tekla, SDS 2 and AutoCAD. These automations have been used by our Production teams to eliminate repetitive human interventions and day to day mundane work. This has given high returns in the form of Productivity/Accuracy and uniformity of our deliverables for various Sequences/Lots. Stringent Production timelines have been able to accomplish by using these in-house Automation programs.
          </p>
          
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={structRandD02}
            alt="Steel detailing"
            className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  
     

      
  </>
      
);
export default StructuralRAndD;
