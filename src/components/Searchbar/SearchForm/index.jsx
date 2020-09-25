import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SearchForm extends Component {
  state = {
    searchText: '',
  }

  handleSearchFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSearchFormSubmit(this.state.searchText)
  }

  handleInputChange = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSearchFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchText}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
