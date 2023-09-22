import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import RestaurantForm from "./RestaurantForm";
import CarForm from "./CarForm";
import ActivityForm from "./ActivityForm";



export default function EventForm() {

  const [event, setEvent] = useState("Add Event");

  const [FlightFormVisible, setFlightFormVisible] = useState(false);
  const [HotelFormVisible, setHotelFormVisible] = useState(false);
  const [RestaurantFormVisible, setRestaurantFormVisible] = useState(false);
  const [CarFormVisible, setCarFormVisible] = useState(false);
  const [ActivityFormVisible, setActivityFormVisible] = useState(false);
 


  useEffect(() => {
    event === "activity" ? setActivityFormVisible(true) : setActivityFormVisible(false);
    event === "car" ? setCarFormVisible(true) : setCarFormVisible(false);
    event === "flight" ? setFlightFormVisible(true) : setFlightFormVisible(false);
    event === "hotel" ? setHotelFormVisible(true) : setHotelFormVisible(false);
    event === "restaurant" ? setRestaurantFormVisible(true) : setRestaurantFormVisible(false);
  }, [event]);

  const handleOnChange = (e) => {
    setEvent(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    event === "selectEventType"
      ? (result = "Add")
      : (result = makeFirstLetterCapital(event));
    return result;
  };
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/itinerary');
};


  return (
    <div className="EventForm">
      <div>
        <h1>{renderResult()} Reservation</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={event} onChange={handleOnChange}>
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
