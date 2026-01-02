import React from "react";

import aboutus from "../assets/AboutUs-Images/aboutus.jpg";
import aboutus02 from "../assets/AboutUs-Images/aboutus02.svg";



const About = () => (
  <>
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={aboutus}
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
            About Us
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
              About Us
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              At<span className="font-semibold"> MECHYAM AI DESIGN SOLUTIONS (MADS),</span> we bring structure to complexity - engineering systems that rise
              with clarity, resilience, and purpose.
            </p>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Founded in 2025, <span className="font-semibold">MECHYAM</span> is a lean and agile firm powered by a leadership team with over 15 years of industry
              experience in mechanical design, structural analysis, and data-driven engineering. While we are young as a company, our
              roots run deep - built on integrity, technical mastery, and a shared belief that great design begins with understanding, not
              assumptions.

            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              <span className="block font-semibold mb-1 text-color-blue-900 bg-gray-200 px-3 py-2 rounded">Our name reflects our philosophy:</span>
              
              <span className="font-semibold">“Mech”</span> for the mechanical core of what we do.
              <span className="font-semibold">“Yam”</span> for the sea - symbolizing the depth, uncertainty, and potential of the engineering challenges we take on.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              From concept development and CAD modelling to structural validation and AI-powered measurement analysis, we
              partner with clients to build systems that last- solutions that are as thoughtful as they are robust.
            </p>

            <p className="text-lg text-gray-800 mb-4 text-justify">
              We don’t just engineer products.<br />
              We engineer confidence.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={aboutus02}
              alt="Steel detailing"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>



  </>
);
export default About;
