import React, { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";

const ContactDetails = () => {
  const [contacts, setContacts] = useState([]);

  // ✅ Pagination state
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState(1);

  // ✅ State for message popup
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/api/contact/all?pageNo=${pageNo}&pageSize=${pageSize}`
      )
      .then((res) => {
        const pageData = res.data.data;
        setContacts(pageData.content || []);
        setTotalPages(pageData.totalPages);
      })
      .catch((err) => console.error("Error fetching contact details:", err));
  }, [pageNo]);

  // ✅ Helper to format date
  const formatDate = (isoString) => {
    if (!isoString) return "-";
    const date = new Date(isoString);
    return date.toLocaleString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-blue-900">
        Contact Details
      </h2>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No contact entries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md bg-white">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Phone</th>
                <th className="border p-3 text-left">Service Type</th>
                <th className="border p-3 text-left w-64">Message</th>
                <th className="border p-3 text-left">Submitted On</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-blue-50 transition-all text-gray-800"
                >
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2">{c.email}</td>
                  <td className="border p-2">{c.phoneNumber}</td>
                  <td className="border p-2">{c.serviceType}</td>

                  {/* ✅ Show button instead of message text */}
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => setSelectedMessage(c.message)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      See Message
                    </button>
                  </td>

                  <td className="border p-2">{formatDate(c.submissionDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ✅ Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              disabled={pageNo === 1}
              onClick={() => setPageNo(pageNo - 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="font-semibold text-gray-700">
              Page {pageNo} of {totalPages}
            </span>

            <button
              disabled={pageNo === totalPages}
              onClick={() => setPageNo(pageNo + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* ✅ Message Popup Card */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setSelectedMessage(null)} // Close on outside click
        >
          <div
            className="bg-gray-100 w-[600px] p-5 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Message</h3>
            <div className="bg-gray-100 p-3 rounded max-h-64 overflow-y-auto whitespace-pre-wrap">
              {selectedMessage}
            </div>

            <button
              onClick={() => setSelectedMessage(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactDetails;
