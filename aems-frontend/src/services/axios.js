import axios from "axios";
import TokenService from "./token.service";
import { toast } from "react-toastify";
import { doLogout } from "./auth/auth.service";

const AxiosInstance = axios.create({
  baseURL: "api/v1",
  withCredentials: true,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();

    const unAuthorizedUrls = ["/login", "/register"];
    if (token && config.url && !unAuthorizedUrls.includes(config.url)) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const rememberMe = TokenService.getRememberMe();
    if ([401, 410].includes(error.response.status) && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        if (!rememberMe) {
          doLogout();
        }

        const response = await axios.post(
          `${AxiosInstance.baseURL}/api/v1/refresh`,
          {},
          { withCredentials: true }
        );

        if (response.data.success) {
          TokenService.setSession(response.data.session);

          return AxiosInstance(originalRequest);
        } else {
          return Promise.reject(response.data.message);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (axios.isAxiosError(error)) {
      toast.error(
        error?.response?.data ? error?.response?.data.message : error.message
      );
    } else {
      console.log(error);
      toast.error("Unknown error");
    }
    return Promise.reject(error);
  }
);

export const GET = (url, config) => {
  return AxiosInstance.get(url, config);
};

export const POST = (url, body, config) => {
  return AxiosInstance.post(url, body, config);
};

export const PATCH = (url, body) => {
  return AxiosInstance.patch(url, body);
};

export const PUT = (url, body) => {
  return AxiosInstance.put(url, body);
};

export const DELETE = (url, config) => {
  return AxiosInstance.delete(url, config);
};

export const DOWNLOAD = (url, config) => {
  return AxiosInstance.get(url, { ...config, responseType: "blob" });
};

export default AxiosInstance;
