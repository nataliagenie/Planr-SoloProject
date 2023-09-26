import FlightResy from "../Flight/FlightResy" 
import HotelResy from "../Hotel/HotelResy"
import RestaurantResy from "../Restaurant/RestaurantResy"
import CarResy from "../Car/CarResy"
import ActivityResy from "../Activity/ActivityResy"
// import { useNavigate } from 'react-router-dom';


export default function Reservations () {

    return (
      <div className="Reservations">
      <FlightResy />
      <HotelResy />
      <RestaurantResy />
      <CarResy />
      <ActivityResy />
      </div> 
  )
}

