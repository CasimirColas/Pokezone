import React, { useState, useEffect } from "react";
import axios from "axios";
import Attack from "../components/Pokefight/Attack";
import FightingPoke from "../components/Pokefight/FightingPoke";
import pokeVS from "../assets/pokeVS.png";

function Pokefight() {
  const [names, setNames] = useState();
  const [myPoke, setMyPoke] = useState();
  const [enmyPoke, setEnmyPoke] = useState();
  function randomTab(tab) {
    if (!tab) {
      return tab;
    }
    const nb = Math.floor(Math.random() * tab.length);
    return tab[nb];
  }
  function createPokemon(nameP) {
    const pokemon = {
      name: nameP,
      ability: "test",
    };
    return pokemon;
  }
  function randomSet() {
    setMyPoke(createPokemon(randomTab(names)));
    setEnmyPoke(createPokemon(randomTab(names)));
  }
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => response.data)
      .then((data) => {
        const u = data.results;
        const result = [];
        u.forEach((e) => {
          result.push(e.name);
        });
        setNames(result);
        setMyPoke(createPokemon(randomTab(result)));
        setEnmyPoke(createPokemon(randomTab(result)));
      });
  }, []);
  // setMyPoke(createPokemon(randomTab(names)))
  // setEnmyPoke(createPokemon(randomTab(names)))
  console.warn(myPoke, enmyPoke);
  return (
    <div className="Pokefight">
      <header>Pokeheader</header>
      <button type="submit" onClick={randomSet}>
        New set
      </button>
      <div className="versusbar">
        <h3>myPoke</h3>
        <img src={pokeVS} alt="not found" />
        <h3>enmyPoke</h3>
      </div>
      <div className="terrain">
        <FightingPoke player={0} info="pokE" />
        <FightingPoke player={1} info="pokA" />
      </div>
      <div className="abilities">
        <Attack pos={1} info="pok1" />
        <Attack pos={2} info="pok1" />
        <Attack pos={3} info="pok1" />
        <Attack pos={4} info="pok1" />
      </div>
      <footer>Pokefooter</footer>
    </div>
  );
}

export default Pokefight;
