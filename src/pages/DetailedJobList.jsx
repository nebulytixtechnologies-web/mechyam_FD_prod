// src/components/AdminPage/DetailedJobList.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailedJobList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the job object passed from the previous page
  const job = location.state?.job;

  // If no job is selected, show a fallback message and a back button
  if (!job) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 font-semibold text-lg">No job selected!</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back button for navigation */}
      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* Main Job Details Card */}
      <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        {/* Job Title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-900">
          {job.jobTitle}
        </h1>

        {/* Job Details in a Responsive Grid Layout */}
        <div className="grid grid-cols-2 gap-6 text-gray-700">

          {/* Job Code (Unique Identifier) */}
          <div>
            <span className="font-bold">Job Code:</span> {job.id}
          </div>

          {/* Department */}
          <div>
            <span className="font-bold">Department:</span> {job.department}
          </div>

          {/* Location */}
          <div>
            <span className="font-bold">Location:</span> {job.location}
          </div>

          {/* Job Type */}
          <div>
            <span className="font-bold">Job Type:</span> {job.jobType}
          </div>

          {/* Experience Level */}
          <div>
            <span className="font-bold">Experience Level:</span>{" "}
            {job.experienceLevel}
          </div>

          {/* Number of Openings (handles both 'numberOfOpenings' and 'noOfOpenings') */}
          <div>
            <span className="font-bold">No. of Openings:</span>{" "}
            {job.numberOfOpenings || job.noOfOpenings || "N/A"}
          </div>

          {/* Job Active Status */}
          <div>
            <span className="font-bold">Active:</span>{" "}
            {job.isActive ? "Yes" : "No"}
          </div>

          {/* Posted Date */}
          <div>
            <span className="font-bold">Posted Date:</span>{" "}
            {job.postedDate
              ? new Date(job.postedDate).toLocaleDateString()
              : "N/A"}
          </div>

          {/* Closing Date */}
          <div>
            <span className="font-bold">Closing Date:</span>{" "}
            {job.closingDate
              ? new Date(job.closingDate).toLocaleDateString("en-US")
              : "N/A"}
          </div>


          {/* Job Description */}
          {job.description && (
            <div className="col-span-2">
              <span className="font-bold">Description:</span>
              <p className="whitespace-pre-wrap mt-1">{job.description}</p>
            </div>
          )}

          {/* Job Requirements */}
          {job.requirements && (
            <div className="col-span-2">
              <span className="font-bold">Requirements:</span>
              <p className="whitespace-pre-wrap mt-1">{job.requirements}</p>
            </div>
          )}

          {/* Job Responsibilities */}
          {job.responsibilities && (
            <div className="col-span-2">
              <span className="font-bold">Responsibilities:</span>
              <p className="whitespace-pre-wrap mt-1">{job.responsibilities}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedJobList;
