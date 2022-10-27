import React, { useState, useEffect } from "react";
import axios from "axios";
import Attack from "../components/Pokefight/Attack";
import FightingPoke from "../components/Pokefight/FightingPoke";
import pokeVS from "../assets/pokeVS.png";

function Pokefight() {
  const [names, setNames] = useState();
  function randomTab(tab) {
    if (!tab) {
      return tab;
    }
    const nb = Math.floor(Math.random() * tab.length);
    return tab[nb];
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
      });
  }, []);
  return (
    <div className="Pokefight">
      <header>Pokeheader</header>
      <div className="versusbar">
        <h1>{randomTab(names)}</h1>
        <h3>Name1</h3>
        <img src={pokeVS} alt="not found" />
        <h3>Name2</h3>
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
