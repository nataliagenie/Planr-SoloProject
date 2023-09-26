import React from 'react';
import '../Date/Date.css';
import { format } from 'date-fns';

export default function DateComponent({ date }) {
  const formattedDate = format(date, 'MMMM do, yyyy');
  return (
    <div className="date">
      <h1>{formattedDate}</h1>
    </div>
  );
}



