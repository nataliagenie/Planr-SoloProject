import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reservation from "../../components/Reservation/Reservation"
import ApiService from "../../ApiService";
import '../Itinerary/Itinerary.css';


export default function Itinerary() {
const [reservations, setReservations] = useState([])

  useEffect (() =>{
    console.log('Fetching itinerary...');
    ApiService.fetchAllReservations().then(res => {
      console.log('Reservations from API:', res);
      setReservations(res);
    })
    .catch((error) => {
      console.error('Error fetching itinerary:', error);
    });
  },[])

  const navigate = useNavigate();
  const handleEventClick = () => {
    navigate('/addReservation');
  };

  return (
    <div className="Itinerary">
       <Header />
       {/* <div className="ItEvents">
          {reservation
          reservation.map(reservation => <Reservation key={reservation.id} reservation={reservation} setReservation={setReservation}/>) :
      <p>There are Itinerary</p>
        }
        </div> */}
      <h1 className='Title'>Your Itinerary</h1>
      {/* <Reservation reservations={reservations} setReservations={setReservations} /> */}
      <button className="ItineraryButton" type="button" onClick={handleEventClick}>
        Add to Itinerary
      </button>
    </div>
  )
}