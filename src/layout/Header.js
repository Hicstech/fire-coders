import React from 'react';
import '../assets/css/header.css';
import callLogo from '../assets/imgs/phone-alt-solid.svg';

function Header() {
  return (
    <div className="maindiv">
      <div className="header">
        <a className="active" href="./home">Home</a>
        <a href="./product">Product</a>
        <a href="./pricing">Pricing</a>
        <a href="./help">Help</a>
        <a href="./login">Login</a>

        <button className="trail">FREE TRAIL</button>

        <div className="calldiv">
          <img src={callLogo} alt="Call Icon" className="call" />
        </div>


      </div>
    </div>
  )
}

export default Header
