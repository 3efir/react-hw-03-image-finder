import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ onLoadMore }) => (
  <div className="Button-wrapper">
    <button className="Button" onClick={onLoadMore}>Load More</button>
  </div>
);

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
