import React from "react";
import "./Pokefeed.css";
import PokemonName from "./PokemonName";
import PokemonEvolution from "./PokemonEvolution";

function NextPokemon() {
  return (
    <div className="next-pokemon">
      <PokemonName />
      <PokemonEvolution />
    </div>
  );
}

export default NextPokemon;
