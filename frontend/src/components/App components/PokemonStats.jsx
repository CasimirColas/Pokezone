import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function PokemonStats({ nom, onClick }) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    if (nom) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${nom}`)
        .then((response) => response.data)
        .then((data) => {
          setPokemon(data);
        });
    }
  }, [nom]);
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="pokeStats">
      <button type="submit" onClick={onClick}>
        ←
      </button>
      <img
        className="pokeimg"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h2>{capitalizeFirst(nom)}</h2>
    </div>
  );
}

export default PokemonStats;

PokemonStats.propTypes = {
  nom: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
