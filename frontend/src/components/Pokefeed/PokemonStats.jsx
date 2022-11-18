/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "../App components/css/Pokefeed.css";
import ValuesUp from "./ValuesUp";

function PokemonCard() {
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
          <td />
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque</th>
          <td />
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td />
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque Spéciale</th>
          <td />
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Defense Spéciale</th>
          <td />
          <ValuesUp />
          <td>15</td>
        </tr>
      </table>
    </div>
  );
}

export default PokemonCard;
