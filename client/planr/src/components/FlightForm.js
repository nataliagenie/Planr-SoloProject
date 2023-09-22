import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


export default function FlightForm() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    confNumber: '',
    flightNum: '',
    dateTime: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const {  origin, destination, confNumber, flightNum, dateTime } = formData; 
    const newEvent = {  origin, destination, confNumber, flightNum, dateTime };
  addEvent(newEvent).then(data => {
    setEvents(prev => {
      return [...prev, data]
    })
  })
  setFormData({ origin: '',
  destination: '',
  confNumber: '',
  flightNum: '',
  dateTime: ''});
}
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/itinerary');
  };



  return (
    <div className="FlightForm">
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
        </form>
        <div>
        <button className="AddButton" type="submit" onClick={handleCreateClick}>Add Reservation</button>
      </div>
  </div>


  )}  