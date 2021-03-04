import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Browse your</h1>
      <img className="header__img" src={logo} alt="" />
    </div>
  );
};

export default Header;
