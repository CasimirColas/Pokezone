import React from "react";
import Pokemon2 from "../assets/images/Pokemon2.png";
import "../components/css/home.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "animate.css";

function Index() {
  return (
    <div className="page-index">
      <img src={Pokemon2} alt="pokemon" />
      <div className="pokezone animate__animated animate__zoomInDown animate__delay-0.5s">
        <h1>PokeZone</h1>
      </div>

      <section>
        <article className="pokecatch">
          <h2>PokeCatch</h2>
          <p className="box">Play to catch some Pokemons !</p>
        </article>

        <article className="pokefight">
          <h2>PokeFight</h2>
          <p className="box2">Play to fight the Pokemons !</p>
        </article>

        <article className="pokefeed">
          <h2>PokeFeed</h2>
          <p className="box">Feed the Pokemons to evolve them!</p>
        </article>

        <article className="pokedex">
          <h2>PokeDex</h2>
          <p className="box2">Search any Pokemons you want!</p>
        </article>
      </section>
    </div>
  );
}

export default Index;
