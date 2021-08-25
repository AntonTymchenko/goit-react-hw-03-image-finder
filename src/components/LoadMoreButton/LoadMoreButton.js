import React from "react";
import "./LoadMoreButton.css";

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});

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
