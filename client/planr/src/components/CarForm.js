import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


export default function CarForm() {
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
    <div className="CarForm">
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
            <label htmlFor="rentalCompany">Rental Company</label>
            <input
              type="text"
              id="rentalCompany"
              name="rentalCompany"
              value={formData.rentalCompany}
              onChange={handleInputChange}
              required
            /> 
          </div>
          <div>
            <label htmlFor="carType">Type of Car</label>
            <input
              type="text"
              id="carType"
              name="carType"
              value={formData.rentalCompany}
              onChange={handleInputChange}
            /> 
          </div>
          <div>
          <label htmlFor="pickupDate">Pick-up Date and Time</label>
          <input
            type="datetime-local"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            required
            />
          </div>
          <div>
          <label htmlFor="dropoffDate">Drop-off Date and Time</label>
          <input
          type="datetime-local"
          id="dropoffDate"
          name="dropoffDate"
          value={formData.dropoffDate}
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