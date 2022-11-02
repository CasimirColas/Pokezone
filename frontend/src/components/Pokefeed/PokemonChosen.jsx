import React from "react";
import "./Pokefeed.css";

function PokemonChosen() {
  return (
    <div className="pokemon-selected">
      <img
        src="src/images/Pichu.png"
        alt="Test OK"
        className="pokemon-selected-img"
      />
      <p className="feed-txt">Click on one berry to feed "pokemon_name"</p>
    </div>
  );
}

export default PokemonChosen;
