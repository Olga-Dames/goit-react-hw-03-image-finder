import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ items, openModal}) => (
  <>
    {items.map(({ id, webformatURL, tags, largeImageURL }) => (
      <Item key={id} onClick={() => openModal(largeImageURL)}>
        <Image src={webformatURL} alt={tags} />
      </Item>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
