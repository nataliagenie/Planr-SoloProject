import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import Itinerary from './Pages/Itinerary';
import Event from './Pages/EventDetails';
import AddEvent from './Pages/AddEvent';
import NoPage from './Pages/NoPage';

 function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/event" element={<Event />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App; 