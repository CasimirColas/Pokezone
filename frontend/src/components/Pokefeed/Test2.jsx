import React from "react";
import Proptypes from "prop-types";
import LevelUp from "./LevelUp";

function Test2({ nextPage, name, image, imageEvol, nameEvol, noEvol }) {
  return (
    <div>
      <div className="page2">
        <div className="pokemon-infos-init">
          <img className="pokemon-img" src={image} alt={name} />
        </div>
        <LevelUp />
        <div className="pokemon-info-box">
          {noEvol ? (
            <p className="pokemon-infos-txt2">{name} has no evolution</p>
          ) : (
            <div className="pokemon-infos-evol">
              {" "}
              <img className="pokemon-img" src={imageEvol} alt={nameEvol} />
              <p className="pokemon-infos-txt2">
                {name} has evolved in {nameEvol}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="statsbutton-box">
        <button className="statsbutton" type="submit" onClick={nextPage}>
          Go to stats
        </button>
      </div>
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
