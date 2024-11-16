import React, { useEffect, useState } from "react";
import { getCarById } from "../../services/carServices";
import CarDetail from "../../components/Car/CarDetail";

function CarDetailScreen({ id }) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const data = await getCarById(id);
      setCar(data);
    };
    fetchCar();
  }, [id]);

  return (
    <div>
      <h2>Car Details</h2>
      {car ? <CarDetail car={car} /> : <p>Loading...</p>}
    </div>
  );
}

export default CarDetailScreen;
