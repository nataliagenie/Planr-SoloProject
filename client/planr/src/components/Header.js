import React from 'react';
import Logo from "../images/Header.png";

export default function Header() {
  const imageStyle = {
    display: 'block',   
    margin: '0 auto',    
  };

  return (
    <div className="Header">
      <img src={Logo} alt="logo" width={600} height={200} style={imageStyle} />
    </div>
  );
}
