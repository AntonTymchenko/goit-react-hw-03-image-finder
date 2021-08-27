import React from "react";
import "./LoadMoreButton.css";
import PropTypes from "prop-types";

function LoadMoreButton({ handleLoadMoreButton }) {
  return (
    <button
      type="button"
      className="Button"
      onClick={() => handleLoadMoreButton()}
    >
      Load more
    </button>
  );
}

LoadMoreButton.propTypes = {
  handleLoadMoreButton: PropTypes.func.isRequired,
};

export default LoadMoreButton;
