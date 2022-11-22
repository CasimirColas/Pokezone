import React from "react";
import Proptypes from "prop-types";

function PokemonChosen({ displayedPokemon }) {
  return (
    <div className="pokemon-displayed-bloc">
      <img
        className="pokemon-displayed-img"
        src={displayedPokemon.sprites.other.dream_world.front_default}
        alt={displayedPokemon.name}
      />
      <p className="pokemon-displayed-name ">{displayedPokemon.name}</p>
    </div>
  );
}

export default PokemonChosen;

PokemonChosen.propTypes = {
  displayedPokemon: Proptypes.objectOf.isRequired,
};
