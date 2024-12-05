//A simple navigation bar.

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
 return (
  <nav className="navbar">
   <Link className="nav-link" to="/">Home</Link>
   <Link className="nav-link" to="/search">Search</Link>
  </nav>
 );
};

export default Navbar;