import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Reservations from "../../components/Reservations/Reservations"
import Activity from "../../components/Activity/ActivityResy"
import ApiService from "../../ApiService";
import '../Itinerary/Itinerary.css';


export default function Itinerary() {

const [reservations, setReservations] = useState([])
console.log(reservations)
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await ApiService.fetchAllReservations();
      setReservations(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  fetchData();
}, []);

  const navigate = useNavigate();
  const handleEventClick = () => {
    navigate('/addReservation');
  };

  return (
     <div className="Itinerary">
      <Header />
      <h1 className='Title'>Your Itinerary</h1>
       {/* <div className="Reservations"> */}
      {reservations.map(reservation => (
      //   <Reservations key={reservation._id} data={reservation} />
      <h1 key={reservation._id}>{reservation.dressCode}</h1>
      ))}
      {/* <h1>{reservations}</h1> */}
      {/* </div> */}
      <button className="ItineraryButton" type="button" onClick={handleEventClick}> Add to Itinerary</button>
    </div>
   
   
  );
};
