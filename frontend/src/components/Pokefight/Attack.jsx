import PropTypes from "prop-types";
import React from "react";

function Attack({ pos, info }) {
  return (
    <div className="attack">
      <p>
        {pos} {info}
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
  info: PropTypes.string,
};

export default Attack;
