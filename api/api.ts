import axios from "axios";

const api = axios.create({
  // baseURL:'http://localhost:3000',
  baseURL: "https://api.healthvandanam.com", // e.g. https://api.example.com
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor
 * Add auth token here if needed
 */
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage?.getItem?.("token");
      if (token && config?.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response interceptor
 */
api.interceptors.response.use(
  (response) => response.data, // return only data
  (error) => {
    if (error?.response) {
      console.error("API Error:", error?.response?.data);
    }
    return Promise.reject(error);
  }
);

export default api;
