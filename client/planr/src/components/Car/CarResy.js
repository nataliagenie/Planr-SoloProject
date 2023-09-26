import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Car() {
  const [cars, setCars] = useState([]);

  function capitalizeEveryWord(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  function formatTime(time) {
    let [hour, minutes] = time.split(":");
    let ampm = +hour >= 12 ? 'PM' : 'AM';
    
    hour = +hour % 12 || 12; 
  
    return `${hour}:${minutes} ${ampm}`;
  }

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
          <h3>{capitalizeEveryWord(car.rentalCompany)} 🚗</h3>
          <p>{capitalizeEveryWord(car.carType)}</p>
          <p>{formatTime(car.pickupTime)}</p>
        </div>
      ))}
    </div> 
  );
}

