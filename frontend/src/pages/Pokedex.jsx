import React from "react";
import Pokemon2 from "../assets/images/Pokemon2.png";
import "../components/css/home.css";

function PokeDex() {
  return (
    <div className="pokemon">
      <img src={Pokemon2} width="300px" height="200px" alt="pokemon" />
    </div>
  );
}

export default PokeDex;
