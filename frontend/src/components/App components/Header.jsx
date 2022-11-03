/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React from "react";
import "./css/navbar.css";
import Pokeball from "../../assets/images/Pokeball.png";
import Ultraball from "../../assets/images/Ultraball.png";

function Header({ goTo0, goTo1, goTo2, goTo3, goTo4, onPage }) {
  return (
    <header>
      <nav className={onPage === 0 ? "navbar-red" : "navbar"}>
        <ul>
          <li>
            <div
              className="pageChange"
              role="button"
              tabIndex={0}
              onClick={goTo3}
            >
              PokeCatch
            </div>
          </li>
          <li>
            <div
              className="pageChange"
              role="button"
              tabIndex={0}
              onClick={goTo1}
            >
              PokeFight
            </div>
          </li>
          <li>
            <div
              className="pageChange"
              onClick={goTo0}
              role="button"
              tabIndex={0}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className="pageChange"
              role="button"
              tabIndex={0}
              onClick={goTo2}
            >
              PokeFeed
            </div>
          </li>
          <li>
            <div
              className="pageChange"
              role="button"
              tabIndex={0}
              onClick={goTo4}
            >
              PokeDex
            </div>
          </li>
        </ul>
      </nav>
      <div className={onPage === 0 ? "ultraball" : "pokeball"}>
        <img
          src={onPage === 0 ? Ultraball : Pokeball}
          alt="pokeball"
          onClick={goTo0}
        />
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
