import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }

    const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    const raceNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  return (
      <nav>
          <h3>F1</h3>
          <ul className='nav-links'>
              <Link style={navStyle} to='/choose' >
                  <li>Races</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
