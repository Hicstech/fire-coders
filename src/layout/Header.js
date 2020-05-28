import React from 'react';
import '../assets/css/header.css';
// import callLogo from '../assets/imgs/phone-alt-solid.svg';

function Header() {
  return (
    <div className="maindiv">
      <div className="header">
      <button className="trail">Log In</button>
      <a href="./View Plans">View Plans</a>
      <a href="./Buy Plans">Buy Plans</a>
        <a  href="./Live Consulation ">Live Consulation </a>
        
        {/* <div className="calldiv">
          <img src={callLogo} alt="Call Icon" className="call" />
        </div> */}


      </div>
    </div>
  )
}

export default Header
