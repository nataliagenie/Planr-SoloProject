import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Flight() {
  const [flights, setFlights] = useState([]);

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
          <h3>Flight {flight.origin} → {flight.destination} 🛫 </h3>
          <p>{flight.flightNum}</p>
          <p>{flight.time}</p>
        </div>
      ))}
    </div> 
  );
}
