import React from 'react';

export default function Restaurant ({ data }) {

  return (
    <div className="Restaurant">
      <h3>{data.restName}</h3>
      <p>{new Date(data.dateTime).toLocaleString()}</p>
      <p>{data.cuisine}</p>
      <p>{data.dressCode}</p>
    </div>
  )
}

