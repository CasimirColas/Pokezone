/* eslint-disable react/prop-types */
import React from "react";
import "./Pokefeed.css";

function SearchPokemon(props) {
  const { searchPokemon, filteredSearchPokemon } = props;
  return (
    <div>
      <form className="pokemon-search">
        <input
          className="search-field"
          value={searchPokemon}
          type="text"
          placeholder="Choose your Pokemon"
          onChange={(event) => filteredSearchPokemon(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchPokemon;
