import { useState, useEffect } from "react";
import axios from "axios";
import "../components/App components/css/Pokefeed.css";
import Test1 from "../components/Pokefeed/Test1";
import Test2 from "../components/Pokefeed/Test2";
import Test3 from "../components/Pokefeed/Test3";

function Pokefeed() {
  const [display, setDisplay] = useState(0);
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1
        }`
      )
      .then((response) => response.data)
      .then((data) => {
        const filterPokemon = {
          id: data.id,
          name: data.name,
          species: data.species.name,
          img: data.sprites.other.dream_world.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialattack: data.stats[3].base_stat,
          specialdefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          type: data.types[0].type.name,
        };
        setPokemon(filterPokemon);
      });
  }, []);

  function nextPage() {
    if (display === 2) {
      setDisplay(0);
    } else {
      setDisplay(display + 1);
    }
  }

  function onDisplay(state) {
    switch (state) {
      case 0:
        return (
          <div className="feeding">
            <Test1
              nextPage={nextPage}
              image={pokemon.img}
              name={pokemon.name}
            />
          </div>
        );
      case 1:
        return (
          <div className="evolution">
            <Test2
              nextPage={nextPage}
              image={pokemon.img}
              name={pokemon.name}
            />
          </div>
        );
      case 2:
        return (
          <div className="stats">
            <Test3
              nextPage={nextPage}
              name={pokemon.name}
              hp={pokemon.hp}
              attack={pokemon.attack}
              defense={pokemon.defense}
              specialattack={pokemon.specialattack}
              specialdefense={pokemon.specialdefense}
              speed={pokemon.speed}
            />
          </div>
        );
      default:
        return <div className="error">Error</div>;
    }
  }
  console.warn(pokemon);
  return <div className="pokefeed">{onDisplay(display)}</div>;
}

export default Pokefeed;
