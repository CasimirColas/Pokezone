/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React from "react";

function Attack({ pos, info, onClick }) {
  const imgtype = `${info.el}.png`;
  return (
    <div
      className={`attack${pos}`}
      role="button"
      tabIndex={-4 - pos}
      onClick={onClick}
    >
      <p>
        {pos} name: {info.name} acc:{info.acc} power:{info.power}
      </p>
      <p>
        type:{info.type} element:{info.el} prio:{info.prio}
      </p>
      <img className="icontype" src={imgtype} alt="something went wrong" />
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
    type: PropTypes.number,
    el: PropTypes.string,
  }),
};

export default Attack;
