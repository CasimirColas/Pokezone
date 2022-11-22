import React from "react";
import Proptypes from "prop-types";
import LevelUp from "./LevelUp";

function Test2({ nextPage, name, image, imageEvol, nameEvol, noEvol }) {
  return (
    <div className="page2">
      <div className="pokemon-infos">
        <img className="pokemon-img" src={image} alt={name} />
        <LevelUp />
      </div>
      {noEvol ? (
        <p className="pokemon-infos-txt">No evolution</p>
      ) : (
        <div className="pokemon-infos">
          <p className="pokemon-infos-txt">
            {name} has evolved in {nameEvol}
          </p>
          <img className="pokemon-img" src={imageEvol} alt={nameEvol} />
        </div>
      )}
      <button className="statsbutton" type="submit" onClick={nextPage}>
        Go to stats
      </button>
      <div />
    </div>
  );
}

export default Test2;

Test2.propTypes = {
  nextPage: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  imageEvol: Proptypes.string.isRequired,
  nameEvol: Proptypes.string.isRequired,
  noEvol: Proptypes.bool.isRequired,
};
