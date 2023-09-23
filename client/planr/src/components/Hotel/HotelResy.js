import React from 'react';

export default function Hotel ({ data }) {

  return (
    <div className="Hotel">
      <h3>{data.hotelName}</h3>
      <p>{data.confNumber}</p>
      <p>{new Date(data.ciDateTime).toLocaleString()}</p>
      <p>{new Date(data.coDateTime).toLocaleString()}</p>
    </div>
  )
}

