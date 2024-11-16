import React, { useEffect, useState } from "react";
import { getAllCars } from "../../services/carServices";
import CarDetail from "../../components/Car/CarDetail";
function CarListScreen() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getAllCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      {cars.map((car) => (
        <CarDetail key={car._id} car={car} />
      ))}
    </div>
  );
}

export default CarListScreen;
