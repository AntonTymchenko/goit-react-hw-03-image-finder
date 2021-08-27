import React from "react";
import PropTypes from "prop-types";
import "./imageGalleryItem.css";

const scroll = () => {
  setTimeout(() => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
};

function ImageGalleryItem({
  id,
  alt,
  webformatURL,
  largeImageURL,
  onClick,
  scrollStatus,
}) {
  const obj = {
    id,
    alt,
    largeImageURL,
  };
  return (
    <li
      key={id}
      className="ImageGalleryItem"
      onClick={() => {
        onClick(obj);
      }}
    >
      <img
        src={webformatURL}
        alt={alt}
        data-imglarge={largeImageURL}
        className="ImageGalleryItem-image"
      />
      {scrollStatus && scroll()}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  scrollStatus: PropTypes.bool.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
