// src/pages/AdminDashboard/DashboardHome.jsx

import React, { useEffect, useState } from "react";
import { Briefcase, Users, Building2, PlusCircle, FileText } from  "lucide-react";
import axios from "axios";
import Applications from "../../pages/Applications"; // ✅ imported
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DashboardHome = ({ setActivePage }) => {
  const [stats, setStats] = useState({
    jobs: 0,
    clients: 0,
    projects: 0,
    applications: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAppsMessage, setNewAppsMessage] = useState("");


 
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = sessionStorage.getItem("adminToken");

        const [jobsRes, clientsRes, projectsRes, applicationsRes] =
          await Promise.all([
            axios.get(`${API_BASE_URL}/api/career/jobs/all`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${API_BASE_URL}/clients/all`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${API_BASE_URL}/api/projects`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${API_BASE_URL}/api/career/applications`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        // ✅ Extract data safely
        const extractArray = (res) =>
          Array.isArray(res.data)
            ? res.data
            : Array.isArray(res.data?.data?.content)
              ? res.data.data.content
              : Array.isArray(res.data?.data)
                ? res.data.data
                : [];

        const jobs = extractArray(jobsRes);
        const clients = extractArray(clientsRes);
        const projects = extractArray(projectsRes);
        const applications = extractArray(applicationsRes);

        // ✅ Calculate total applicants count correctly
        let totalApplicants = 0;

        // if backend returns flat list of applicants
        if (applications.length > 0 && applications[0].job) {
          totalApplicants = applications.length;
        } else {
          // if backend returns grouped jobs with applicants[]
          applications.forEach((job) => {
            if (Array.isArray(job.applicants)) {
              totalApplicants += job.applicants.length;
            }
          });
        }

        setStats({
          jobs: jobs.length,
          clients: clients.length,
          projects: projects.length,
          applications: totalApplicants, // ✅ fixed
        });
        // 📌 Compare today's and yesterday's applications count
        const yesterdayCount = Number(localStorage.getItem("applicationsCount"));

        if (yesterdayCount && totalApplicants > yesterdayCount) {
          setNewAppsMessage("Today, new applications have been received.");
        }

        // 📌 Save today's count for tomorrow
        localStorage.setItem("applicationsCount", totalApplicants);

      } catch (err) {
        console.error("❌ Error fetching dashboard stats:", err);
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);


  const cards = [
    { label: "Total Jobs", value: stats.jobs, icon: <Briefcase size={40} />, page: "JobList", color: "from-blue-500 to-blue-700" },
    { label: "Clients", value: stats.clients, icon: <Users size={40} />, page: "UploadNewClients", color: "from-green-500 to-green-700" },
    { label: "Projects", value: stats.projects, icon: <Building2 size={40} />, page: "UploadNewProjects", color: "from-purple-500 to-purple-700" },
    { label: "Applications", value: stats.applications, icon: <FileText size={40} />, page: "Applications", color: "from-orange-500 to-orange-700" },
  ];

  if (loading) return <p className="text-center text-lg py-10">Loading Dashboard...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <div className="w-full py-10 px-6 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800 tracking-wide drop-shadow-sm">
          Welcome, Admin
        </h1>

      </div>
      {newAppsMessage && (
  <div className="
      mb-6 
      bg-gradient-to-r from-green-200 to-green-100 
      text-green-800 
      p-5 
      rounded-2xl 
      text-center 
      font-semibold 
      shadow-md 
      border border-green-300 
      animate-pulse
    "
  >
     <span className="font-bold">New candidate applications have been submitted today.</span>
  </div>
)}



      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActivePage(card.page)} // ✅ Works with parent routing
            className={`p-7 rounded-2xl text-white shadow-lg bg-gradient-to-r ${card.color} cursor-pointer w-full text-left transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">{card.label}</p>
                <p className="text-5xl font-bold mt-1">
                  {card.value > 0 ? card.value : ""}
                </p>

              </div>
              {card.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mt-10">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-gray-800">
          <PlusCircle className="text-blue-600" /> Quick Actions
        </h2>
        <div className="flex gap-5 flex-wrap">
          <button
            onClick={() => setActivePage("JobForm")}
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Add New Job
          </button>
          <button
            onClick={() => setActivePage("UploadNewClients")}
            className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Add New Client
          </button>
          <button
            onClick={() => setActivePage("UploadNewProjects")}
            className="px-5 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            Add New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
