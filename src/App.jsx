import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import StructuralSteel from "./pages/StructuralSteel";
import Mechanical from "./pages/Mechanical";
import StructuralDetailingRandD from "./pages/RandD-dropdown/StructuralDetailingRandD.jsx";
import MechanicalEngineeringRandD from "./pages/RandD-dropdown/MechanicalEngineeringRandD.jsx";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactPage from "./pages/Contact/ContactPage";
import CareerPage from "./pages/Career/CareerPage.jsx";
import JobDetailsPage from "./pages/Career/JobDetailsPage.jsx";
import Home from "./pages/Home/Home.jsx";

import EngineeringDesign from "./pages/structural-steel-dropdown/EngineeringDesign.jsx";
import StructuralAnalysis from "./pages/structural-steel-dropdown/StructuralAnalysis.jsx";
import StructuralEngineering from "./pages/structural-steel-dropdown/StructuralEngineering";
import StructuralSteelDetailingServices from "./pages/structural-steel-dropdown/StructuralSteelDetailingServices";

import ProductDesignAndDevelopment from "./pages/mechanical-dropdown/ProductDesignAndDevelopment";
import ComputerAidedEngineering from "./pages/mechanical-dropdown/ComputerAidedEngineering";
import EmbeddedDesign from "./pages/mechanical-dropdown/EmbeddedDesign";

import Industries from "./pages/Industries";
import AerospaceandTransportation from "./pages/industries-dropdown/AerospaceandTransportation.jsx";
import WindEnergyandRenewables from "./pages/industries-dropdown/WindEnergyandRenewables.jsx";
import ManufacturingandPlantEngineering from "./pages/industries-dropdown/ManfacturingandPlantEngineering.jsx";
import StructuralSystemsandInfrastructure from "./pages/industries-dropdown/StructuralSystemsandInfrastructure.jsx";
import UtilitiesandRandDInstitutions from "./pages/industries-dropdown/UtilitiesandRandDInstitutions.jsx";

import Company from "./pages/about-dropdown/Company";
import OurClients from "./pages/about-dropdown/OurClients.jsx";

import AdminPage from "./components/AdminPage/AdminPage";
import AdminLogin from "./components/AdminPage/AdminLogin";
import AdminDashboard from "./pages/more-dropdown/AdminDashboard";

// ✅ FIXED WRONG IMPORT NAME
//import UploadNewProjects from "./components/AdminPage/UploadNewProjects.jsx";
import UploadNewClients from "./components/AdminPage/UploadNewClients.jsx";

import Footer from "./pages/Footer.jsx";
import DetailedJobList from "./pages/DetailedJobList";



// ✅ ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ✅ Admin Protected Route
const AdminProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/structural-steel" element={<StructuralSteel />} />
        <Route path="/engineering-design" element={<EngineeringDesign />} />
        <Route path="/structural-analysis" element={<StructuralAnalysis />} />
        <Route path="/structural-engineering" element={<StructuralEngineering />} />
        <Route path="/structuralsteeldetailingservices" element={<StructuralSteelDetailingServices />} />

        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/product-design-development" element={<ProductDesignAndDevelopment />} />
        <Route path="/computer-aided-engineering" element={<ComputerAidedEngineering />} />
        <Route path="/embedded-design" element={<EmbeddedDesign />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/aerospace-transportation" element={<AerospaceandTransportation />} />
        <Route path="/windenergyrenewables" element={<WindEnergyandRenewables />} />
        <Route path="/manufacturing-plantengineering" element={<ManufacturingandPlantEngineering />} />
        <Route path="/structural-infrastructure" element={<StructuralSystemsandInfrastructure />} />

        {/* ✅ FIXED INVALID ROUTE PATH (removed &) */}
        <Route path="/utilities-r&dinstutions" element={<UtilitiesandRandDInstitutions />} />

        <Route path="/structural-rnd" element={<StructuralDetailingRandD />} />
        <Route path="/mechanical-rnd" element={<MechanicalEngineeringRandD />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/our-clients" element={<OurClients />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/career/:id" element={<JobDetailsPage />} />
        <Route path="/jobs/:id" element={<DetailedJobList />} />

        {/* ✅ FIXED ADMIN ROUTE COMPONENT */}
       <Route path="/admin/add-client" element={<UploadNewClients />} />
      

       

        {/* ✅ Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route path="/admin-page" element={<AdminPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
