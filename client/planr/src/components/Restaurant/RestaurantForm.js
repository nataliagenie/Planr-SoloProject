import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ApiService from '../../ApiService'
import '../ReservationForm/ReservationForm.css';


export default function RestaurantForm() {
  const [formData, setFormData] = useState({
    restName: '',
    dateTime: '',
    cuisine: '',
    dressCode: ''
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
      await ApiService.createReservation('restaurant', formData);
      navigate('/itinerary');
    } catch (error) {
      console.error("There was a problem adding the restaurant reservation:", error);
    }
  };


  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="restName">Restaurant Name</label>
            <input
              type="text"
              id="restName"
              name="restName"
              value={formData.restName}
              onChange={handleInputChange}
              required
            /> 
          </div>
          <div>
          <label htmlFor="dateTime">Date & Time</label>
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
            <label htmlFor="cuisine">Cuisine</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dressCode">Dress Code</label>
            <input
              type="text"
              id="dressCode"
              name="dressCode"
              value={formData.dressCode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className="AddButton" type="submit"> Add Reservation</button>
          </div>
        </form>
  </div>


  )}  