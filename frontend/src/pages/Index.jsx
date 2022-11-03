import React from "react";
import Pokemon2 from "../assets/images/Pokemon2.png";
import "../components/css/home.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "animate.css";

function Index() {
  return (
    <div className="pokemon">
      <img src={Pokemon2} width="250px" height="170px" alt="pokemon" />
      <div className="animate__animated animate__zoomInDown animate__delay-0.5s">
        <p>PokeZone</p>
      </div>

      <section>
        <article className="pokecatch">
          <div>PokeCatch</div>
          <div className="box">Play to catch some Pokemons !</div>
        </article>

        <article className="pokefight">
          <div className="box2">Play to fight the Pokemons !</div>
          <div>PokeFight</div>
        </article>

        <article className="pokefeed">
          <div>PokeFeed</div>
          <div className="box">Feed the Pokemons to evolve them!</div>
        </article>

        <article className="pokedex">
          <div className="box2">Search any Pokemons you want!</div>
          <div>PokeDex</div>
        </article>
      </section>
    </div>
  );
}

export default Index;
