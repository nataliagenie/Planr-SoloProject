import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

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
    <div className="Restaurants">
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h3>{restaurant.restName} 🍴</h3>
          <p>{restaurant.time}</p>
          <p>{restaurant.dressCode}</p>
        </div>
      ))}
    </div> 
  );
}

