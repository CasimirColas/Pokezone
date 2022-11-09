import PropTypes from "prop-types";
import React from "react";

function FightingPoke({ player, baseHP, hp, name, image }) {
  function hpcolor(num) {
    if (num > 50) {
      return "#00ff00";
    }
    if (num > 20) {
      return "#ffff00";
    }
    if (num > 0) {
      return "#cc0000";
    }
    return "none";
  }
  const currenthp = {
    backgroundColor: hpcolor(Math.floor((hp / baseHP) * 100)),
    width: `${Math.floor((hp / baseHP) * 100)}%`,
  };
  return (
    <div className={`pokemon${player}`}>
      <h4>{name}</h4>
      <div className="hpbar">
        <div className="currenthp" style={currenthp}>
          <p>{hp}</p>
        </div>
      </div>
      <img className="imgPoke" src={image} alt="not found" />
    </div>
  );
}

FightingPoke.defaultProps = {
  player: 1,
  baseHP: 100,
  hp: 100,
  name: "placeholder name",
  image: "placeholder image",
};

FightingPoke.propTypes = {
  player: PropTypes.number,
  baseHP: PropTypes.number,
  hp: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default FightingPoke;
