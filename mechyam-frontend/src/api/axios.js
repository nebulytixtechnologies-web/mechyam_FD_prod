// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// export default api;

// src/api/axios.js
import axios from "axios";
const api = axios.create({
  baseURL: "/api", // nginx handles this
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // optional (cookies/JWT)
});

export default api;

