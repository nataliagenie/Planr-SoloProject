import React from 'react';

export default function CarResy ({ data }) {

  return (
    <div className="Car">
      <h3>{data.confNumber}</h3>
      <p> {data.rentalCompany}</p>
      <p> {data.carType}</p>
      <p>{new Date(data.pickupDate).toLocaleString()}</p>
      <p>{new Date(data.dropoffDate).toLocaleString()}</p>
      <p>{data.dressCode}</p>
    </div>
  )
}

