import PropTypes from "prop-types";
import React from "react";

function FightingPoke({ player, info }) {
  return (
    <div className="pokemon">
      <p>
        {player} {info}
      </p>
    </div>
  );
}

FightingPoke.defaultProps = {
  player: 1,
  info: "a pokemon",
};

FightingPoke.propTypes = {
  player: PropTypes.number,
  info: PropTypes.string,
};

export default FightingPoke;
