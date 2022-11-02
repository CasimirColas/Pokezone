import React from "react";
import "./Pokefeed.css";
import ValuesUp from "./ValuesUp";

function PokemonCard() {
  return (
    <div>
      <table className="pokemon-table">
        <tr>
          <td> </td>
          <th scope="col" className="">
            Pokémon de base
          </th>
          <th className="test"></th>
          <th scope="col" className="">
            Pokémon évolué
          </th>
        </tr>
        <tr>
          <th scope="row">Points de vie</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque Spéciale</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Defense Spéciale</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td>5</td>
          <ValuesUp />
          <td>15</td>
        </tr>
      </table>
    </div>
  );
}

export default PokemonCard;
