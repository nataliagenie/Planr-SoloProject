import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Activity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetchReservationsByType('activity');
        setActivities(data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Activities">
      {activities.map((activity) => (
        <div key={activity._id}>
          <h3>{activity.activity} 💃🏻🕺</h3>
          <p>{activity.dressCode}</p>
        </div>
      ))}
    </div> 
  )
}


 