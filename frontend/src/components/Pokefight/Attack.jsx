import PropTypes from "prop-types";
import React from "react";

function Attack({ pos, info }) {
  return (
    <div className="attack">
      <p>
        {pos} name: {info.name} acc:{info.acc} power:{info.power}
      </p>
      <p>
        type:{info.type} element:{info.el} prio:{info.prio}
      </p>
    </div>
  );
}
Attack.defaultProps = {
  pos: 1,
  info: "a pokemon",
};

Attack.propTypes = {
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
