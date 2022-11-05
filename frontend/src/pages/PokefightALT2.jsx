import React, { useState, useEffect } from "react";
import axios from "axios";
import AttackALT from "../components/Pokefight/AttackALT";
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
  async function getListOfNames() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const pokedata = response.data.results;
    const list = [];
    pokedata.forEach((e) => {
      list.push(e.name);
    });
    return list;
  }
  async function isDmg(nameM) {
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
  async function getAttackList(list) {
    const result = [];
    list.forEach(async (e) => {
      const test = await isDmg(e.move.name);
      if (test) {
        result.push(e.move.name);
      }
    });
    return result;
  }
  async function createPoke(nameP, data, aList) {
    console.warn(aList);
    const pokemon = {
      name: nameP,
      image: data.sprites.other["official-artwork"].front_default,
      hp: data.stats[0].base_stat,
      a: data.stats[1].base_stat,
      as: data.stats[3].base_stat,
      d: data.stats[2].base_stat,
      ds: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      types: data.types.map((e) => e.type.name),
      color: "",
      attackList: aList,
    };
    return pokemon;
  }
  async function initiatePoke(nameP) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nameP}`
    );
    const pokedata = response.data;
    const moveList = await getAttackList(pokedata.moves);
    const pokemon = await createPoke(nameP, pokedata, moveList);
    return pokemon;
  }
  async function randomSet() {
    setMyPoke(await initiatePoke(randomTab(names)));
    setEnmyPoke(await initiatePoke(randomTab(names)));
  }
  useEffect(() => {
    const fetchData = async () => {
      const genList = await getListOfNames();
      setNames(genList);
      setMyPoke(await initiatePoke(randomTab(genList)));
      setEnmyPoke(await initiatePoke(randomTab(genList)));
    };

    fetchData().catch(console.error);
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
        <AttackALT pos={1} info={myPoke.attackList} />
        <AttackALT pos={2} info={myPoke.attackList} />
        <AttackALT pos={3} info={myPoke.attackList} />
        <AttackALT pos={4} info={myPoke.attackList} />
      </div>
      <footer>Pokefooter</footer>
    </div>
  );
}

export default PokefightALT;
