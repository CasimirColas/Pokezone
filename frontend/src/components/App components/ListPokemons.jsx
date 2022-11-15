import React from "react";
import PropTypes from "prop-types";
import "../css/listpokemons.css";

function ListPokemon({ ourPokemons }) {
  return (
    <div className="pokemonlist">
      {ourPokemons &&
        ourPokemons.map((pokemon) => {
          return <h2 key={pokemon.name}>{pokemon.name}</h2>;
        })}
    </div>
  );
}

export default ListPokemon;

ListPokemon.propTypes = {
  ourPokemons: PropTypes.arrayOf.isRequired,
};
