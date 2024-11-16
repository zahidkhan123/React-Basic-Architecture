import React from "react";
import CarForm from "../../components/Car/CarForm";

function CarFormScreen({ carId }) {
  return (
    <div>
      <h2>{carId ? "Edit Car" : "Add Car"}</h2>
      <CarForm carId={carId} />
    </div>
  );
}

export default CarFormScreen;
