import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ApiService from '../../ApiService'
import '../ReservationForm/ReservationForm.css';


export default function RestaurantForm() {
  const [formData, setFormData] = useState({
    restName: '',
    date: '',
    time:'',
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
      const response = await ApiService.createReservation('restaurant', formData);
      if (response) {
        navigate('/itinerary'); 
      }
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
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
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