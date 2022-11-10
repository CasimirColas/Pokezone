import React from "react";
import Proptypes from "prop-types";

function PokemonName({ displayedPokemon }) {
  return (
    <div>
      <img
        src={displayedPokemon.sprites.other.dream_world.front_default}
        alt={displayedPokemon.name}
      />
      <p>{displayedPokemon.name}</p>
    </div>
  );
}

export default PokemonName;

PokemonName.defaultProps = {
  displayedPokemon: "texte",
};

PokemonName.propTypes = {
  displayedPokemon: Proptypes.string,
};
