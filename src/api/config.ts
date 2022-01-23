import axios from "axios";

export const baseUrl = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export { axiosInstance };
