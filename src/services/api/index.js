import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptor thêm header Authorization
apiInstance.interceptors.request.use(
  (config) => {
    const parseUserInfo = JSON.parse(localStorage.getItem("user"));
    const token = parseUserInfo?.data?.data?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor xử lý lỗi
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (window.location.href.includes("/sign-in")) {
      return Promise.reject(error);
    }
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
