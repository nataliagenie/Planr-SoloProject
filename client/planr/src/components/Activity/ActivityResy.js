import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from "../../ApiService";

export default function Activity() {
  const [activities, setActivities] = useState([]);

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
        const data = await ApiService.fetchReservationsByType('activity');
        setActivities(data.data.sort((a, b) => {
          let dateA = new Date(`${a.date} ${a.time}`);
          let dateB = new Date(`${b.date} ${b.time}`);
          return dateA - dateB;
        }));
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
          <h3>{capitalizeEveryWord(activity.activity)} 💃🏻🕺</h3>
          <p>{capitalizeEveryWord(activity.dressCode)}</p>
          <p>{formatTime(activity.time)}</p>
        </div>
      ))}
    </div> 
  )
}


          