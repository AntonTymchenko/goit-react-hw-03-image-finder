import React from "react";
import "./imageGalleryItem.css";

function ImageGalleryItem({ id, alt, webformatURL, largeImageURL, onClick }) {
  const obj = {
    id,
    alt,
    largeImageURL,
  };
  return (
    <li key={id} className="ImageGalleryItem" onClick={() => onClick(obj)}>
      <img
        src={webformatURL}
        alt={alt}
        data-imglarge={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

export default ImageGalleryItem;
