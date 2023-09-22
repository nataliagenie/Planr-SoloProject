import { format } from 'date-fns';

export default function Event({event}) {
  return (
    <div className="Event">
        <li key={event.id}>
          <h3>{event.title}</h3>
          <div className='DateVenue'>
          <p>{format(new Date(event.dateTime), 'MMM dd, yyyy h:mm a')}</p>
          <p> {event.venue}</p>
          </div>
        </li>
    </div>
  );
}






