import React from "react";
import Inventory from "../components/components-pokecatch/Inventory";
import Navinventory from "../components/components-pokecatch/Navinventory";
import "./pokeCatch.css";
import Catch from "../components/components-pokecatch/Catch";

function Pokecatch() {
  return (
    <div>
      <Inventory />
      <Navinventory />
      <div className="compgeneral">
        <Catch />
      </div>
    </div>
  );
}

export default Pokecatch;
