import React, { useState } from "react";
import "./Pokefeed.css";

const [pokemon, useNewPokemon] = useState("");

function SearchPokemon() {
  return (
    <div>
      <form className="pokemon-search">
        <input
          className="search-field"
          value={pokemon}
          type="text"
          placeholder="Choose your Pokemon"
          onChange={(event) => useNewPokemon(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchPokemon;
