import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/searchbar.css";
import Pokeitem from "./Pokeitem";
import PokemonStats from "./PokemonStats";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [displayedPoke, setDisplayedPoke] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isDetailed, setIsDetailed] = useState(false);
  function changeStatus(name) {
    setSearch(null);
    setDisplayedPoke(name);
    setIsDetailed(!isDetailed);
  }
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => response.data.results)
      .then((data) => {
        const filtered = data.map((e) => e.name);
        setPokemons(filtered);
        setFilteredPokemons(filtered);
      });
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((e) => e.includes(search));
    setFilteredPokemons(filtered);
  }, [search]);
  if (!pokemons) {
    return <div>Loading...</div>;
  }

  function display(e) {
    if (e) {
      return (
        <PokemonStats
          nom={displayedPoke}
          onClick={() => {
            changeStatus(undefined);
          }}
        />
      );
    }
    return (
      <div className="pokecards">
        <h4>Search Your Pokemon!</h4>
        <input
          id="search"
          type="search"
          name="search"
          value={search}
          onChange={(f) => setSearch(f.target.value)}
        />
        {filteredPokemons ? (
          <Pokeitem
            nom={filteredPokemons[0]}
            onClick={() => changeStatus(filteredPokemons[0])}
          />
        ) : null}
        {filteredPokemons ? (
          <Pokeitem
            nom={filteredPokemons[1]}
            onClick={() => changeStatus(filteredPokemons[1])}
          />
        ) : null}
        {filteredPokemons ? (
          <Pokeitem
            nom={filteredPokemons[2]}
            onClick={() => changeStatus(filteredPokemons[2])}
          />
        ) : null}
        {filteredPokemons ? (
          <Pokeitem
            nom={filteredPokemons[3]}
            onClick={() => changeStatus(filteredPokemons[3])}
          />
        ) : null}
      </div>
    );
  }
  return <div className="pokedexlist">{display(isDetailed)}</div>;
}

export default SearchBar;
