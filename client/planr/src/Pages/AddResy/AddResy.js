import React from 'react';
import Header from '../../components/Header';
import Form from '../../components/ReservationForm/ReservationForm';
import '../AddResy/AddResy.css'

export default function AddResy() {
  return (
    <div className="AddResy">
      <Header />
        <div className='AddResyForm'>
          <Form />
      </div>
    </div>
  );
}
