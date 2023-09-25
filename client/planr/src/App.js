import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import Itinerary from './Pages/Itinerary/Itinerary';
import ResyDetails from './Pages/ResyDetails/ResyDetails';
import AddResy from './Pages/AddResy/AddResy';
import NoPage from './Pages/NoPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/login" element={<LoginPage />} index />
          <Route path="/register" element={<RegisterPage />} index />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/reservation/:type/:id" element={<ResyDetails />} />
          <Route path="/addReservation" element={<AddResy />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
