import axiosInstance from "../api/axiosInstance";

export const signUp = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export const signIn = async (credentials) => {
  const response = await axiosInstance.post("/auth/signin", credentials);
  return response.data;
};
