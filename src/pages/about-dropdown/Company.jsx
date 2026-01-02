import React from "react";

import company from "../../assets/Company-Image/company.webp";

const Company = () => (
  <>
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={company}
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
            className="text-5xl md:text-5xl lg:text-l font-extrabold text-white mb-2 text-left px-20 bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Company
          </h1>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Make them side-by-side */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* 1️⃣ Emergence of Mechyam */}
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-xl font-bold mb-4 text-blue-900 p-3 rounded bg-white">
              Emergence of Mechyam
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Founded in 2025, MECHYAM is a lean and agile firm powered by a leadership team with over 15 years of industry experience in mechanical design, structural analysis, and data-driven engineering. While we are young as a company, our roots run deep - built on integrity, technical mastery, and a shared belief that great design begins with understanding, not assumptions.
            </p>
          </div>

          {/* 2️⃣ Vision for Acquisition */}
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-xl font-bold mb-4 text-blue-900 p-3 rounded bg-white">
              Vision for Acquisition
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              To shape engineering solutions that rise from complexity with clarity—anchored in integrity, guided by purpose, and built to last. We aim to bring structure and insight to what was once unformed.

            </p>
          </div>

          {/* 3️⃣ Unstoppable growth */}
          <div className="w-full md:w-1/3 text-left text-justify">
            <h2 className="text-xl font-bold mb-4 text-blue-900 p-3 rounded bg-white">
              Unstoppable Growth
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              The company with its best service and consumer friendly approach
              is ever on top when it comes to engineering and technical
              services. The organisation encourages its staff for innovative
              designs which is the main reason behind our unstoppable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Company;
