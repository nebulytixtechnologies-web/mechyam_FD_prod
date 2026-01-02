import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function AdminProtectedRoute({ children }) {
  const [valid, setValid] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      setValid(false);
      return;
    }

    fetch(`${API_BASE_URL}/api/admin/auth/validate-token`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setValid(res.ok))
      .catch(() => setValid(false));
  }, []);

  if (valid === null) return <p>Validating session...</p>;

  return valid ? children : <Navigate to="/admin/login" replace />;
}
