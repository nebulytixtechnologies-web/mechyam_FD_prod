import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, RotateCcw, Download, X } from "lucide-react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [searchJobId, setSearchJobId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);

  // 🔹 Pagination States
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5; // number of records per page

  useEffect(() => {
    fetchAllApplications();
  }, [page]); // Re-fetch on page change

  // ✅ Fetch all applications with pagination
  const fetchAllApplications = () => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/api/career/applications?page=${page}&size=${pageSize}`)
      .then((res) => {
        const data = res.data.data;
        setApplications(data?.content || []);
        setTotalPages(data?.totalPages || 0);
        setErrorMsg("");
      })
      .catch(() => {
        setApplications([]);
        setErrorMsg("Failed to load applications.");
      })
      .finally(() => setLoading(false));
  };

  // ✅ Handle job search
  const handleSearch = () => {
    if (!searchJobId.trim()) return fetchAllApplications();
    setLoading(true);

    axios
      .get(`${API_BASE_URL}/api/career/applications/job/${searchJobId}`)
      .then((res) => {
        setApplications(res.data.data || []);
        setTotalPages(1);
        setPage(0);
        setErrorMsg("");
      })
      .catch(() => {
        setApplications([]);
        setErrorMsg("No applications found for this Job ID.");
      })
      .finally(() => setLoading(false));
  };

  // ✅ Reset search
  const handleReset = () => {
    setSearchJobId("");
    setErrorMsg("");
    setPage(0);
    fetchAllApplications();
  };

  // ✅ Resume download
  const handleDownload = (id) => {
    const fileUrl = `${API_BASE_URL}/api/career/applications/${id}/resume`;
    window.open(fileUrl, "_blank");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-900">Applied Candidates</h2>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={searchJobId}
            onChange={(e) => setSearchJobId(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter Job ID"
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
          >
            <Search size={18} /> Search
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            <RotateCcw size={18} /> Reset
          </button>
        </div>
      </div>

      {/* States */}
      {loading && <p className="text-gray-500">Loading...</p>}
      {!loading && errorMsg && <p className="text-gray-500 text-xl">{errorMsg}</p>}
      {!loading && applications.length === 0 && !errorMsg && (
        <p className="text-gray-500 text-xl">No applications yet.</p>
      )}

      {/* Header Row */}
      {!loading && !errorMsg && applications.length > 0 && (
        <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700 border-b pb-2 mb-2 text-sm">
          <span>Name</span>
          <span className="text-center">Job Code</span>
          <span>Email</span>
          <span>Job Title</span>
          <span className="text-right">Action</span>
        </div>
      )}

      {/* List Rows */}
      {!loading && !errorMsg && applications.length > 0 && (
        <div className="flex flex-col gap-2">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app)}
              className="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md 
              transition grid grid-cols-5 gap-4 items-center text-sm"
            >
              <span className="font-bold text-blue-700">{app.fullName}</span>
              <span className="text-gray-700 font-medium text-center">{app.job?.id}</span>
              <span className="text-gray-600 truncate">{app.email}</span>
              <span className="text-gray-700">{app.job?.jobTitle}</span>
              <span className="text-blue-700 font-semibold text-right">View →</span>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Pagination Controls */}
      {!loading && !errorMsg && totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-3">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-2 text-gray-700">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page + 1 === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedApp && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="bg-white w-[500px] p-6 rounded-lg shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2" onClick={() => setSelectedApp(null)}>
              <X size={22} className="text-gray-600 hover:text-red-500" />
            </button>

            <h3 className="text-xl font-bold text-blue-800 border-b pb-2">
              Candidate Details
            </h3>

            <div className="mt-3 space-y-2 text-gray-800">
              <p><strong>Name:</strong> {selectedApp.fullName}</p>
              <p><strong>Email:</strong> {selectedApp.email}</p>
              <p><strong>Phone:</strong> {selectedApp.phoneNumber}</p>
              <p><strong>Job:</strong> {selectedApp.job?.jobTitle} ({selectedApp.job?.id})</p>
              <p><strong>Department:</strong> {selectedApp.job?.department}</p>

              <p><strong>LinkedIn:</strong>{" "}
                <a
                  href={selectedApp.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {selectedApp.linkedinUrl}
                </a>
              </p>
              <p><strong>Portfolio:</strong>{" "}
                <a
                  href={selectedApp.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {selectedApp.portfolioUrl}
                </a>
              </p>

              <p><strong>Applied On:</strong>{" "}
                {new Date(selectedApp.applicationDate).toLocaleString()}
              </p>

              <p><strong>Cover Letter:</strong></p>
              <pre className="whitespace-pre-wrap bg-gray-100 p-2 rounded text-sm max-h-40 overflow-y-auto">
                {selectedApp.coverLetter}
              </pre>
            </div>

            <button
              onClick={() => handleDownload(selectedApp.id)}
              className="mt-4 px-4 py-2 w-full bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900"
            >
              <Download size={18} /> Download Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
