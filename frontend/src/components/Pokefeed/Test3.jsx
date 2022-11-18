/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import PropTypes from "prop-types";
import ValuesUp from "./ValuesUp";

function Test3({ hp, attack, defense, specialattack, specialdefense, speed }) {
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
          <td>{hp}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque</th>
          <td>{attack}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Défense</th>
          <td>{defense}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Vitesse</th>
          <td>{speed}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Attaque Spéciale</th>
          <td>{specialattack}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">Defense Spéciale</th>
          <td>{specialdefense}</td>
          <ValuesUp />
          <td>15</td>
        </tr>
      </table>
    </div>
  );
}

export default Test3;

Test3.propTypes = {
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  specialattack: PropTypes.number,
  specialdefense: PropTypes.number,
  speed: PropTypes.number,
};
