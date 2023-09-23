import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ApiService from '../../ApiService';
import '../ReservationForm/ReservationForm.css';


export default function FlightForm() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    confNumber: '',
    flightNum: '',
    dateTime: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ApiService.createReservation('flight', formData);
      navigate('/itinerary');
    } catch (error) {
      console.error("There was a problem adding the flight reservation:", error);
    }
  };


  return (
    <div className="Form">
        <form onSubmit={handleSubmit}> 
        <div>
            <label htmlFor="origin">Origin Airport Code</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleInputChange}
              required
            />
          </div>
        <div>
            <label htmlFor="destination">Destination Airport Code</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              required
            />
          </div>
        <div>
            <label htmlFor="confNumber">Confirmation Number</label>
            <input
              type="text"
              id="confNumber"
              name="confNumber"
              value={formData.confNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="flightNum">Flight Number</label>
            <input
              type="text"
              id="flightNum"
              name="flightNum"
              value={formData.flightNum}
              onChange={handleInputChange}
              required
            /> 
          </div>
          <div>
          <label htmlFor="dateTime">Date & Time </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            required
            />
          </div>
          <div>
            <button className="AddButton" type="submit">Add Reservation</button>
          </div>
        </form>
  </div>


  )}  