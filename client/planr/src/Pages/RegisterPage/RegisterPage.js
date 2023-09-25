import React,  { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../images/Logo.png";
import '../RegisterPage/RegisterPage.css'
import ApiService from '../../ApiService';

export default function RegisterPage () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await ApiService.register(username, password);
      if (data.success) {
        localStorage.setItem('jwtToken', data.token);
        navigate('/itinerary');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="RegisterPage">
      <img src={Logo} alt="logo" width={500} height={500} />
        <form onSubmit={handleSubmit} className='RegisterFields'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br></br>
          <button className="RegisterButton" type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
      {/* <button className="EnterButton" type="button" onClick={handleEnterClick}>
        Enter
      </button> */}
    </div>
  );
}


  
