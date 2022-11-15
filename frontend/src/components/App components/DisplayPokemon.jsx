import React from "react";
import PropTypes from "prop-types";
import "../css/displaypokemon.css";

function DisplayPokemon({ displayedPokemons }) {
  return (
    <div className="pokemonImage">
      <img
        src={displayedPokemons.sprites.other.dream_world.front_default}
        alt={displayedPokemons.name}
      />
      <p>{displayedPokemons.name}</p>
    </div>
  );
}

export default DisplayPokemon;

DisplayPokemon.defaultProps = {
  displayedPokemons: "a pokemon",
};

DisplayPokemon.propTypes = {
  displayedPokemons: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
  }),
};
