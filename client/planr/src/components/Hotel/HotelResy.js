import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Hotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetchReservationsByType('hotel');
        setHotels(data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Hotels">
      {hotels.map((hotel) => (
        <div key={hotel._id}>
          <h3>{hotel.hotelName} 🛏️</h3>
          <p>{hotel.ciTime}</p>
        </div>
      ))}
    </div> 
  );
}

