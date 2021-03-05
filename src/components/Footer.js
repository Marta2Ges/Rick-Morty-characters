import React from 'react';
import image from '../images/Miau.jpg';
import '.././stylesheets/App.scss';

const Footer = () => {
  return (
    <footer>
      <span className="footer__span">
        <img className="footer__span--image" src={image} alt="" />
        <a className="footer__span--link" href="https://github.com/Marta2Ges" target="_blank" rel="noreferrer">
          Marta2Ges
        </a>
        &copy;2021
      </span>
    </footer>
  );
};

export default Footer;
