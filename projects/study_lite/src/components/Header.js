import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"; 

const Header = () => {
  return (
    <header>
      <h1>Study Lite</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


