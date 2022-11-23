import React from "react";
import "./css/pokedex.css";
import PokeDown from "../assets/images/PokeDown.png";
import PokeUp from "../assets/images/PokeUp.png";
import SearchBar from "../components/Pokedex/SearchBar";
// eslint-disable-next-line import/no-extraneous-dependencies
// import "animate.css";

function Pokedex() {
  return (
    <div className="container">
      <div className="top_pokeball_parent">
        <img
          src={PokeUp}
          className="pokeup animate__animated animate__slideInUp animate__delay-0.5s"
          alt="pokeup"
        />
      </div>
      <div className="pokeListBack" />
      <SearchBar />
      <div className="bottom_pokeball_parent">
        <img
          src={PokeDown}
          className="pokedown animate__animated animate__slideInDown animate__delay-0.5s"
          alt="pokedown"
        />
      </div>
    </div>
  );
}

export default Pokedex;
