import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Lucide Icons
import { MapPin, Briefcase, Users } from "lucide-react";

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch all job openings on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/career/jobs/all`
        );

        // Safely extract the jobs list from API response
        const jobList = Array.isArray(response.data?.data)
          ? response.data.data
          : [];

        if (jobList.length === 0) {
          setErrorMessage("No openings available right now.");
        } else {
          setJobs(jobList);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setErrorMessage("Server is down. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-8">
      {/* 🔹 Page Title */}
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 drop-shadow-sm">
        Job Openings
      </h1>

      {/* 🔹 Loading State */}
      {loading && (
        <div className="flex flex-col justify-center items-center min-h-[50vh] text-gray-600 text-lg">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          Loading available jobs...
        </div>
      )}

      {/* 🔹 Error or Empty State */}
      {!loading && errorMessage && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 px-6 text-center rounded-2xl shadow-sm max-w-3xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-4 ${errorMessage.includes("Server")
              ? "text-red-600"
              : "text-blue-700"
              }`}
          >
            {errorMessage}
          </h2>

          <p className="text-gray-600 mb-6 max-w-lg">
            {errorMessage.includes("Server")
              ? "We’re currently facing technical issues. Please try again later or contact us for more details."
              : "Stay tuned for future opportunities! Meanwhile, feel free to reach out."}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-md"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* 🔹 Job Listings */}
      {!loading && !errorMessage && (
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/career/${job.id}`, { state: job })}
              className="rounded-2xl border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br hover:from-blue-200 hover:via-blue-300 hover:to-blue-400 w-full sm:w-[300px] cursor-pointer transform hover:-translate-y-1"
            >
              {/* Job Title */}
              <h3 className="text-blue-700 font-semibold mb-1 border-b border-blue-700 inline-block text-lg">
                {job.jobTitle}
              </h3>

              {/* Department */}
              {job.department && (
                <p className="text-gray-500 mb-3 text-sm">{job.department}</p>
              )}

              {/* Job Details (Location, Type, Openings) */}
              <div className="space-y-2 mt-3">
                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-blue-700" />
                  <span>{job.location || "Location N/A"}</span>
                </div>

                {/* Job Type */}
                <div className="flex items-center text-gray-600 text-sm">
                  <Briefcase className="w-4 h-4 mr-2 text-blue-700" />
                  <span>{job.jobType || "Type N/A"}</span>
                </div>

                {/* Number of Openings */}
                <div className="flex items-center text-gray-600 text-sm">
                  <Users className="w-4 h-4 mr-2 text-blue-700" />
                  <span>
                    {job.numberOfOpenings
                      ? `${job.numberOfOpenings} Opening${job.numberOfOpenings > 1 ? "s" : ""
                      }`
                      : "Not specified"}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <p className="text-blue-600 hover:underline text-sm font-medium mt-4">
                View Details →
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerPage;
