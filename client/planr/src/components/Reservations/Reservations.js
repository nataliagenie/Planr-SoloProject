import React, { useState, useEffect } from 'react';
import DateComponent from "../Date/Date"; 
import ApiService from "../../ApiService";
import FlightResy from "../Flight/FlightResy"; 
import HotelResy from "../Hotel/HotelResy";
import RestaurantResy from "../Restaurant/RestaurantResy";
import CarResy from "../Car/CarResy";
import ActivityResy from "../Activity/ActivityResy";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [groupedReservations, setGroupedReservations] = useState({});

  function groupAndSortReservations(reservations) {
    const grouped = {};

    reservations.forEach(reservation => {
        const dateKey = new Date(reservation.date).toISOString().split('T')[0];
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(reservation);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));

    sortedDates.forEach(date => {
        grouped[date].sort((a, b) => new Date(a) - new Date(b));
    });

    return grouped;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetchAllReservations();
        console.log(data)
        if (data) {
          setReservations(data);
          const grouped = groupAndSortReservations(data);
          setGroupedReservations(grouped);
        } else {
          console.warn("Received data is not in expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchData();
  }, []);

  const renderReservation = (reservation) => {
    let resyType = null;
  
    if (reservation.origin && reservation.destination) resyType = 'flight';
    else if (reservation.activity) resyType = 'activity';
    else if (reservation.hotelName ) resyType = 'hotel'; 
    else if (reservation.restName) resyType = 'restaurant'; 
    else if (reservation.rentalCompany) resyType = 'car'; 

    switch(resyType) {
      case 'flight': return <FlightResy data={reservation} />;
      case 'hotel': return <HotelResy data={reservation} />;
      case 'restaurant': return <RestaurantResy data={reservation} />;
      case 'car': return <CarResy data={reservation} />;
      case 'activity': return <ActivityResy data={reservation} />;
      default: return null;
    }
  };
  

  return (
    <div className="Reservations">
      {Object.keys(groupedReservations).sort((a, b) => new Date(a) - new Date(b)).map(date => (
        <div key={date}>
          <DateComponent date={new Date(date)} />
          <br></br>
          <div className="OrderedResy">
            {groupedReservations[date].map(reservation => renderReservation(reservation))}
          </div>
        </div>
      ))}
    </div>
  );
}
