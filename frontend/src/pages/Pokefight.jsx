import React from "react";
import Attack from "../components/Pokefight/Attack";
import FightingPoke from "../components/Pokefight/FightingPoke";
import pokeVS from "../assets/pokeVS.png";

function Pokefight() {
  return (
    <div className="Pokefight">
      <header>Pokeheader</header>
      <div className="versusbar">
        <h3>Name1</h3>
        <img src={pokeVS} alt="not found" />
        <h3>Name2</h3>
      </div>
      <div className="terrain">
        <FightingPoke player={0} info="pokE" />
        <FightingPoke player={1} info="pokA" />
      </div>
      <div className="abilities">
        <Attack pos={1} info="pok1" />
        <Attack pos={2} info="pok1" />
        <Attack pos={3} info="pok1" />
        <Attack pos={4} info="pok1" />
      </div>
      <footer>Pokefooter</footer>
    </div>
  );
}

export default Pokefight;
