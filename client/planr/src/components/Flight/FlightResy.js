import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Flight() {
  const [flights, setFlights] = useState([]);

  function capitalize(string) {
    return string.toUpperCase()
  }

  function capitalizeFlightNumber(flightNum) {
    const prefix = flightNum.slice(0, 2).toUpperCase();
    const suffix = flightNum.slice(2);
    return prefix + suffix;
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
        const data = await ApiService.fetchReservationsByType('flight');
        setFlights(data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Flights">
      {flights.map((flight) => (
        <div key={flight._id}>
          <h3>Flight {capitalize(flight.origin)} → {capitalize(flight.destination)} 🛫 </h3>
          <p>{capitalizeFlightNumber(flight.flightNum)}</p>
          <p>{formatTime(flight.time)}</p>
        </div>
      ))}
    </div> 
  );
}
