import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FlightForm from "../Flight/FlightForm";
import HotelForm from "../Hotel/HotelForm";
import RestaurantForm from "../Restaurant/RestaurantForm";
import CarForm from "../Car/CarForm";
import ActivityForm from "../Activity/ActivityForm";
import '../ReservationForm/ReservationForm.css';



export default function ReservationForm() {

  const [resy, setResy] = useState("reservation");

  const [FlightFormVisible, setFlightFormVisible] = useState(false);
  const [HotelFormVisible, setHotelFormVisible] = useState(false);
  const [RestaurantFormVisible, setRestaurantFormVisible] = useState(false);
  const [CarFormVisible, setCarFormVisible] = useState(false);
  const [ActivityFormVisible, setActivityFormVisible] = useState(false);
 


  useEffect(() => {
    resy === "activity" ? setActivityFormVisible(true) : setActivityFormVisible(false);
    resy === "car" ? setCarFormVisible(true) : setCarFormVisible(false);
    resy === "flight" ? setFlightFormVisible(true) : setFlightFormVisible(false);
    resy === "hotel" ? setHotelFormVisible(true) : setHotelFormVisible(false);
    resy === "restaurant" ? setRestaurantFormVisible(true) : setRestaurantFormVisible(false);
  }, [resy]);

  const handleOnChange = (e) => {
    setResy(e.target.value);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/itinerary');
};


  return (
    <div className="ReservationForm">
      <div className="Header">
        <h1> Add Reservation</h1>
      </div>
      <div className="DropDown">
        <select className="form-select" value={resy} onChange={handleOnChange}>
          <option value="selectEventType"> Select your type of booking</option>
          <option value="flight">Flight</option>
          <option value="hotel">Hotel</option>
          <option value="restaurant">Restaurant</option>
          <option value="car">Car</option>
          <option value="activity">Activity</option>
        </select>
      </div>
        <div className="Forms">
          {FlightFormVisible && <FlightForm />}
          {HotelFormVisible && <HotelForm />}
          {RestaurantFormVisible && <RestaurantForm />}
          {CarFormVisible && <CarForm />}
          {ActivityFormVisible && <ActivityForm />}
        </div>
      <div>
        <button className="BackButton" type="back" onClick={handleBackClick}>Go Back</button>
      </div>
    </div>
  );
}
