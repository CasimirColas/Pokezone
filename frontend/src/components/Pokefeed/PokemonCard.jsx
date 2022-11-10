/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "./Pokefeed.css";
import Proptypes from "prop-types";
import ValuesUp from "./ValuesUp";

function PokemonCard({ pokemonstat }) {
  return (
    <div>
      <table className="pokemon-table">
        <tr>
          <td />
          <th scope="col" className="">
            Pokémon de base
          </th>
          <th scope="col" className="" />
          <th scope="col" className="">
            Pokémon évolué
          </th>
        </tr>
        <tr>
          <th scope="row">Points de vie</th>
          <td>{pokemonstat.hp}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque</th>
          <td>{pokemonstat.attack}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td>{pokemonstat.speed}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque Spéciale</th>
          <td>{pokemonstat.specialattack}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Defense Spéciale</th>
          <td>{pokemonstat.specialdefense}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
      </table>
    </div>
  );
}

export default PokemonCard;

PokemonCard.defaultProps = {
  pokemonstat: "texte",
};

PokemonCard.propTypes = {
  pokemonstat: Proptypes.string,
};
