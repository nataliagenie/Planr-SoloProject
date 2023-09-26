import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetchReservationsByType('car');
        setCars(data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Cars">
      {cars.map((car) => (
        <div key={car._id}>
          <h3>{car.rentalCompany} 🚗</h3>
          <p>{car.carType}</p>
          <p>{car.pickupTime}</p>
        </div>
      ))}
    </div> 
  );
}

