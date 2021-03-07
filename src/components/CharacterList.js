import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import NoResults from './NoResults';
import '.././stylesheets/App.scss';

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    const { id } = character;

    return (
      <li className="list__item" key={id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  if (characterElement.length > 0) {
    return (
      <article className="article">
        <ul className="list">{characterElement}</ul>
      </article>
    );
  } else {
    return <NoResults />;
  }
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  id: PropTypes.number,
};

export default CharacterList;
