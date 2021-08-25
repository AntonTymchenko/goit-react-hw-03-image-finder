import React from "react";
import "./imageGalleryItem.css";

export function ImageGalleryItem({ id, alt, webformatURL, largeImageURL }) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={alt}
        data-imglarge={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
