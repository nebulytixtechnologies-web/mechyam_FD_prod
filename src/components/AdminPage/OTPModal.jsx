import React, { useState, useRef, useEffect } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OTPModal = ({ email, tempToken, onVerified, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
  // ✅ prevents double alert in strict mode
  if (inputRefs.current.alertShown) return;
  inputRefs.current.alertShown = true;

  window.alert(`An OTP has been sent to your email: ${email}\n\nPlease enter it to continue.`);
  inputRefs.current[0]?.focus();
}, []);


  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();

      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pastedData.length !== 6) return;

    const newOtp = pastedData.split("").slice(0, 6);
    setOtp(newOtp);

    inputRefs.current[5]?.focus();
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setError("Enter 6-digit OTP");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/admin/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tempToken}`,
          },
          body: JSON.stringify({ email, otp: otpCode }),
        }
      );

      const data = await response.json();

      if (response.ok && data.token) {
        sessionStorage.setItem("adminToken", data.token);
        onVerified(data.token);
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch {
      setError("Server error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl w-[350px] text-center">
        <h2 className="font-bold text-lg mb-1">Enter OTP</h2>

        

        <form onSubmit={handleVerifyOTP}>
          <div className="flex justify-center gap-2 mb-3">
            {otp.map((digit, i) => (
              <input
                key={i}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[i] = el)}
                className="w-10 h-10 border-2 border-gray-500 text-center text-lg font-bold rounded outline-none focus:border-blue-900"
              />
            ))}
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button disabled={submitting} className="w-full bg-blue-900 text-white py-2 rounded">
            {submitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <button onClick={onClose} className="mt-2 w-full border py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
