import React from 'react';
import PropTypes from 'prop-types';
import FilterBySpecies from './FIlterBySpecies';
import FilterByName from './FilterByName';
import '.././stylesheets/App.scss';

const Filters = (props) => {
  // prevent submit form
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const { name, species, handleFilter } = props;
  return (
    <section className="filter">
      <h2 className="filter__title">Character!</h2>
      <form className="filter__list" onSubmit={handleForm}>
        <FilterByName name={name} handleFilter={handleFilter} />
        <FilterBySpecies specie={species} handleFilter={handleFilter} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
