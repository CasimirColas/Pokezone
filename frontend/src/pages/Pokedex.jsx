import React from "react";
import "../components/css/pokedex.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "animate.css";

function PokeDex() {
  return (
    <body>
      <div className="animate__animated animate__backInUp">
        <article className="pokeup" />
      </div>
      <div className="animate__animated animate__backInDown">
        <article className="pokedown" />
      </div>
      <div>
        <article className="smallBall" />
      </div>
    </body>
  );
}

export default PokeDex;
