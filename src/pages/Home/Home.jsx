import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Chatbot from "../../components/Chatbot";

// 🖼 Image imports
import MechymaImage from "../../assets/Home-Images/Mechyam02.png";
import MechymaImage1 from "../../assets/Home-Images/Mechyam01.jpg"
import engineeringImg from "../../assets/EngineeringDesign-Images/engineeringdesign.jpg";
import structuralImg from "../../assets/StructuralAnalysis-Images/structural-analysis.jpg";
import chess from "../../assets/Home-Images/chess.jpg";
import dataImg from "../../assets/Home-Images/data-analysis.jpg";

// ⚙ Services section data (updated)
const services = [
  {
    title: "Engineering Design",
    subTitle: "Mechanical & Structural Systems",
    description:
      "We provide end-to-end mechanical and structural design solutions using advanced CAD tools and analysis methods to achieve performance, cost-efficiency, and manufacturing readiness.",
    image: engineeringImg,
    link: "/engineering-design",
  },
  {
    title: "Structural Analysis",
    subTitle: "Strength & Stability Evaluation",
    description:
      "Our structural analysis services ensure that every design meets safety, stability, and reliability standards through advanced simulations and FEA-based methods.",
    image: structuralImg,
    link: "/structural-analysis",
  },
];

const Home = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full overflow-hidden font-sans"
    >
      {/* ==============================
          🏠 HERO SECTION
      ============================== */}
      <section id="home" className="relative w-screen h-screen bg-grey-500 flex items-center justify-center overflow-hidden" >
        <img src={MechymaImage} alt="MECHYAM" className="w-full h-full object-contain mix-blend-multiply scale-110" />

        {/* <section id="home" className="relative w-full h-[80vh] md:h-screen overflow-hidden" > 
          <img src={MechymaImage1} alt="MECHYAM" loading="eager" decoding="async" className="w-full h-full object-cover brightness-95 contrast-110" /> */}

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 transform -translate-y-[50px]">

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg mt-[180px]"
          >
            MECHYAM AI DESIGN SOLUTIONS
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white max-w-2xl text-lg md:text-xl mb-6"
          >
            Engineering precision meets AI innovation
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-[50px]"
          >
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              Learn More
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* ==============================
          ⚙ OUR SERVICES
      ============================== */}
      <section id="our-services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-justify">
              At MECHYAM AI DESIGN SOLUTIONS (MADS), we specialize in delivering
              precise, scalable, and forward-thinking engineering solutions. As
              a young company with a seasoned leadership team boasting over 15
              years of deep industry expertise, we blend agility with experience
              to solve real-world challenges across engineering design,
              structural integrity, and advanced data analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {services.map((service, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center  hover:shadow-xl transition transform hover:-translate-y-1 max-w-md text-justify"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-contain mb-4 rounded-lg"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">
                  {service.title}
                </h3>
                {service.subTitle && (
                  <h4 className="text-gray-600 font-medium mb-2 text-sm md:text-base">
                    {service.subTitle}
                  </h4>
                )}
                <p className="text-gray-500 mb-4 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition text-sm md:text-base"
                >
                  Read More →
                </Link>
              </Motion.div>
            ))}
          </div>

          <div className="border-t border-gray-300 mt-12 md:mt-16"></div>
        </div>
      </section>

      {/* ==============================
          🌟 OUR VISION & MISSION
      ============================== */}
      <section id="vision-mission" className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
          >
            <img
              src={chess}
              alt="Vision & Mission"
              className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-white"
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
              OUR VISION & MISSION
            </h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Vision</h3>
              <p className="text-lg leading-relaxed text-justify">
                To shape engineering solutions that rise from complexity with
                clarity—anchored in integrity, guided by purpose, and built to
                last. We aim to bring structure and insight to what was once
                unformed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="text-lg leading-relaxed text-justify">
                To serve as skilled stewards of design—transforming raw
                potential into systems of strength, precision, and meaning.
                Through thoughtful engineering and principled collaboration, we
                build with intention and resilience.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ==============================
          💡 WE OFFER SECTION
      ============================== */}
      <section id="we-offer" className="py-20 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-wide">
            WE OFFER
          </h2>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                "Onsite vibration, strain, and load data collection",
                "Modal testing and operational deflection shape (ODS) analysis",
                "Signal processing in time and frequency domains",
                "Statistical evaluation, anomaly detection, and data trend modelling",
                "Custom dashboards and visualization tools for reporting",
              ].map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group transition transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 mt-1 text-blue-600 group-hover:scale-110 transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ==============================
          📊 MEASUREMENT & DATA ANALYSIS
      ============================== */}
      <section
        id="measurement-data-analysis"
        className="py-20 bg-white font-sans relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-blue-100 opacity-80"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Measurement & Data Analysis
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              We transform raw field data into <strong>reliable engineering insights</strong>.
              Our team has deep expertise in <strong>measurement strategy, instrumentation, signal processing,</strong>
              and <strong>data interpretation</strong>, helping clients make informed decisions faster.
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
              <li>Precision instrumentation and sensor calibration</li>
              <li>Real-time data capture and monitoring systems</li>
              <li>AI-driven anomaly detection and predictive analytics</li>
              <li>Comprehensive data reporting and visualization</li>
            </ul>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6"
            >

            </Motion.div>
          </Motion.div>

          {/* Right Image */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={dataImg}
              alt="Measurement & Data Analysis"
              className="rounded-2xl shadow-lg w-full md:w-10/12 object-cover"
            />
          </Motion.div>
        </div>
      </section>

      {/* ==============================
          🛠 TOOLS WE USE SECTION
      ============================== */}
      <section id="tools" className="py-20 bg-gray-100 font-sans">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-wide">
            TOOLS WE USE
          </h2>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center bg-blue-50 p-8 rounded-2xl shadow-lg"
          >
            {[
              "SP3D",
              "SPPID",
              "SPI",
              "AutoCAD",
              "ANSYS",
              "REVIT",
              "Hyper Mesh",
              "NASTRAN",
              "CATIA Analysis",
            ].map((tool, index) => (
              <Motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-800 font-semibold text-sm md:text-base hover:shadow-xl transition-transform duration-300"
              >
                {tool}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ==============================
          💎 WHAT SETS US APART
      ============================== */}
      <section className="w-full bg-blue-500 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            {[
              {
                title: (
                  <span className="flex items-center gap-2">
                    <span className="border-2 border-white rounded-full p-2 bg-transparent">
                      🚀
                    </span>
                    Startup Agility, Industry Depth
                  </span>
                ),
                desc: "We move fast, backed by decades of engineering knowledge.",
              },

              {
                title: (
                  <span className="flex items-center gap-2">
                    <span className="border-2 border-white rounded-full p-2 bg-transparent">
                      🧰
                    </span>
                    Tool Chain Expertise
                  </span>
                ),
                desc: "SP3D, BIM, Revit, SPPID, SPI, SolidWorks, NX, AutoCAD, ANSYS, and more.",
              },

              {
                title: (
                  <span className="flex items-center gap-2">
                    <span className="border-2 border-white rounded-full p-2 bg-transparent">
                      🔍
                    </span>
                    End-to-End Insight
                  </span>

                ),
                desc: "From concept design and analysis to real-world measurement and feedback.",
              },

              {
                title: (
                  <span className="flex items-center gap-2">
                    <span className="border-2 border-white rounded-full p-2 bg-transparent">
                      🤝
                    </span>
                    Client-Centric Approach
                  </span>
                ),
                desc: "Flexible,collaborative, and always outcome-focused.",
              },
            ].map((point, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-100">{point.desc}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        < Chatbot />
      </div>
    </Motion.div>
  );
};

export default Home;
