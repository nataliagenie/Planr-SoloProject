import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ApiService from '../../ApiService'
import '../ReservationForm/ReservationForm.css';


export default function HotelForm() {
  const [formData, setFormData] = useState({
    hotelName: '',
    confNumber: '',
    ciDate: '',
    ciTime: '',
    coDate: '',
    coTime: ''
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
      const response = await ApiService.createReservation('hotel', formData);
      if (response) {
        navigate('/itinerary'); 
      }
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
          <label htmlFor="ciDate">Check-in Date</label>
          <input
              type="date"
              id="ciDate"
              name="ciDate"
              value={formData.ciDate}
              onChange={handleInputChange}
              required
            />
          </div>
        <div>
          <label htmlFor="ciTime">Check-in Time </label>
          <input
              type="time"
              id="ciTime"
              name="ciTime"
              value={formData.ciTime}
              onChange={handleInputChange}
              required
          />
        </div>
          <div>
          <label htmlFor="coDate">Check-out Date</label>
          <input
              type="date"
              id="coDate"
              name="coDate"
              value={formData.coDate}
              onChange={handleInputChange}
              required
              />
          </div>
          <div>
          <label htmlFor="=coTime">Check-out Time</label>
          <input
              type="time"
              id="coTime"
              name="coTime"
              value={formData.coTime}
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