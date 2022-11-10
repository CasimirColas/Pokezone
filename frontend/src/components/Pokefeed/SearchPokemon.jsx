import { useState, useEffect } from "react";
import "./Pokefeed.css";
import axios from "axios";
import PokemonChosen from "./PokemonChosen";
import PokemonName from "./PokemonName";
import PokemonCard from "./PokemonCard";

function SearchPokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState();
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (pokemonName) {
          setPokemons([]);
          setCurrentPokemon(response.data);
          setStats({
            name: pokemonName,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            specialattack: response.data.stats[3].base_stat,
            specialdefense: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat,
            type: response.data.types[0].type.name,
          });
        } else {
          setPokemons();
        }
      })
      .catch((error) => {
        return `${error}`;
      });
  }, [pokemonName]);

  return (
    <div className="search-div">
      <form className="pokemon-search">
        <input
          type="text"
          name="search"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </form>
      {pokemons && <PokemonChosen ourpokemons={pokemons.results} />}
      {currentPokemon && <PokemonName displayedPokemon={currentPokemon} />}
      <PokemonCard pokemonstat={stats} />
    </div>
  );
}

export default SearchPokemon;
