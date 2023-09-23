import React from 'react';

export default function Activity({ data }) {

  return (
    // <div className="Activity">
    //   <h3>{data.activity}</h3>
    //   <p>{new Date(data.dateTime).toLocaleString()}</p>
    //   <p> {data.dressCode}</p>
    // </div>
    <h1>{data}</h1>
  )
}

