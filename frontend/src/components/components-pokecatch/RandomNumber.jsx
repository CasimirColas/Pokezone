/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import ApiPokemonCatch from "./ApiPokemonCatch";
import MasterBall from "./MasterBall";
import "./randomNumber.css";

function RandomNumber() {
  const [number, setNumber] = useState(0);
  const [button, setButton] = useState(false);
  const [poke, setPoke] = useState(true);

  const min = 1;
  const max = 151;

  function handleNumber() {
    setNumber(Math.floor(Math.random() * (max - min)) + min);
    setButton(true);
  }

  return (
    <div>
      {!button ? (
        <div className="placerandombutton">
          <div className="randomButton" onClick={handleNumber}>
            Let's PLAY !
          </div>
        </div>
      ) : (
        <>
          <ApiPokemonCatch number={number} setPoke={setPoke} />
          {poke ? <MasterBall /> : true}
        </>
      )}
    </div>
  );
}

export default RandomNumber;
