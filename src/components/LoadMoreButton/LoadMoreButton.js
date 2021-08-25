import React from "react";
import "./LoadMoreButton.css";

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

export default LoadMoreButton;
