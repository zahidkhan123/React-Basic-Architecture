import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById } from "../../services/carServices";

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await getCarById(id);
      setCar(response.data);
    };
    fetchCar();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h2>Car Detail</h2>
      <p>Model: {car.model}</p>
      <p>Make: {car.make}</p>
      <p>Color: {car.color}</p>
      <p>Category: {car.category.name}</p>
      <p>Registration No: {car.registrationNo}</p>
    </div>
  );
}

export default CarDetail;
