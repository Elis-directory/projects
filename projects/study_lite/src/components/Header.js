import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1> NoteNest &#9778; </h1>
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


