import React from "react";
import { Routes, Route } from "react-router-dom";
import CarListScreen from "../screens/Car/CarListScreen";
import CarDetailScreen from "../screens/Car/CarDetailScreen";
import CarFormScreen from "../screens/Car/CarFormScreen";
import CategoryListScreen from "../screens/Category/CategoryListScreen";
import CategoryFormScreen from "../screens/Category/CategoryFormScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import ProtectedRoute from "./ProtectedRoute";
import SignUpScreen from "../screens/Auth/SignupScreen";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/signin" element={<SignInScreen />} />

      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<CarListScreen />} />
        <Route path="car/:id" element={<CarDetailScreen />} />
        <Route path="car/new" element={<CarFormScreen />} />
        <Route path="categories" element={<CategoryListScreen />} />
        <Route path="categories/new" element={<CategoryFormScreen />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
