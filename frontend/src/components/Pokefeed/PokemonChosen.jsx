import React from "react";
import Proptypes from "prop-types";

function PokemonChosen({ ourpokemons }) {
  return (
    <div>
      {ourpokemons &&
        ourpokemons.map((pokemon) => {
          return <h3 key={pokemon.name}>{pokemon.name}</h3>;
        })}
    </div>
  );
}

export default PokemonChosen;

PokemonChosen.defaultProps = {};

PokemonChosen.propTypes = {
  ourpokemons: Proptypes.string,
};
