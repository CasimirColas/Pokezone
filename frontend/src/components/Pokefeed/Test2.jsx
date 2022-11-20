import React from "react";
import Proptypes from "prop-types";
import LevelUp from "./LevelUp";

function Test2({ nextPage, name, image }) {
  return (
    <div className="page2">
      <div className="pokemon-infos">
        <img className="pokemon-img" src={image} alt={name} />
        <LevelUp />
      </div>
      <p className="pokemon-infos-txt">
        {name} has evolved in {/* pokeevo.name */}
      </p>
      <button className="statsbutton" type="submit" onClick={nextPage}>
        Go to stats
      </button>
    </div>
  );
}

export default Test2;

Test2.propTypes = {
  nextPage: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};
