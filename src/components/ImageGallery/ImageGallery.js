import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import "./ImageGallery.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast } from "react-toastify";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    imgCards: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=22260377-843feab13a68cee38d30608c2&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({
              status: Status.IDLE,
            });
            return toast.error("Не таких картинок !!!");
          }
          this.setState({
            imgCards: [...hits],
            status: Status.RESOLVED,
          });
        })
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }
  handleLoadMoreButton = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      // status: Status.PENDING,
    }));

    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=22260377-843feab13a68cee38d30608c2&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then(({ hits }) => {
          this.setState({
            imgCards: [...this.state.imgCards, ...hits],
            status: Status.RESOLVED,
          });
        })
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }, 0);
  };

  render() {
    const { status, imgCards, error } = this.state;

    if (status === "idle") {
      return null;
    }
    if (status === "pending") {
      return (
        <div className="loader">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        </div>
      );
    }
    if (status === "resolved") {
      return (
        <>
          <ul className="ImageGallery">
            {imgCards.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                alt={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={this.props.onCLickImg}
              />
            ))}
          </ul>
          <LoadMoreButton handleLoadMoreButton={this.handleLoadMoreButton} />
        </>
      );
    }
    if (status === "rejected") {
      return <h2>{error.message}</h2>;
    }
  }
}

export default ImageGallery;
