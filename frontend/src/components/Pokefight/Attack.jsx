/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React from "react";
import colors from "../../assets/tables/pokemonColorPicker";

function Attack({ pos, info, onClick }) {
  const colorMatch = {
    backgroundColor: `rgba(${colors[`${info.el}`].rgb}, 0.5)`,
    borderColor: `#${colors[`${info.el}`].hex}`,
  };
  return (
    <div
      className={`attack${pos}`}
      role="button"
      tabIndex={-4 - pos}
      onClick={onClick}
      style={colorMatch}
    >
      <p>
        {pos} name: {info.name} acc:{info.acc} power:{info.power}
        type:{info.type}
      </p>
      <img
        className="icontype"
        src={`${info.el}.png`}
        alt="something went wrong"
      />
    </div>
  );
}
Attack.defaultProps = {
  pos: 1,
  info: "a pokemon",
};

Attack.propTypes = {
  onClick: PropTypes.func.isRequired,
  pos: PropTypes.number,
  info: PropTypes.shape({
    name: PropTypes.string,
    prio: PropTypes.number,
    acc: PropTypes.number,
    power: PropTypes.number,
    type: PropTypes.string,
    el: PropTypes.string,
  }),
};

export default Attack;
