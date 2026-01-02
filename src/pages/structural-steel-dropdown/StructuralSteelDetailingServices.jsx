import React from 'react';


import SDS from '../../assets/StructuralSteelDetailingServices-Images/steel-detailing-services.webp';
import sds from '../../assets/StructuralSteelDetailingServices-Images/steeldetailingservices.jpg';


const StructuralSteelDetailingServices = () => (
  <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={sds}
          alt="Structural Engineering"
          className="w-full"
          style={{
            height: '50vh',
            width: '100vw',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="absolute left-8 top-1/3 z-10" style={{ maxWidth: '60vw' }}>
          <h1
            className="text-4xl md:text-5xl lg:text-l font-extrabold text-white px-20 mb-2 w-[] h-auto bg-gray-800 bg-opacity-50 rounded"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            Structural Steel Detailing Services
          </h1>
        </div>
      </div>
    </section>

    {/* Two-column section: text + image */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
              Structural Steel Detailing Services
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              Structural steel detailing involves creating detailed drawings and plans for all manufacturing and construction activities like erection of buildings, shipbuilding etc. It is a critical process that requires 99.99% accuracy. Even a tiny error can lead to a loss of valuable time and money.
            </p>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              At Mechyam, we offer steel detailing and allied engineering services to clients worldwide using state of the art technical tools. We offer client specific Detailing Automation Services, which is customized and tailor made to exactly meet with the customer requirements. Our steel detailing services help the client simplify their project coordination, improve delivery schedules, and increase overall project quality. Building a strong, long-term relationship with our clients; consisting of General Contractors, Fabricators, Consulting firms, Architects, Professional Engineering firms, etc. is key to our success.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={SDS}
              alt="Steel detailing"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Updated Services Section */}
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Some Steel Detailing Services offered by us are:
        </h2>

        <div className="space-y-3">
          {[
            'Structural & Miscellaneous Steel Detailing',
            'Bridge Detailing',
            'Connection Design and Stamping',
            'BIM Services',
            'Estimation Support Services',
            'Client Specific Detailing Automation',
            'Decking Support & Detailing',
            'Stick Modelling & Take Offs',
          ].map((item) => (
            <div key={item} className="flex items-center">
              {/* Blue box instead of checkmark */}
              <span className="bg-blue-900 w-4 h-4 mr-3 inline-block rounded-sm"></span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default StructuralSteelDetailingServices;
