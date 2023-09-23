import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import Itinerary from './Pages/Itinerary/Itinerary';
import ResyDetails from './Pages/ResyDetails/ResyDetails';
import AddResy from './Pages/AddResy/AddResy';
import NoPage from './Pages/NoPage';
import React from "react";
import "./App.css";
// import { ClerkProvider } from "@clerk/clerk-react";
 
// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 


function App() {
  return (
    <div>
      {/* <div>
        <ClerkProvider publishableKey={clerkPubKey}>
        <div>Hello from clerk</div>
        </ClerkProvider>
      </div> */}
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} index />
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
