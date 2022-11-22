/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/App components/css/Pokefeed.css";
import Test1 from "../components/Pokefeed/Test1";
import Test2 from "../components/Pokefeed/Test2";
import Test3 from "../components/Pokefeed/Test3";

function Pokefeed() {
  const [display, setDisplay] = useState(0);
  const [pokemon, setPokemon] = useState("");
  const [id, setId] = useState();
  const [evol, setEvol] = useState();
  const [api, setApi] = useState();
  const [noEvol, setNoEvol] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setReload(0);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${
          Math.floor(Math.random() * (151 - 1)) + 1
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
        setId(filterPokemon.id);
        setNoEvol(false);
      });
  }, [reload]);

  function nextPage() {
    if (display === 2) {
      setDisplay(0);
      setReload(1);
    } else {
      setDisplay(display + 1);
    }
  }

  const array = [
    1,
    2,
    3,
    "end",
    4,
    5,
    6,
    "end",
    7,
    8,
    9,
    "end",
    10,
    11,
    12,
    "end",
    13,
    14,
    15,
    "end",
    16,
    17,
    18,
    "end",
    19,
    20,
    "end",
    21,
    22,
    "end",
    23,
    24,
    "end",
    25,
    26,
    "end",
    27,
    28,
    "end",
    29,
    30,
    31,
    "end",
    32,
    33,
    34,
    "end",
    35,
    36,
    "end",
    37,
    38,
    "end",
    39,
    40,
    "end",
    41,
    42,
    "end",
    43,
    44,
    45,
    "end",
    46,
    47,
    "end",
    48,
    49,
    "end",
    50,
    51,
    "end",
    52,
    53,
    "end",
    54,
    55,
    "end",
    56,
    57,
    "end",
    58,
    59,
    "end",
    60,
    61,
    62,
    "end",
    63,
    64,
    65,
    "end",
    66,
    67,
    68,
    "end",
    69,
    70,
    71,
    "end",
    72,
    73,
    "end",
    74,
    75,
    76,
    "end",
    77,
    78,
    "end",
    89,
    80,
    "end",
    81,
    82,
    "end",
    83,
    84,
    85,
    "end",
    86,
    87,
    "end",
    88,
    89,
    "end",
    90,
    91,
    "end",
    92,
    93,
    94,
    "end",
    95,
    "end",
    96,
    97,
    "end",
    98,
    99,
    "end",
    100,
    101,
    "end",
    102,
    103,
    "end",
    104,
    105,
    "end",
    106,
    107,
    "end",
    108,
    "end",
    109,
    110,
    "end",
    111,
    112,
    "end",
    113,
    "end",
    114,
    "end",
    115,
    "end",
    116,
    117,
    "end",
    118,
    119,
    "end",
    120,
    121,
    "end",
    122,
    "end",
    123,
    "end",
    124,
    "end",
    125,
    "end",
    126,
    "end",
    127,
    "end",
    128,
    "end",
    129,
    130,
    131,
    "end",
    132,
    133,
    "end",
    134,
    "end",
    135,
    "end",
    136,
    "end",
    137,
    "end",
    138,
    139,
    "end",
    140,
    141,
    142,
    "end",
    143,
    "end",
    144,
    "end",
    145,
    "end",
    146,
    "end",
    147,
    148,
    149,
    "end",
    150,
    151,
    "end",
  ];

  const index = array.indexOf(id);

  useEffect(() => {
    if (index >= 0 && index < array.length - 1) {
      setEvol(array[index + 1]);
    }
  }, [id]);

  useEffect(() => {
    if (typeof evol === "number") {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${evol}`)
        .then((response) => response.data)
        .then((data) => {
          const EvolPokemon = {
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
          setApi(EvolPokemon);
        });
    }
    if (typeof evol === "string") {
      setNoEvol(true);
      setApi("https://pokeapi.co/api/v2/pokemon/");
    }
  }, [evol]);

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
              noEvol={noEvol}
              nextPage={nextPage}
              image={pokemon.img}
              name={pokemon.name}
              imageEvol={api.img}
              nameEvol={api.name}
            />
          </div>
        );
      case 2:
        return (
          <div className="stats">
            <Test3
              nameEvol={api.name}
              statsEvol={api}
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
  return <div className="pokefeed">{onDisplay(display)}</div>;
}

export default Pokefeed;
