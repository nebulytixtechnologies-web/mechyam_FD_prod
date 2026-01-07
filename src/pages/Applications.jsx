import React, { useState, useEffect } from "react";
import axios from "axios";
import { FileText, User, Users } from "lucide-react";
import "../pdfWorker";
import { Document, Page } from "react-pdf";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Applications = () => {

  // total applicants count
  const [totalApplicants, setTotalApplicants] = useState(0);


  // selected applicant object for "View Details"
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // list of jobs with grouped applicants
  const [applications, setApplications] = useState([]);

  // selected job object
  const [selectedJob, setSelectedJob] = useState(null);

  // UI state flags
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // resume modal preview state
  const [resumeUrlPreview, setResumeUrlPreview] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // pdf zoom level
  const [zoomLevel, setZoomLevel] = useState(1);

  // used to name downloaded resume file
  const [currentApplicantName, setCurrentApplicantName] = useState("resume");

  // ================== FETCH ALL APPLICATIONS ==================
  useEffect(() => {
    const fetchAllApplications = async () => {
      try {
        const token = sessionStorage.getItem("adminToken");

        let page = 0;
        let size = 50;              // fetch 50 per page
        let allData = [];
        let totalPages = 1;

        while (page < totalPages) {
          const res = await axios.get(
            `${API_BASE_URL}/api/career/applications?page=${page}&size=${size}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          const pageData = res.data?.data?.content || [];
          const pageTotalPages = res.data?.data?.totalPages || 1;

          allData = [...allData, ...pageData];
          totalPages = pageTotalPages;
          page++;
        }

        // save total applicants count
        setTotalApplicants(allData.length);

        // group by job
        const jobMap = {};

        allData.forEach(app => {
          const jobCode = app.job?.id || "UNKNOWN";
          const jobTitle = app.job?.jobTitle || "Untitled Job";

          if (!jobMap[jobCode]) {
            jobMap[jobCode] = {
              jobCode,
              jobTitle,
              applicants: []
            };
          }

          jobMap[jobCode].applicants.push({
            id: app.id,
            name: app.fullName,
            email: app.email,
            phone: app.phoneNumber,
            resumeUrl: `${API_BASE_URL}/api/career/applications/${app.id}/resume`,
            job: app.job,
            linkedinUrl: app.linkedinUrl,
            portfolioUrl: app.portfolioUrl,
            applicationDate: app.createdAt,
            coverLetter: app.coverLetter
          });
        });

        setApplications(Object.values(jobMap));
      } catch (err) {
        console.error(err);
        setError("Failed to load applications");
      } finally {
        setLoading(false);
      }
    };

    fetchAllApplications();
  }, []);


  // ================== RESUME PREVIEW HANDLER ==================
  const handlePreviewResume = async (url, applicantName) => {
    try {
      const token = sessionStorage.getItem("adminToken");

      const response = await axios.get(url, {
        responseType: "blob",
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/pdf"
        }
      });

      setCurrentApplicantName(applicantName || "resume");

      const fileURL = URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      setResumeUrlPreview(fileURL);
      setZoomLevel(1);
      setShowResumeModal(true);
    } catch (e) {
      console.error("Resume preview error:", e);
      alert("Unable to preview resume");
    }
  };

  // ================== DOWNLOAD RESUME ==================
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrlPreview;
    link.download = `${currentApplicantName}.pdf`;
    link.click();
  };

  // ================== MAIN UI STATES ==================
  if (loading) {
    return (
      <div className="text-center text-lg py-10 font-medium text-gray-700">
        Loading Job Applications...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-10 font-semibold">
        {error}
      </div>
    );
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="text-center text-gray-500 py-20">
        No job applications found.
      </div>
    );
  }

  // ================== MAIN RENDER ==================
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen rounded-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
          <FileText size={30} /> Job Applications
        </h1>
      </div>

      {/* ========== JOB SELECTED VIEW ========== */}
      {selectedJob ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

          <button
            onClick={() => setSelectedJob(null)}
            className="mb-5 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            ← Back to All Jobs
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {selectedJob.jobTitle}
            <span className="text-gray-500 text-lg">
              {" "}({selectedJob.jobCode})
            </span>
          </h2>

          {/* ====== APPLICANT LIST VIEW ====== */}
          <div className="space-y-3">
            {selectedJob.applicants.map((applicant, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">{applicant.name}</p>
                  <p className="text-gray-600 text-sm">Email: {applicant.email}</p>
                  <p className="text-gray-600 text-sm">Phone: {applicant.phone}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedApplicant(applicant)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() =>
                      handlePreviewResume(applicant.resumeUrl, applicant.name)
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    View Resume
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ===== FULL APPLICANT DETAILS MODAL (ONLY ONE NOW) ===== */}
          {selectedApplicant && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white w-[650px] p-6 rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto">

                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedApplicant(null)}
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold text-blue-800 border-b pb-2 mb-3">
                  Applicant Full Details
                </h3>

                <div className="space-y-2 text-gray-800 text-sm">
                  <p><strong>Name:</strong> {selectedApplicant.name}</p>
                  <p><strong>Email:</strong> {selectedApplicant.email}</p>
                  <p><strong>Phone:</strong> {selectedApplicant.phone}</p>

                  <p>
                    <strong>Job:</strong>{" "}
                    {selectedApplicant.job?.jobTitle} ({selectedApplicant.job?.id})
                  </p>

                  <p><strong>Department:</strong> {selectedApplicant.job?.department || "N/A"}</p>

                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href={selectedApplicant.linkedinUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      {selectedApplicant.linkedinUrl || "N/A"}
                    </a>
                  </p>

                  <p>
                    <strong>Portfolio:</strong>{" "}
                    <a href={selectedApplicant.portfolioUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      {selectedApplicant.portfolioUrl || "N/A"}
                    </a>
                  </p>

                  <p>
                    <strong>Applied On:</strong>{" "}
                    {selectedApplicant.applicationDate
                      ? new Date(selectedApplicant.applicationDate).toLocaleString()
                      : "N/A"}
                  </p>

                  <div>
                    <p><strong>Cover Letter:</strong></p>
                    <pre className="whitespace-pre-wrap bg-gray-100 p-2 rounded text-xs max-h-52 overflow-y-auto">
                      {selectedApplicant.coverLetter || "N/A"}
                    </pre>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handlePreviewResume(selectedApplicant.resumeUrl, selectedApplicant.name)
                  }
                  className="mt-4 px-4 py-2 w-full bg-blue-700 text-white rounded-lg hover:bg-blue-900"
                >
                  View Resume
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (

        /* ===== JOB LIST VIEW ===== */
        <div className="space-y-3">
          {applications.map((job, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedJob(job)}
              className="p-5 rounded-xl bg-white border shadow hover:shadow-xl cursor-pointer transition"
            >
              <p className="text-sm text-gray-500">Job Code: {job.jobCode}</p>

              <h3 className="text-xl font-semibold text-gray-800">
                {job.jobTitle}
              </h3>

              <p className="text-sm text-gray-500">
                Total Applicants: {totalApplicants}
              </p>

            </div>
          ))}
        </div>
      )}

      {/* ===== RESUME VIEWER MODAL ===== */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">

          <div className="bg-white rounded-lg shadow-xl w-[95%] h-[95%] flex flex-col">

            <div className="w-full bg-gray-800 text-white flex items-center justify-between px-4 py-2 rounded-t-lg">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowResumeModal(false);
                    setResumeUrlPreview(null);
                  }}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Close
                </button>

                <span className="text-sm">Resume Preview</span>
              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => setZoomLevel((z) => z + 0.2)}
                  className="bg-gray-600 px-2 rounded"
                >
                  +
                </button>

                <span>{Math.round(zoomLevel * 100)}%</span>

                <button
                  onClick={() => setZoomLevel((z) => (z > 0.4 ? z - 0.2 : z))}
                  className="bg-gray-600 px-2 rounded"
                >
                  −
                </button>

                <button
                  onClick={handleDownload}
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Download
                </button>

                {/* Print functionality disabled for now */}
                {/* <button
                  onClick={() => {
                    const w = window.open(resumeUrlPreview);
                    if (w) w.print();
                  }}
                  className="bg-green-600 px-3 py-1 rounded"
                >
                  Print
                </button> */}
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-gray-600 flex justify-center items-start">
              {resumeUrlPreview && (
                <Document file={resumeUrlPreview} loading="Loading PDF...">
                  <Page
                    pageNumber={1}
                    scale={zoomLevel}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    renderMode="canvas"
                  />
                </Document>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Applications;
