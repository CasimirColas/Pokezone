/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import "./css/navbar.css";
import Pokeball from "../assets/images/Pokeball.png";
import Ultraball from "../assets/images/Ultraball.png";

function Navbar({ path, setMenu }) {
  const handleClick = (el) => {
    setMenu(el);
  };

  return (
    <header>
      <nav className={path === "home" ? "navbar-red" : "navbar"}>
        <ul>
          <li>
            <a href="#" onClick={() => handleClick("pokecatch")}>
              PokeCatch
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick("pokefight")}>
              PokeFight
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick("home")} className="home">
              Home{" "}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick("pokefeed")}>
              PokeFeed
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick("pokedex")}>
              PokeDex
            </a>
          </li>
        </ul>
      </nav>
      <div className={path === "home" ? "ultraball" : "pokeball"}>
        <img src={path === "home" ? Ultraball : Pokeball} alt="pokeball" />
      </div>
    </header>
  );
}

export default Navbar;

Navbar.defaultProps = { path: "", setMenu: "" };

Navbar.propTypes = {
  setMenu: PropTypes.string,
  path: PropTypes.string,
};
