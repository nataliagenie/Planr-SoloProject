import React from 'react';

export default function Flight ({ data }) {

  return (
    <div className="Flight">
      <h3>{data.origin}</h3>
      <p> {data.destination}</p>
      <p> {data.confNumber}</p>
      <p>{data.flightNum}</p>
      <p>{new Date(data.dateTime).toLocaleString()}</p>
    </div>
  )
}

