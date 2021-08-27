import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import "./ImageGallery.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast } from "react-toastify";
import fetchPicture from "../servece/photo-api";

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
    scrollStatus: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      const { page } = this.state;

      fetchPicture(nextName, page)
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
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage !== nextPage) {
      fetchPicture(nextName, nextPage)
        .then(({ hits }) => {
          this.setState({
            imgCards: [...this.state.imgCards, ...hits],
            status: Status.RESOLVED,
          });
        })
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }
  handleLoadMoreButton = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      scrollStatus: true,
    }));
  };
  changeStatusScrooll = (obj) => {
    const { onCLickImg } = this.props;
    onCLickImg(obj);
    this.setState({
      scrollStatus: false,
    });
  };

  render() {
    const { status, imgCards, error, scrollStatus } = this.state;

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
                onClick={this.changeStatusScrooll}
                scrollStatus={scrollStatus}
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
ImageGallery.propType = {
  img: PropTypes.string.isRequired,
  onCLickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
