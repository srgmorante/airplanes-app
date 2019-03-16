import React from 'react';
import  { Link } from 'react-router-dom';

import './index.css';

const headerComponent = () => (
  <header className="App-header">
    <Link to="/"><span role="img" aria-label="plane">✈️</span></Link>
      <nav className="menu">
        <ul>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  </header>
);

export default headerComponent;