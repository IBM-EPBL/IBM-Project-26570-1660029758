import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/DS.png';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="ihd__navbar">
      <div className="ihd__navbar-links">
        <div className="ihd__navbar-links_logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;