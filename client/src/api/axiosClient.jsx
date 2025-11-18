import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: false,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Handle Api response errors globally
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // If token expired or invalid, logout automatically
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
