import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../css/pokestats.css";
import colors from "../../assets/tables/pokemonColorPicker";

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
    <div
      className="pokeStats"
      style={{
        backgroundColor: `rgba(${colors[pokemon.types[0].type.name].rgb}, 0.5)`,
        borderColor: `#${colors[pokemon.types[0].type.name].hex}`,
      }}
    >
      <div className="basic_info">
        <button type="submit" onClick={onClick}>
          ←
        </button>
        <img
          className="displaypokeimg"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <h4>{capitalizeFirst(nom)}</h4>

        <div className="poketypes">
          <p
            className="poketype1"
            style={{
              backgroundColor: `rgba(${
                colors[pokemon.types[0].type.name].rgb
              }, 0.5)`,
              borderColor: `#${colors[pokemon.types[0].type.name].hex}`,
            }}
          >
            {pokemon.types[0].type.name}
          </p>
          {pokemon.types[1] ? (
            <p
              className="poketype2"
              style={{
                backgroundColor: `rgba(${
                  colors[pokemon.types[1].type.name].rgb
                }, 0.5)`,
                borderColor: `#${colors[pokemon.types[1].type.name].hex}`,
              }}
            >
              {pokemon.types[1].type.name}
            </p>
          ) : null}
        </div>

        <div className="pokeabilities">
          <p>Abilities : {pokemon.abilities[0].ability.name}</p>
          {pokemon.abilities[1] ? (
            <p>(Hidden : {pokemon.abilities[1].ability.name})</p>
          ) : null}
        </div>
      </div>

      <div
        className="pokemonstats"
        style={{
          backgroundColor: `rgba(${
            colors[pokemon.types[1].type.name].rgb
          }, 0.5)`,
          borderColor: `#${colors[pokemon.types[1].type.name].hex}`,
        }}
      >
        <div className="stats">
          <div className="stats-details">
            <h4>HP : </h4>
            <div className="color-container1">
              <p>{pokemon.stats[0].base_stat}</p>
            </div>
          </div>
          <div className="stats-details">
            <h4>Attack : </h4>
            <div className="color-container2">
              <p> {pokemon.stats[1].base_stat}</p>
            </div>
          </div>

          <div className="stats-details">
            <h4>Defense : </h4>
            <div className="color-container3">
              <p> {pokemon.stats[2].base_stat}</p>
            </div>
          </div>
          <div className="stats-details">
            <h4>Sp-Attack : </h4>
            <div className="color-container4">
              <p> {pokemon.stats[3].base_stat}</p>
            </div>
          </div>

          <div className="stats-details">
            <h4>Sp-Defense : </h4>
            <div className="color-container5">
              <p> {pokemon.stats[4].base_stat}</p>
            </div>
          </div>

          <div className="stats-details">
            <h4>Speed : </h4>
            <div className="color-container6">
              <p>{pokemon.stats[5].base_stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;

PokemonStats.propTypes = {
  nom: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
