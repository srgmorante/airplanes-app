import React from 'react';
import  { NavLink } from 'react-router-dom';

import './index.css';

const headerComponent = () => (
  <header>
      <NavLink to="/"><span className="logo" role="img" aria-label="plane">✈️</span></NavLink>
      <nav className="menu">
        <ul>
          <li><NavLink to="/airports">Airports</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  </header>
);

export default headerComponent;