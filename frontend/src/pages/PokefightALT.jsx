import React, { useState, useEffect } from "react";
import axios from "axios";
import Attack from "../components/Pokefight/Attack";
import FightingPoke from "../components/Pokefight/FightingPoke";
import pokeVS from "../assets/pokeVS.png";

function PokefightALT() {
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
  async function isDamage(nameM) {
    const result = await axios.get(`https://pokeapi.co/api/v2/move/${nameM}`);
    const moveData = result.data;
    if (
      moveData.damage_class.name === "physical" ||
      moveData.damage_class.name === "special"
    ) {
      return true;
    }
    return false;
  }
  async function getAttack(nameM) {
    const result = await axios.get(`https://pokeapi.co/api/v2/move/${nameM}`);
    const moveData = result.data;
    const attack = {
      name: nameM,
      accuracy: moveData.accuracy,
      power: moveData.power,
      type: moveData.type.name,
    };
    return attack;
  }
  async function createPoke(nameP) {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nameP}`
    );
    const pokedata = await result.data;
    const moveList = pokedata.moves
      .filter((e) => {
        return isDamage(e.name);
      })
      .map((e) => e.name);
    const pokemon = {
      name: nameP,
      image: pokedata.sprites.other["official-artwork"].front_default,
      hp: pokedata.stats[0].base_stat,
      a: pokedata.stats[1].base_stat,
      as: pokedata.stats[3].base_stat,
      d: pokedata.stats[2].base_stat,
      ds: pokedata.stats[4].base_stat,
      speed: pokedata.stats[5].base_stat,
      types: pokedata.types.map((e) => e.type.name),
      color: "",
      attack1: getAttack(randomTab(moveList)),
      attack2: getAttack(randomTab(moveList)),
      attack3: getAttack(randomTab(moveList)),
      attack4: getAttack(randomTab(moveList)),
    };
    return pokemon;
  }
  function randomSet() {
    setMyPoke(createPoke(randomTab(names)));
    setEnmyPoke(createPoke(randomTab(names)));
  }
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((r) => r.data)
      .then((data) => {
        const u = data.results;
        const result = [];
        u.forEach((e) => {
          result.push(e.name);
        });
        setNames(result);
        setMyPoke(createPoke(randomTab(result)));
        setEnmyPoke(createPoke(randomTab(result)));
      });
  }, []);
  if (!myPoke || !enmyPoke) {
    return <>loading...</>;
  }
  return (
    <div className="Pokefight">
      <header>Pokeheader</header>
      <button type="submit" onClick={randomSet}>
        New set
      </button>
      <div className="versusbar">
        <h3>{myPoke.name}</h3>
        <img src={pokeVS} alt="not found" />
        <h3>{enmyPoke.name}</h3>
      </div>
      <div className="terrain">
        <FightingPoke player={0} pokemon={myPoke} />
        <FightingPoke player={1} pokemon={enmyPoke} />
      </div>
      <div className="abilities">
        <Attack pos={1} info={myPoke.attack1} />
        <Attack pos={2} info={myPoke.attack2} />
        <Attack pos={3} info={myPoke.attack3} />
        <Attack pos={4} info={myPoke.attack4} />
      </div>
      <footer>Pokefooter</footer>
    </div>
  );
}

export default PokefightALT;
