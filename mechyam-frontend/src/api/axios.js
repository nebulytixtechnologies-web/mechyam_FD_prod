
// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// ADD THIS INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    // Make sure the key "adminToken" matches what you used in OTPModal.jsx
    const token = sessionStorage.getItem("adminToken"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;


