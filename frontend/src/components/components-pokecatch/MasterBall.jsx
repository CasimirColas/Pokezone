/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import Captured from "./Captured";
import "./masterBall.css";

function MasterBall() {
  const [counter, setCounter] = useState(1);
  const [pokeNumber, setPokeNumber] = useState();
  const [capture, setCapture] = useState(false);

  useEffect(() => {
    const min = 1;
    const max = 5;
    setPokeNumber(Math.floor(Math.random() * (max - min)) + min);
  }, []);

  function clicToCatch() {
    setCounter(counter + 1);

    if (counter === pokeNumber) setCapture(true);
  }
  return (
    <div>
      {!capture ? (
        <div className="masterBall" onClick={clicToCatch}>
          Your chance give you a Master Ball !
        </div>
      ) : (
        <Captured />
      )}
    </div>
  );
}

export default MasterBall;
