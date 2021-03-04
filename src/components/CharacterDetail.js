import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  console.log(props);
  const { name, image, gender, status, origin, location, species, episodes } = props.character;
  console.log(props.character);

  return (
    <div>
      <Link to="/">
        <span className="detail__span">
          <i className="fas fa-times detail__close"></i>
        </span>
      </Link>
      <div className="detail">
        <h4 className="detail__name">{name}</h4>
        <span className="detail__img--span">
          <img className="detail__img--imagen" src={image} alt={name} />
        </span>
        <span className="detail__icons"></span>
        <p className="detail__text--species">
          <span className="detail__span">Species:</span> <span className="detail__lower">{species}</span>
        </p>
        <p className="detail__text--status">
          <span className="detail__span">Status:</span> <span className="detail__lower">{status}</span>
        </p>
        <p className="detail__text--origin">
          <span className="detail__span">Origin:</span> {origin}
        </p>
        <p className="detail__text--episodes">
          <span className="detail__span">Episodes:</span> {episodes}
        </p>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  species: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
};

export default CharacterDetail;
