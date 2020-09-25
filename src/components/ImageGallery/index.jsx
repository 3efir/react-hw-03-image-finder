import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onSelectImage }) => (
  <ul className="ImageGallery">
    {images.map((item) => (
      <ImageGalleryItem
        key={item.id}
        webformatURL={item.webformatURL}
        alt={item.tags}
        id={item.id}
        onSelectImage={onSelectImage}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGallery;
