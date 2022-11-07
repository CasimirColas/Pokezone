import React from "react";
import PropTypes from "prop-types";
import "./navpokemonappears.css";

function Navpokemonappears({ name, id }) {
  return (
    <div className="generalnavappears">
      <div className="navpokemonappears">
        <div className="textNavpokemonappears">
          A {name} with #ID {id} appears !!!
        </div>
      </div>
    </div>
  );
}

export default Navpokemonappears;

Navpokemonappears.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
