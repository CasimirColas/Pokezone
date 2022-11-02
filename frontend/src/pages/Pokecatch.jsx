import React from "react";
import Inventory from "../components/components-pokecatch/Inventory";
import Navinventory from "../components/components-pokecatch/Navinventory";
import Navpokemonappears from "../components/components-pokecatch/Navpokemonappears";
import Tips from "../components/components-pokecatch/Tips";
import PlayAgain from "../components/components-pokecatch/PlayAgain";
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
