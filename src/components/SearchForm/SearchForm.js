import React from "react";
import PropTypes from "prop-types";
import "../SearchForm/SearchForm.css";

function SearchForm({ handleInput, handleFormSubmit, imgName }) {
  return (
    <form className="SearchForm" onSubmit={handleFormSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        value={imgName}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleInput}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  imgName: PropTypes.string.isRequired,
};

export default SearchForm;
