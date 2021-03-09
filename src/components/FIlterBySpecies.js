import React from 'react';
import PropTypes from 'prop-types';
import '.././stylesheets/App.scss';

const FilterBySpecies = (props) => {
  const { species, handleFilter } = props;

  const handleChange = (ev) => {
    handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="species">
        Specie:
      </label>
      <select
        className="filter__list--input"
        type="text"
        name="species"
        id="species"
        value={species}
        onChange={handleChange}
      >
        <option value="">Choose</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </div>
  );
};

FilterBySpecies.propTypes = {
  species: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterBySpecies;
