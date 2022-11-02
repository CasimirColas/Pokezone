/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import "../css/navbar.css";
import Pokeball from "../../assets/images/Pokeball.png";
import Ultraball from "../../assets/images/Ultraball.png";

function Header({ goTo0, goTo1, goTo2, goTo3, goTo4, onPage }) {
  return (
    <header>
      <nav className={onPage === 0 ? "navbar-red" : "navbar"}>
        <ul>
          <li>
            <a href="#" onClick={goTo3}>
              PokeCatch
            </a>
          </li>
          <li>
            <a href="#" onClick={goTo1}>
              PokeFight
            </a>
          </li>
          <li>
            <a href="#" onClick={goTo0} className="home">
              Home{" "}
            </a>
          </li>
          <li>
            <a href="#" onClick={goTo2}>
              PokeFeed
            </a>
          </li>
          <li>
            <a href="#" onClick={goTo4}>
              PokeDex
            </a>
          </li>
        </ul>
      </nav>
      <div className={onPage === 0 ? "ultraball" : "pokeball"}>
        <img src={onPage === 0 ? Ultraball : Pokeball} alt="pokeball" />
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
