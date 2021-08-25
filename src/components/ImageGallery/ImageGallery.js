import React, { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    imgCards: null,
    error: null,
    status: Status.IDLE,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=22260377-843feab13a68cee38d30608c2&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((imgCards) => {
          this.setState({
            imgCards,
          });
        });
    }
  }

  render() {
    if (this.state.imgCards) {
      return (
        <ul className="ImageGallery">
          {this.state.imgCards.hits.map(
            ({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageUR={largeImageURL}
              />
            )
          )}
        </ul>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ImageGallery;
