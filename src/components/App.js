// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import GetDataFromApi from '../services/GetDataFromApi';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NoResults from './NoResults';

import '.././stylesheets/App.scss';

function App() {
  // hooks
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    GetDataFromApi().then((data) => setCharacters(data));
  }, []);

  // handler function for search
  const handleFilter = (input) => {
    if (input.key === 'name') {
      setName(input.value);
    } else if (input.key === 'species') {
      setSpecies(input.value);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      return character.species.toLowerCase().includes(species.toLowerCase());
    });

  // console.log(filterCharacters);

  // function to render character detailed card
  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);

    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    if (selectedCharacter) {
      console.log(selectedCharacter);
      return <CharacterDetail character={selectedCharacter} />;
    } else {
      //Create component for no result"
      return <NoResults />;
    }
  };

  return (
    <div className="App App-header">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters name={name} species={species} handleFilter={handleFilter} />
          <CharacterList characters={filterCharacters} />
          <Footer />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
}

export default App;
