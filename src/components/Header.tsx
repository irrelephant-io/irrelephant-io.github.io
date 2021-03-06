import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/light_logo.svg';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="🐘" />

            <div>
              <h1>Irrelephant Studios</h1>
              <p>Norway</p>
            </div>
          </div>
        </Link>
        <div className="header__right">
          <Link to="/projects">Projects</Link>

          <Link to="/team">Team</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
