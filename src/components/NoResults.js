// React
import React from 'react';
import '.././stylesheets/App.scss';
import '../images/NoFound.png';

const NoResults = (props) => {
  return (
    <div className="notFound">
      <p className="notFound__text">Sorry, nothing found</p>
    </div>
  );
};

export default NoResults;
