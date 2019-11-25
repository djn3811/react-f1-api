import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }

  return (
      <nav>
          <h3>F1</h3>
          <ul className='nav-links'>
              <Link style={navStyle} to='/choose' >
                  <li>Races</li>
              </Link>
              <Link style={navStyle} to='/choosedriver' >
                  <li>Drivers</li>
              </Link>
              <Link style={navStyle} to='/choosestandings' >
                  <li>Standings</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
