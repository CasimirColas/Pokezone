import PropTypes from "prop-types";
import React from "react";

function Header({ goTo0, goTo1, goTo2, goTo3, goTo4, onPage }) {
  return (
    <header>
      <div className="Navigator">
        <button type="submit" onClick={goTo0}>
          Index
        </button>
        <button type="submit" onClick={goTo1}>
          Pokefigh
        </button>
        <button type="submit" onClick={goTo2}>
          Pokecatch
        </button>
        <button type="submit" onClick={goTo3}>
          Pokefeed
        </button>
        <button type="submit" onClick={goTo4}>
          Pokedex
        </button>
        <p>{onPage}</p>
      </div>
    </header>
  );
}

export default Header;

Header.defaultProps = {
  onPage: 0,
};

Header.propTypes = {
  goTo0: PropTypes.func.isRequired,
  goTo1: PropTypes.func.isRequired,
  goTo2: PropTypes.func.isRequired,
  goTo3: PropTypes.func.isRequired,
  goTo4: PropTypes.func.isRequired,
  onPage: PropTypes.number,
};
