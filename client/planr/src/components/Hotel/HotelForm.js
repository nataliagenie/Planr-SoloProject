import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ApiService from '../../ApiService'
import '../ReservationForm/ReservationForm.css';


export default function HotelForm() {
  const [formData, setFormData] = useState({
    hotelName: '',
    confNumber: '',
    ciDateTime: '',
    coDateTime: ''
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
      await ApiService.createReservation('hotel', formData);
      navigate('/itinerary');
    } catch (error) {
      console.error("There was a problem adding the hotel reservation:", error);
    }
  };


  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="hotelName">Hotel Name</label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              value={formData.hotelName}
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
          <label htmlFor="ciDateTime">Check-in Date and Time</label>
          <input
            type="datetime-local"
            id="ciDateTime"
            name="ciDateTime"
            value={formData.ciDateTime}
            onChange={handleInputChange}
            required
            />
          </div>
          <div>
          <label htmlFor="coDateTime">Check-out Date and Time</label>
          <input
          type="datetime-local"
          id="coDateTime"
          name="coDateTime"
          value={formData.coDateTime}
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