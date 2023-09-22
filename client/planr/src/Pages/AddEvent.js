import React from 'react';
import Header from '../components/Header';
import Form from '../components/EventForm';
import '../styles/Pages/AddEvent.css';

export default function AddEvent() {
  return (
    <div className="AddEvent">
      <Header />
        <div className='AddEventForm'>
          <Form />
      </div>
    </div>
  );
}
