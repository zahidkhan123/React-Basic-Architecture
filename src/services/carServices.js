import axiosInstance from "../api/axiosInstance";

export const getAllCars = async () => {
  const response = await axiosInstance.get("/cars/all");
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axiosInstance.get(`/cars/${id}`);
  return response.data;
};

export const createCar = async (carData) => {
  const response = await axiosInstance.post("/cars/create", carData);
  return response.data;
};

export const updateCar = async (id, carData) => {
  const response = await axiosInstance.put(`/cars/update/${id}`, carData);
  return response.data;
};
