/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import Proptypes from "prop-types";

function Test3({
  name,
  hp,
  attack,
  defense,
  specialattack,
  specialdefense,
  speed,
  nextPage,
  nameEvol,
  statsEvol,
  imageEvol,
  noEvol,
}) {
  return (
    <div>
      <p className="pokemon-name">Pokémon evolution</p>
      <div>{noEvol ? "no evolution" : <img src={imageEvol} alt="" />}</div>
      <section className="stats-grid">
        <div className="card emptycard" />
        <div className="card hpcard">Health Values</div>
        <div className="card attackcard">Attack</div>
        <div className="card defensecard">Defense</div>
        <div className="card speedcard">Speed</div>
        <div className="card specialattackcard">Special Attack</div>
        <div className="card specialdefensecard">Special Defense</div>
        <div className="card oldpokecard">{name}</div>
        <div className="card">{hp}</div>
        <div className="card">{attack}</div>
        <div className="card">{defense}</div>
        <div className="card">{speed}</div>
        <div className="card">{specialattack}</div>
        <div className="card">{specialdefense}</div>
        <div className="card emptycard2" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card evopokecard">{nameEvol}</div>
        <div className="card">{statsEvol.hp}</div>
        <div className="card">{statsEvol.attack}</div>
        <div className="card">{statsEvol.defense}</div>
        <div className="card">{statsEvol.speed}</div>
        <div className="card">{statsEvol.specialattack}</div>
        <div className="card lastcard">{statsEvol.specialdefense}</div>
      </section>
      <button className="statsbutton" type="submit" onClick={nextPage}>
        Play again
      </button>
    </div>
  );
}

export default Test3;

Test3.propTypes = {
  nextPage: Proptypes.number,
  name: Proptypes.string,
  hp: Proptypes.number,
  attack: Proptypes.number,
  defense: Proptypes.number,
  specialattack: Proptypes.number,
  specialdefense: Proptypes.number,
  speed: Proptypes.number,
  nameEvol: Proptypes.string,
  statsEvol: Proptypes.number,
  imageEvol: Proptypes.string.isRequired,
  noEvol: Proptypes.bool.isRequired,
};
