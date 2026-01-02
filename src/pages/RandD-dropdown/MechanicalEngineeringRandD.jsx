import React from "react";



import mechRandD from "../../assets/MechanicalEngineeringRandD-Images/mechRandD.jpg";
import mechRandD02 from "../../assets/MechanicalEngineeringRandD-Images/mechRandD02.jpg";


const MechnicalEngineeringRandD = () => (
  <>
  <section className="w-full overflow-hidden">
    <div className="relative w-screen flex items-center justify-start -mx-4">
      <img
        src={mechRandD}
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
          Mechanical Engineering R&D
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
           Mechanical Engineering R&D
          </h2>
          <p className="text-lg text-gray-800 mb-4 text-justify">
          At Mechyam, we have a team to work concurrently and provide solutions for R & D with product development. That said, we could provide solutions for Benchmarking new product and development. We have offered services in the domains pertaining to the Food Industry, Rail Domain, General Engineering and Industrial Engineering. With cutting edge software integrated into the PDM/PLM we could offer best solutions related to the product R &D.
          </p>
          
          
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={mechRandD02}
            alt="Steel detailing"
            className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  
     

      
  </>
      
);
export default MechnicalEngineeringRandD;
