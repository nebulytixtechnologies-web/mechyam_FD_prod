// src/components/AdminPage/JobList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const JobList = () => {
  // Holds all job records fetched from the backend
  const [jobs, setJobs] = useState([]);

  // Manages loading state and delete button status
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const navigate = useNavigate();

  /**
   * Fetch all job listings from the backend API when the component mounts.
   */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/career/jobs/all`
        );

        // Validate and extract jobs array from the response
        const jobsArray =
          response.data && Array.isArray(response.data.data)
            ? response.data.data
            : [];

        setJobs(jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /**
   * Navigate to the detailed job view page when a list item is clicked.
   */
  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  /**
   * Delete a job by ID and remove it from the UI after successful deletion.
   */
  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    setDeletingId(jobId);

    try {
      await axios.delete(
        `${API_BASE_URL}/api/career/jobs/${jobId}`
      );

      // Update state after deletion
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete the job. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  // Loading state handling
  if (loading) {
    return <p className="text-gray-500 text-center mt-4">Loading jobs...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-[85vh] overflow-y-auto">
      {/* Page heading */}
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Uploaded Jobs</h2>

      {/* Display message if there are no jobs */}
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs uploaded yet.</p>
      ) : (
        <ul className="space-y-3">
          {jobs.map((job, index) => (
            <li
              key={job.id}
              onClick={() => handleJobClick(job)}
              className={`border p-4 rounded-lg transition-all duration-300 flex flex-wrap items-center justify-between cursor-pointer 
                ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} 
                hover:bg-gray-200 hover:shadow-sm hover:-translate-y-[2px]
              `}
            >
              {/* ===============================
                   Job Information Section
                 =============================== */}
              <div className="flex flex-wrap gap-4 flex-1">
                {/* Job Code */}
                <div className="flex-1 min-w-[80px]">
                  <span className="font-bold">Job Code:</span> {job.id}
                </div>

                {/* Job Title */}
                <div className="flex-1 min-w-[150px]">
                  <span className="font-bold">Job Title:</span> {job.jobTitle}
                </div>

                {/* Department */}
                <div className="flex-1 min-w-[120px]">
                  <span className="font-bold">Department:</span> {job.department}
                </div>

                {/* Location */}
                <div className="flex-1 min-w-[120px]">
                  <span className="font-bold">Location:</span> {job.location}
                </div>

                {/* Job Type */}
                <div className="flex-1 min-w-[100px]">
                  <span className="font-bold">Type:</span> {job.jobType}
                </div>

                {/* Experience Level */}
                <div className="flex-1 min-w-[120px]">
                  <span className="font-bold">Experience:</span> {job.experienceLevel}
                </div>

                {/* Number of Openings */}
                <div className="flex-1 min-w-[120px]">
                  <span className="font-bold">Openings:</span>{" "}
                  {job.numberOfOpenings || "N/A"}
                </div>
              </div>

              {/* ===============================
                   Delete Job Button
                 =============================== */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation on delete click
                  handleDelete(job.id);
                }}
                disabled={deletingId === job.id}
                className={`ml-4 px-3 py-2 rounded-lg text-white font-medium transition ${deletingId === job.id
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                {deletingId === job.id ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
