import React from "react";
import LevelUp from "./LevelUp";

function Test2({ nextPage, name, image }) {
  return (
    <div className="page2">
      <LevelUp />
      <img className="pokemon-img" src={image} alt={name} />
      <p>
        {name} has evolved in {/* pokeevo.name */}
      </p>
      <button type="submit" onClick={nextPage}>
        Go to stats
      </button>
    </div>
  );
}

export default Test2;
