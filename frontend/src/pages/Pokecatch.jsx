import React, { useEffect, useState } from "react";
import axios from "axios";
import Catch from "../components/PokeCatch/Catch";
import Start from "../components/PokeCatch/Start";
import Stats from "../components/PokeCatch/Stats";
import Inventory from "../components/PokeCatch/Inventory";
import "./css/pokecatch.css";

function Pokecatch() {
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState();
  const [number, setNumber] = useState();
  const [randomBall, setRandomBall] = useState(0);
  const [clic, setClic] = useState();
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);

  /* Ball */

  const balls = [
    {
      id: 3,
      itemName: "Poke Ball",
      description: "Your luck gives you a POKE BALL",
      itemImage: "src/assets/images/poke_ball.png",
    },
    {
      id: 2,
      itemName: "Lune Ball",
      description: "Your luck gives you a LUNE BALL",
      itemImage: "src/assets/images/lune_ball.png",
    },
    {
      id: 1,
      itemName: "Master Ball",
      description: "Your luck gives you a MASTER BALL",
      itemImage: "src/assets/images/master_ball.png",
    },
  ];

  /* Pokemon aleatoire */

  useEffect(() => {
    const min = 1;
    const max = 151;

    setNumber(Math.floor(Math.random() * (max - min)) + min);

    /* Balls aleatoire */

    setRandomBall(balls[Math.floor(Math.random() * balls.length)]);

    /* Clic on balls */

    const low = 1;
    const top = 15;
    setClic(Math.floor(Math.random() * (top - low)) + low);
  }, []);

  /* Appel de l'API */

  useEffect(() => {
    if (number) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => response.data)
        .then((response) => {
          setData(response);
        });
    }
  }, [number]);

  if (!data) {
    return <> </>;
  }

  /* Switch des composants parents */

  function displayed(p) {
    switch (p) {
      case 0:
        return (
          <Start
            setProgress={setProgress}
            randomBall
            name={data.name}
            setNumber={number}
            src={data.sprites.other["official-artwork"].front_default}
            ball={randomBall}
            first={first}
          />
        );
      case 1:
        return (
          <Catch
            setProgress={setProgress}
            ball={randomBall}
            clic={clic}
            first={first}
          />
        );
      case 2:
        return (
          <Stats
            setNumber={setNumber}
            setProgress={setProgress}
            first={first}
            setFirst={setFirst}
            second={second}
            setSecond={setSecond}
            third={third}
            setThird={setThird}
            fourth={fourth}
            setFourth={setFourth}
            name={data.name}
            src={data.sprites.other["official-artwork"].front_default}
            hp={data.stats["0"].base_stat}
            attack={data.stats["1"].base_stat}
            defense={data.stats["2"].base_stat}
            spattack={data.stats["3"].base_stat}
            spdefense={data.stats["4"].base_stat}
            speed={data.stats["5"].base_stat}
            weight={data.weight}
          />
        );
      default:
        return <Start />;
    }
  }

  return (
    <div>
      <Inventory first={first} second={second} third={third} fourth={fourth} />
      {displayed(progress)}
    </div>
  );
}

export default Pokecatch;
