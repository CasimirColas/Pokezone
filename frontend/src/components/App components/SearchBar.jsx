import React, { useState, useEffect } from "react";
import axios from "axios";
import ListPokemons from "./ListPokemons";
import DisplayPokemons from "./DisplayPokemon";
import "../css/searchbar.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        if (search) {
          setPokemons([]);
          setCurrentPokemon(response.data);
        } else {
          setPokemons(response.data);
        }
      });
  }, [search]);

  return (
    <div className="searchbar">
      <form>
        <p>
          <label htmlFor="search">
            {" "}
            Search Your Pokemon!
            <input
              id="search"
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </p>
        {pokemons && <ListPokemons ourPokemons={pokemons.results} />}
        {currentPokemon && (
          <DisplayPokemons displayedPokemons={currentPokemon} />
        )}
      </form>
    </div>
  );
}

export default SearchBar;
