import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const JobDetailsPage = () => {
  const location = useLocation();
  const job = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedinUrl: "",
    portfolioUrl: "",
    coverLetter: "",
    resumeFile: null,
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!job) {
    return <div className="text-center mt-10">No job details available.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resumeFile: e.target.files[0] });
  };

  

  const handleSubmit = async (e) => {

    if (isExpired()) {
  setMessage("The application deadline has passed. You can no longer apply.");
  setIsLoading(false);
  return;
}

    e.preventDefault();
    setIsLoading(true);

    if (!formData.fullName || !formData.email || !formData.resumeFile) {
      setMessage("Please fill all required fields (Full Name, Email, Resume)");
      setIsLoading(false);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(formData.resumeFile.type)) {
      setMessage("Please upload only PDF or Word document.");
      setIsLoading(false);
      return;
    }

    const submitData = new FormData();
    submitData.append("jobId", job.id?.toString() || "");
    submitData.append("fullName", formData.fullName);
    submitData.append("email", formData.email);
    submitData.append("phoneNumber", formData.phoneNumber || "");
    submitData.append("linkedinUrl", formData.linkedinUrl || "");
    submitData.append("portfolioUrl", formData.portfolioUrl || "");
    submitData.append("coverLetter", formData.coverLetter || "");
    submitData.append("resumeFile", formData.resumeFile);

    try {
      await axios.post(
        `${API_BASE_URL}/api/career/apply`,
        submitData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 30000,
        }
      );

      setMessage("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        linkedinUrl: "",
        portfolioUrl: "",
        coverLetter: "",
        resumeFile: null,
      });
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      if (
        error.code === "ERR_NETWORK" ||
        error.message.includes("CONNECTION_REFUSED")
      ) {
        setMessage("Cannot connect to server. Please ensure backend is running.");
      } else if (error.response) {
        setMessage(
          error.response.data.message || "Application failed. Please try again."
        );
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
const getDaysAgo = (dateString) => {
  if (!dateString) return null;

  const postedDate = new Date(dateString);
  const today = new Date();

  const diffTime = today - postedDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Posted today";
  if (diffDays === 1) return "Posted 1 day ago";

  return `Posted ${diffDays} days ago`;
};

const isExpired = () => {
  const lastDate =
    job.lastDate ||
    job.lastDateToApply ||
    job.applicationDeadline ||
    job.closingDate;

  if (!lastDate) return false;

  const today = new Date();
  const deadline = new Date(lastDate);

  return today > deadline;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "Not specified";

  const d = new Date(dateStr);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  return `${month}-${day}-${year}`; // MM-DD-YYYY
};


  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-10 px-6">
      {/* ===== Blue Banner Section (Modern Style) ===== */}
      {/* ===== Clean & Professional Banner ===== */}
<div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-2xl shadow-xl p-10 mb-12">

  {/* Job Title */}
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
    {job.title || job.jobTitle}
  </h1>

  {/* Linear Row Section */}
  <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">

    {/* Posted Days Ago */}
    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
      <span className="font-semibold">Posted:</span>
      <span className="text-blue-100">
        {getDaysAgo(
          job.postedDate ||
          job.createdAt ||
          job.postedOn ||
          job.date
        )}
      </span>
    </div>

    {/* Department */}
    {job.department && (
      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
        <span className="font-semibold">Department:</span>
        <span className="text-blue-100">{job.department}</span>
      </div>
    )}

    {/* Job Code */}
    {job.id && (
      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
        <span className="font-semibold">Job Code:</span>
        <span className="text-blue-100">{job.id}</span>
      </div>
    )}
  </div>
</div>




      {/* ===== Main Content Section ===== */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE — Job Details */}
        <section className="border-r pr-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Job Description
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {job.description ||
              job.details ||
              "We are looking for passionate and skilled professionals to join our team."}
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>
              <strong>Location:</strong> {job.location || "Not specified"}
            </p>
            <p>
              <strong>Experience:</strong>{" "}
              {job.experienceLevel || job.experience || "Not specified"}
            </p>
            <p>
              <strong>Employment Type:</strong>{" "}
              {job.jobType || job.type || "Full-time"}
            </p>
            <p>
              <strong>Department:</strong> {job.department || "Not specified"}
            </p>

            {job.numberOfOpenings && (
              <p>
                <strong>Openings:</strong> {job.numberOfOpenings}
              </p>
            )}

            {job.salaryRange && (
              <p>
                <strong>Salary Range:</strong> {job.salaryRange}
              </p>
            )}

            {(job.lastDate || job.lastDateToApply || job.applicationDeadline || job.closingDate) && (
               <p>
                    <strong>Last Date to Apply:</strong>{" "}
                    {formatDate(
                    job.lastDate ||
                    job.lastDateToApply ||
                    job.applicationDeadline ||
                    job.closingDate
                    )}
                </p>
      )}

          </div>

          {job.requirements && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Requirements
              </h3>
              <div className="text-gray-700 whitespace-pre-line">
                {job.requirements}
              </div>
            </div>
          )}

          {job.responsibilities && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Responsibilities
              </h3>
              <div className="text-gray-700 whitespace-pre-line">
                {job.responsibilities}
              </div>
            </div>
          )}
        </section>

        {/* RIGHT SIDE — Application Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Apply for this Position
          </h2>

          {isExpired() && (
  <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-lg font-semibold">
    The application deadline has passed. You can no longer apply for this job.
  </div>
)}


          <form
  onSubmit={handleSubmit}
  className={`space-y-4 ${isExpired() ? "opacity-50 pointer-events-none" : ""}`}
>

            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium mb-1" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block font-medium mb-1" htmlFor="linkedinUrl">
                LinkedIn URL
              </label>
              <input
                id="linkedinUrl"
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your LinkedIn profile link"
              />
            </div>

            {/* Portfolio URL */}
            <div>
              <label className="block font-medium mb-1" htmlFor="portfolioUrl">
                Portfolio URL
              </label>
              <input
                id="portfolioUrl"
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your portfolio link"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block font-medium mb-1" htmlFor="coverLetter">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="4"
                className="w-full border px-3 py-2 rounded"
                placeholder="Write a short cover letter..."
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block font-medium mb-1" htmlFor="resumeFile">
                Upload Resume *
              </label>
              <input
                id="resumeFile"
                type="file"
                name="resumeFile"
                onChange={handleFileChange}
                className="w-full border px-3 py-2 rounded"
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 active:scale-95 active:bg-blue-800 transition-transform duration-150 w-full font-medium ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {isLoading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 p-3 rounded ${message.includes("successfully")
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
                }`}
            >
              {message}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default JobDetailsPage;
