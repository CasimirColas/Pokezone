/* eslint-disable import/no-unresolved */
import React from "react";
import Axios from "axios";

import SearchPokemon from "@components/Pokefeed/SearchPokemon";
import Pokemonchosen from "@components/Pokefeed/PokemonChosen";
import Berries from "@components/Pokefeed/Berries";
import EvolutionProgress from "@components/Pokefeed/EvolutionProgress";
import LevelUp from "@components/Pokefeed/LevelUp";
import PokemonEvolved from "@components/Pokefeed/PokemonEvolved";
import PokemonCard from "@components/Pokefeed/PokemonCard";
import NextEvolution from "@components/Pokefeed/NextEvolution";
import NextPokemon from "@components/Pokefeed/NextPokemon";
import PokemonName from "@components/Pokefeed/PokemonName";

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [newPokemon, setNewPokemon] = React.useState("");

  const getPokemonInfo = () => {
    axios
      .get(`https://pokeapi.co/api/v2/item`)
      .then((response) => response.data)
      .then((data) => {
        setUserInfo(data.results[0]);
      });
  };

  return (
    <div className="App">
      <SearchPokemon pokemon={newPokemon} setPokemon={setNewPokemon} />
      {pokemons
        .filter((pokemon) => pokemon.includes(newPokemon))
        .map((pokemon) => (
          <p>{pokemon}</p>
        ))}
      <Pokemonchosen />
      <Berries />
      <EvolutionProgress />
      <LevelUp />
      <PokemonEvolved />
      <PokemonName />
      <PokemonCard />
      <NextEvolution />
      <NextPokemon />
    </div>
  );
}

export default App;
