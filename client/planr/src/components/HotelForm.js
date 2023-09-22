import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


export default function HotelForm() {
  const [formData, setFormData] = useState({
    title: '',
    dateTime: '',
    venue: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { title, venue, dateTime } = formData; 
//     const newEvent = { title, venue, dateTime };
//   addEvent(newEvent).then(data => {
//     setEvents(prev => {
//       return [...prev, data]
//     })
//   })
//   setFormData({  title: '',
//   dateTime: '',
//   venue: ''});
// }

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/itinerary');
  };


  return (
    <div className="HotelForm">
        <form>
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
          <label htmlFor="ciDateTime">Check-in Date and Time</label>
          <input
            type="datetime-local"
            id="iDateTime"
            name="iDateTime"
            value={formData.iDateTime}
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
        </form>
        <div>
        <button className="AddButton" type="submit" onClick={handleCreateClick}>Add Reservation</button>
      </div>

  </div>


  )}  