import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ImageGalleryItem extends Component {
  handleImageClick = () => {
    this.props.onSelectImage(this.props.id);
  }

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          src={this.props.webformatURL}
          alt={this.props.alt}
          className="ImageGalleryItem-image"
          onClick={this.handleImageClick}
        />
      </li>
    )
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
