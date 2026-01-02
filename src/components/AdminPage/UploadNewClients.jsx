import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Users, PlusCircle, Trash2, LayoutGrid, Upload } from "lucide-react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const UploadNewClients = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [clients, setClients] = useState([]);
  const [activeTab, setActiveTab] = useState("existing");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("adminToken");
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const BASE_URL = `${API_BASE_URL}/clients`;

  const fetchClients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/all`);
      setClients(res.data);
      setError("");
    } catch {
      setError("Failed to load clients. Ensure server is running.");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyName || !companyLocation) {
      setError("Please fill all fields before submitting.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `${BASE_URL}/add`,
        { companyName, companyLocation },
        { headers: authHeader }
      );

      alert("Client added successfully!");
      setCompanyName("");
      setCompanyLocation("");
      fetchClients();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add client. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;

    try {
      await axios.delete(`${BASE_URL}/delete/${id}`, { headers: authHeader });
      fetchClients();
    } catch {
      alert("Delete failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-white py-12 px-4 sm:px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-sky-400 text-transparent bg-clip-text flex justify-center items-center gap-3 py-4">
          <Users size={42} /> Client Management
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Add and maintain partners efficiently.</p>
      </div>

      {/* TAB SWITCH SMALL WIDTH */}
      <div className="max-w-md mx-auto mb-10">
        <div className="grid grid-cols-2 border border-blue-500 rounded-lg overflow-hidden shadow-md">
          <button
            onClick={() => setActiveTab("upload")}
            className={`py-2 text-sm font-semibold flex items-center justify-center gap-2 transition 
              ${activeTab === "upload" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`}
          >
            <Upload size={18} /> Add Client
          </button>

          <button
            onClick={() => setActiveTab("existing")}
            className={`py-2 text-sm font-semibold flex items-center justify-center gap-2 transition 
              ${activeTab === "existing" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`}
          >
            <LayoutGrid size={18} /> View Clients
          </button>
        </div>
      </div>

      {/* ADD CLIENT FORM */}
      {activeTab === "upload" && (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register New Client</h2>

          {error && <p className="text-red-600 text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Ex: Tata Projects Ltd"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Project / Location</label>
              <input
                type="text"
                value={companyLocation}
                onChange={(e) => setCompanyLocation(e.target.value)}
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Ex: Mumbai Metro Site"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition"
            >
              {loading ? <Loader2 className="animate-spin" /> : <PlusCircle />}
              {loading ? "Saving..." : "Add Client"}
            </button>
          </form>
        </div>
      )}

      {/* SIMPLE LIST VIEW */}
      {activeTab === "existing" && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Client List</h2>

          {clients.length === 0 ? (
            <p className="text-center text-gray-600 py-6">No clients added yet.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {clients.map((client) => (
                <li key={client.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{client.companyName}</p>
                    <p className="text-gray-600 text-sm">{client.companyLocation}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadNewClients;
