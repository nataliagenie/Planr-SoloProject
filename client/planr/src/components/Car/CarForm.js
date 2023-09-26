import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ApiService from '../../ApiService';
import '../ReservationForm/ReservationForm.css';


export default function CarForm() {
  const [formData, setFormData] = useState({
    confNumber: '',
    rentalCompany: '',
    carType: '',
    pickupDate:'',
    pickupTime:'',
    dropoffDate:'',
    dropoffTime:'',
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
      const response = await ApiService.createReservation('car', formData);
      if (response) {
        navigate('/itinerary'); 
      }
    } catch (error) {
      console.error("There was a problem adding the car reservation:", error);
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
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
              value={formData.carType}
              onChange={handleInputChange}
              required
            /> 
          </div>
          <div>
          <label htmlFor="pickupDate">Pick-up Date</label>
          <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              required
            />
          </div>
        <div>
          <label htmlFor="pickupTime">Pick-up Time </label>
          <input
              type="time"
              id="pickupTime"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              required
          />
        </div>
          <div>
          <label htmlFor="dropoffDate">Drop-off Date</label>
          <input
              type="date"
              id="dropoffDate"
              name="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleInputChange}
              required
              />
          </div>
          <div>
          <label htmlFor="dropoffTime">Drop-off Time</label>
          <input
              type="time"
              id="dropoffTime"
              name="dropoffTime"
              value={formData.dropoffTime}
              onChange={handleInputChange}
              required
          />
        </div>
          <div>
            <button className="AddButton" type="submit" >Add Reservation</button>
          </div>
        </form>  
  </div>


  )}  