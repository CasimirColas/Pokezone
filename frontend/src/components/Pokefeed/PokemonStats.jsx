/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "../App components/css/Pokefeed.css";

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
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque</th>
          <td />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque Spéciale</th>
          <td />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Defense Spéciale</th>
          <td />
          <td>15</td>
        </tr>
      </table>
    </div>
  );
}

export default PokemonCard;
