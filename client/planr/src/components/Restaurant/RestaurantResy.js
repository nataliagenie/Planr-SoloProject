import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Restaurant() {
 
  const [restaurants, setRestaurants] = useState([]);

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
        const data = await ApiService.fetchReservationsByType('restaurant');
        setRestaurants(data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Resy">
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h3>{capitalizeEveryWord(restaurant.restName)} 🍴</h3>
          <p>{capitalizeEveryWord(restaurant.dressCode)}</p>
          <p>{formatTime(restaurant.time)}</p>
        </div>
      ))}
    </div> 
  );
}

