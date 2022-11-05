import PropTypes from "prop-types";
import React from "react";

function Attack({ pos, info }) {
  return (
    <div className="attack">
      <p>
        {pos} {info.name} {info.accuracy} {info.power} {info.type}
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
    accuracy: PropTypes.number,
    power: PropTypes.number,
    type: PropTypes.number,
  }),
};

export default Attack;
