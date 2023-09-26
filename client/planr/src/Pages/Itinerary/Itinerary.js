import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reservations from "../../components/Reservations/Reservations"
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

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/'); 
}

  return (
     <div className="Itinerary">
      <Header />
      <h1 className='Title'>Your Itinerary</h1>
      <Reservations />

      <button className="Button" type="button" onClick={handleEventClick}> Add to Itinerary</button>
      <br></br>
      <button className="Button" onClick={handleLogout}>Logout</button>
    </div>
   
   
  );
};
