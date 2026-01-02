import React from "react";

 import mechanical from "../assets/Mechanical-Images/Mechanical.jpg";
import mech01 from "../assets/Mechanical-Images/mech01.jpg";

const Mechanical = () => (
  <>
  <section className="w-full overflow-hidden">
    <div className="relative w-screen flex items-center justify-start -mx-4">
      <img
        src={mechanical}
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
          className="text-5xl md:text-6xl lg:text-l font-extrabold text-white mb-2 text-left px-20  w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          Mechanical
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
            Mechnical
          </h2>
          <p className="text-lg text-gray-800 mb-4 text-justify">
           Mechyam offers a range of outsourced engineering services that are tailored to suit the specific needs of companies operating in diverse industries. Our pragmatic approach to problem solving, proven offshore delivery model and global presence that ensures close proximity to our customers make us the preferred engineering services partner for clients across the world. Be it designing new products or solving complex engineering challenges, our multi-disciplinary team works closely with you to engineer solutions for a wide range of business requirements.
          </p>
          <p className="text-lg text-gray-800 mb-4 text-justify">
            As a provider of highly customer-centric consulting, engineering services, we offer you a seamless one-stop experience alongside high quality and timely delivery.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={mech01}
            alt="Steel detailing"
            className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  </>
);
export default Mechanical;
