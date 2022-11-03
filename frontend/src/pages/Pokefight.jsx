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
  function isDamage(nameM) {
    return axios
      .get(`https://pokeapi.co/api/v2/move/${nameM}`)
      .then((response) => response.data)
      .then((data) => {
        const moveData = data;
        if (
          moveData.damage_class.name === "physical" ||
          moveData.damage_class.name === "special"
        ) {
          return nameM;
        }
        return null;
      });
  }
  // function getRandomAttack(nameM) {
  //   return axios
  //     .get(`https://pokeapi.co/api/v2/move/${nameM}`)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       const moveData = data;
  //       const attack = {
  //         accuracy: moveData.accuracy,
  //         power: moveData.power,
  //         type: moveData.type.name,
  //       };
  //       return attack;
  //     });
  // }
  function createPoke(nameP) {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameP}`)
      .then((r) => r.data)
      .then((data) => {
        const pokedata = data;
        const moveList = [];
        pokedata.moves.forEach((e) => {
          isDamage(e.move.name).then((r) => {
            if (r) {
              moveList.push(r);
            }
          });
        });
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
          attack1: "1",
          attack2: "2",
          attack3: "3",
          attack4: "4",
        };
        return pokemon;
      });
  }
  function randomSet() {
    createPoke(randomTab(names)).then((r) => setMyPoke(r));
    createPoke(randomTab(names)).then((r) => setEnmyPoke(r));
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
        createPoke(randomTab(result)).then((r) => setMyPoke(r));
        createPoke(randomTab(result)).then((r) => setEnmyPoke(r));
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

export default Pokefight;
