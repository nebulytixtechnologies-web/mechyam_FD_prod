import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import OTPModal from "./OTPModal";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [tempToken, setTempToken] = useState(null);

  // ✅ Auto redirect if already logged in
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (token) navigate("/admin/dashboard", { replace: true });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // console.log("API_BASE_URL:", API_BASE_URL);
      const response = await fetch(
        `${API_BASE_URL}/api/admin/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (!data.tempToken) {
          setError("Error: No OTP token received.");
          return;
        }

        setTempToken(data.tempToken);
        setShowOTP(true);
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch {
      setError("Server error, try again later");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerified = (finalJwtToken) => {
    sessionStorage.setItem("adminToken", finalJwtToken);
    setShowOTP(false);
    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px] relative">

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleVerify} className="space-y-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg"
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg"
            disabled={loading}
          />

          {error && <p className="text-red-600 text-center">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-blue-900 text-white py-2 rounded-lg flex justify-center items-center"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {showOTP && (
          <OTPModal
            email={formData.email}
            tempToken={tempToken}
            onVerified={handleOTPVerified}
            onClose={() => setShowOTP(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
