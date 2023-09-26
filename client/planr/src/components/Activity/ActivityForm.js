import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import ApiService from '../../ApiService';
import '../ReservationForm/ReservationForm.css';

export default function ActivityForm() {
    const [formData, setFormData] = useState({
      activity: '',
      date:'',
      time:'',
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await ApiService.createReservation('activity', formData);
        if (response) {
          navigate('/itinerary'); 
      }
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
    );
}
