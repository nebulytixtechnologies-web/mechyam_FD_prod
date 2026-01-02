import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin-page" replace />;
}
