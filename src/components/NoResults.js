// React
import React from 'react';
import '.././stylesheets/App.scss';
import ImgNoResults from '../images/NoFound.png';

const NoResults = (props) => {
  return (
    <div className="notFound">
      <p className="notFound__text">Sorry, nothing found</p>
      <img src={ImgNoResults} alt="Sorry!"></img>
    </div>
  );
};

export default NoResults;
