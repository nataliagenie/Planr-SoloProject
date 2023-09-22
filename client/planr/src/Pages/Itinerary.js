import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Event from "../components/Event"
import '../styles/Pages/Itinerary.css';


export default function Itinerary() {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate('/addEvent');
  };

  return (
    <div className="Itinerary">
       <Header />
      <h1> Your Itinerary</h1>
      <Event />
      <button className="ItineraryButton" type="button" onClick={handleEventClick}>
        Add to Itinerary
      </button>
    </div>
  )
}