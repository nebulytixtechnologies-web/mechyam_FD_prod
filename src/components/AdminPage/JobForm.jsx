// src/components/AdminPage/JobForm.jsx
import React, { useState } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


// Convert USA format (MM/DD/YYYY) to HTML input format (YYYY-MM-DD)
function convertToInputDate(usaDate) {
  if (!usaDate) return "";
  const [month, day, year] = usaDate.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

// Convert HTML input format (YYYY-MM-DD) to USA format (MM/DD/YYYY)
function convertToUSDate(inputDate) {
  if (!inputDate) return "";
  const [year, month, day] = inputDate.split("-");
  return `${month}/${day}/${year}`;
}


const JobForm = ({ onAddJob }) => {
  // ------------------- State Management -------------------
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    location: "",
    jobType: "",
    experienceLevel: "",
    description: "",
    requirements: "",
    responsibilities: "",
    salaryRange: "",
    numberOfOpenings: "",
    closingDate: "",
  });

  const [loading, setLoading] = useState(false); // Controls button spinner

  // ------------------- Handle Input Change -------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ------------------- Handle Submit -------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.jobTitle || !formData.department || !formData.numberOfOpenings) {
      alert("Please fill in required fields including Number of Openings.");
      return;
    }

    // Prepare data for API
   const jobData = {
  ...formData,
  closingDate: convertToInputDate(formData.closingDate), // FIX HERE
  postedDate: new Date().toISOString(),
  numberOfOpenings: parseInt(formData.numberOfOpenings, 10),
  isActive: true,
};


    try {
      setLoading(true);

      // POST request to backend API
      const response = await axios.post(
        `${API_BASE_URL}/api/career/jobs`,
        jobData
      );

      console.log("Job uploaded:", response.data);

      
      alert("Job posted successfully!");

      // Update parent component if provided
      if (onAddJob) onAddJob(response.data);

      // Reset form
      setFormData({
        jobTitle: "",
        department: "",
        location: "",
        jobType: "",
        experienceLevel: "",
        description: "",
        requirements: "",
        responsibilities: "",
        salaryRange: "",
        numberOfOpenings: "",
        closingDate: "",
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  // ------------------- JSX UI -------------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-10 px-6">
      {/* Page Banner */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-2xl shadow-lg p-8 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide mb-2">
          Post a New Job
        </h1>
      </div>

      {/* Job Posting Form */}
      <div className="max-w-5xl mx-auto bg-white rounded shadow-xl p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-rows gap-8">
          {/* Job Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department name"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Type
            </label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">Select Job Type</option>
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="CONTRACT">Contract</option>
            </select>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">Select Experience Level</option>
              <option value="ENTRY">Entry</option>
              <option value="MID">Mid</option>
              <option value="SENIOR">Senior</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter job description"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="3"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Enter job requirements"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="3"
            />
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder="Enter key responsibilities"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="3"
            />
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Salary Range
            </label>
            <input
              type="text"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              placeholder="e.g., ₹30,000 - ₹50,000"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Number of Openings */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Number of Openings
            </label>
            <input
              type="number"
              name="numberOfOpenings"
              value={formData.numberOfOpenings}
              onChange={handleChange}
              placeholder="Enter number of openings"
              min="1"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Closing Date */}
          <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Last Date to Apply
  </label>
  <input
    type="date"
    name="closingDate"
    value={convertToInputDate(formData.closingDate)}
    onChange={(e) =>
      handleChange({
        target: {
          name: "closingDate",
          value: convertToUSDate(e.target.value),
        },
      })
    }
    className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
  />
</div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-400 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {loading ? "Uploading..." : "Upload Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
