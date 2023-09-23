import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Logo from "client/planr/src/images/Logo.png";
import '../LoginPage/LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/itinerary');
  };

  return (
    <div className="LoginPage">
      {/* <img src={Logo} alt="logo" width={500} height={500} /> */}
        <form className='LoginFields'>
          <input type="text" placeholder="Username" />
          <br></br>
          <input type="password" placeholder="Password" />
          <br></br>
          <button className="LoginButton" type="submit">Login</button>
        </form>
      <button className="EnterButton" type="button" onClick={handleEnterClick}>
        Enter
      </button>
    </div>
  );
}
// export default LoginPage;

