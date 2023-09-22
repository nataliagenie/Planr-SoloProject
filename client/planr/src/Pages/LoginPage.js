import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../images/Logo.png";
import '../styles/Pages/LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/itinerary');
  };

  return (
    <div className="LoginPage">
      <img src={Logo} alt="logo" width={500} height={500} />
      <button className="EnterButton" type="button" onClick={handleEnterClick}>
        Enter
      </button>
    </div>
  );
}
