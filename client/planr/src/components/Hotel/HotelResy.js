import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Hotel() {
  const [hotels, setHotels] = useState([]);

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
          <h3>{capitalizeEveryWord(hotel.hotelName)} 🛏️</h3>
          <p>{formatTime(hotel.ciTime)}</p>
        </div>
      ))}
    </div> 
  );
}

