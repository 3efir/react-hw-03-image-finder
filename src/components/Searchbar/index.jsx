import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import SearchForm from './SearchForm';

const Searchbar = ({ onSearchFormSubmit }) => (
  <header className="Searchbar">
    <SearchForm
      onSearchFormSubmit={onSearchFormSubmit}
    />
  </header>
);

Searchbar.propTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
