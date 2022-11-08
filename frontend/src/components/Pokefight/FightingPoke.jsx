import PropTypes from "prop-types";
import React from "react";

function FightingPoke({ player, pokemon }) {
  return (
    <div className={`pokemon${player}`}>
      <h4>{pokemon.name}</h4>
      <p>{player}</p>
      <img src={pokemon.image} alt="not found" />
    </div>
  );
}

FightingPoke.defaultProps = {
  player: 1,
  pokemon: "a pokemon",
};

FightingPoke.propTypes = {
  player: PropTypes.number,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    hp: PropTypes.number,
    a: PropTypes.number,
    as: PropTypes.number,
    d: PropTypes.number,
    ds: PropTypes.number,
    speed: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
    attack1: PropTypes.string,
    attack2: PropTypes.string,
    attack3: PropTypes.string,
    attack4: PropTypes.string,
  }),
};

export default FightingPoke;
