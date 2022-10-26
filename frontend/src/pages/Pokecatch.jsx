import React from "react";
import Inventory from "../components/Inventory";
import Navinventory from "../components/Navinventory";
import Navpokemonappears from "../components/Navpokemonappears";
import Tips from "../components/Tips";

function Pokecatch() {
  return (
    <div>
      <Inventory />
      <Navinventory />
      <Navpokemonappears />
      <Tips />
    </div>
  );
}

export default Pokecatch;
