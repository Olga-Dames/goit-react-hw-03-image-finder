import React from 'react';
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, ...props }) => {
  return (
    <Gallery>
      <ImageGalleryItem items={images} {...props} />
    </Gallery>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

