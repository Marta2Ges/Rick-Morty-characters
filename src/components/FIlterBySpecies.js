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
        Especie:
      </label>
      <input className="filter__list--input" type="text" name="species" id="species" onChange={handleChange} />
    </div>
  );
};

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterBySpecies;
