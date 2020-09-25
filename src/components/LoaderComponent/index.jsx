import React from 'react';
import Loader from 'react-loader-spinner';
import './styles.scss';

const LoaderComponent = () => (
  <div className="loader-wrapper">
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={0}
    />
  </div>
);

export default LoaderComponent;
