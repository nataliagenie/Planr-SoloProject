import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ApiService from '../../ApiService';
import '../ReservationForm/ReservationForm.css';

export default function ActivityForm() {
    const [formData, setFormData] = useState({
      activity: '',
      dateTime: '',
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
        await ApiService.createReservation('activity', formData);
        navigate('/itinerary');
      } catch (error) {
        console.error("There was a problem adding the activity reservation:", error);
      }
    };

  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="activity">Activity</label>
            <input
              type="text"
              id="activity"
              name="activity"
              value={formData.activity}
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
            <button className="AddButton" type="submit" >Add Reservation</button>
          </div>
        </form>  
  </div>

  )};


  
