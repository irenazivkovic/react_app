import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return(
    <div className="header">
      <h1>Weather App</h1>
      <div className="options">
        <Link to='/about'>about</Link>
        <Link to='/weather'>weather</Link>
      </div>
    </div>
  );
}

export default Header;