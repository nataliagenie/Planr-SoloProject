import React,  { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../images/Logo.png";
import '../HomePage/HomePage.css'

export default function HomePage () {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };


  return (
    <div className="HomePage">
      <img src={Logo} alt="logo" width={500} height={500} />
      <button className="LoginButton" type="button" onClick={handleLoginClick}>
        Login
      </button>
      <button className="RegisterButton" type="button" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}
