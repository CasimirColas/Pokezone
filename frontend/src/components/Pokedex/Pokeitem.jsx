import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import colors from "../../assets/tables/pokemonColorPicker";

function Pokeitem({ nom, onClick }) {
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
  if (!pokemon || !nom) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <div
      role="button"
      tabIndex={0}
      className="pokeBar"
      onClick={onClick}
      style={{
        backgroundColor: `rgba(${colors[pokemon.types[0].type.name].rgb}, 0.5)`,
        borderColor: `#${colors[pokemon.types[0].type.name].hex}`,
      }}
    >
      <img
        className="pokeimg"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h2>{capitalizeFirst(nom)}</h2>
    </div>
  );
}

export default Pokeitem;

Pokeitem.propTypes = {
  nom: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
