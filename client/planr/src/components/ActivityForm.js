import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


export default function ActivityForm() {
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
    <div className="ActivityForm">
        <form>
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
        </form>
        <div>
        <button className="AddButton" type="submit" onClick={handleCreateClick}>Add Reservation</button>
      </div>
  </div>

  )};