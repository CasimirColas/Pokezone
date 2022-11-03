import React from "react";
import "../components/css/pokedex.css";
import PokeDown from "../assets/images/PokeDown.png";
import PokeUp from "../assets/images/PokeUp.png";
// eslint-disable-next-line import/no-extraneous-dependencies
// import "animate.css";

function Pokedex() {
  return (
    <main>
      <div className="top_pokeball_parent">
        <img
          src={PokeUp}
          className="pokeup animate__animated animate__slideInUp animate__delay-0.5s"
          alt="pokeup"
        />
      </div>

      <div className="poke_list_parent">
        <div id="pokedex_back" />
      </div>

      <div className="bottom_pokeball_parent">
        <img
          src={PokeDown}
          className="pokedown animate__animated animate__slideInDown animate__delay-0.5s"
          alt="pokedown"
        />
      </div>
    </main>
  );
}

export default Pokedex;
