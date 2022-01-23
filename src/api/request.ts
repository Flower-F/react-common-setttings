import { axiosInstance } from "./config";

export const getSubjectsRequest = <T = any>() => {
  return axiosInstance.get<T>("/subjects");
};
