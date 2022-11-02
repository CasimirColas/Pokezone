import React from "react";
import Inventory from "../components/Inventory";
import Navinventory from "../components/Navinventory";
import Navpokemonappears from "../components/Navpokemonappears";
import Tips from "../components/Tips";
import PlayAgain from "../components/PlayAgain";
import "./pokeCatch.css";

function Pokecatch() {
  return (
    <div>
      <Inventory />
      <Navinventory />
      <div className="compgeneral">
        <div className="compnavpokemonappears">
          <Navpokemonappears />
        </div>
        <div className="comppokemonappears" />
        <div className="comptips">
          <Tips />
        </div>
        <div className="compplayagain">
          <PlayAgain />
        </div>
        <div className="comppokeball" />
        <div className="compdifficulty" />
      </div>
    </div>
  );
}

export default Pokecatch;
