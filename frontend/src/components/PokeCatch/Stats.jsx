/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./css/stats.css";

function Stats({
  name,
  src,
  attack,
  hp,
  defense,
  spattack,
  spdefense,
  speed,
  weight,
  setProgress,
  first,
  setFirst,
  setNumber,
  second,
  setSecond,
  third,
  setThird,
  fourth,
  setFourth,
}) {
  const [end, setEnd] = useState(false);
  useEffect(() => {
    if (first !== 0 && second !== 0 && third !== 0 && fourth === 0) {
      setFourth(src);
      setEnd(true);
    }

    if (first !== 0 && second !== 0 && third === 0) {
      setThird(src);
    }

    if (first !== 0 && second === 0) {
      setSecond(src);
    }

    if (first === 0) {
      setFirst(src);
    }
  }, []);
  function regame() {
    const min = 1;
    const max = 151;

    setNumber(Math.floor(Math.random() * (max - min)) + min);
    setProgress(0);
  }
  return (
    <div className="statsGeneral">
      <div className="capturedPokemon">{name} was captured !</div>
      <div className="pokeStats">
        <div className="imgStatsPokemon">
          <img src={src} alt="" />
        </div>
        <div className="statsPokemon">
          <div className="weight">Weight: </div>

          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${150}px`,
                backgroundColor: "#008000",
                borderRadius: "5px",
              }}
            >
              {weight}
            </div>
          </div>
          <div className="hp">Hp:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(hp * 150) / 255}px`,
                backgroundColor: "#008000",
                borderRadius: "5px",
              }}
            >
              {hp}
            </div>
          </div>
          <div className="attack">Attack:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(attack * 150) / 255}px`,
                backgroundColor: "#E94D4D",
                borderRadius: "5px",
              }}
            >
              {attack}
            </div>
          </div>
          <div className="defense">Defense:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(defense * 150) / 255}px`,
                backgroundColor: "#EBC35B",
                borderRadius: "5px",
              }}
            >
              {defense}
            </div>
          </div>
          <div className="speed">Speed:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(speed * 150) / 255}px`,
                backgroundColor: "#82FFE1",
                borderRadius: "5px",
              }}
            >
              {speed}
            </div>
          </div>
          <div className="spattack">Sp. Attack:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(spattack * 150) / 255}px`,
                backgroundColor: "#6664C2",
                borderRadius: "5px",
              }}
            >
              {spattack}
            </div>
          </div>
          <div className="spdefense">Sp. Defense:</div>
          <div className="videbar">
            <div
              className="bar"
              style={{
                height: "100%",
                width: `${(spdefense * 150) / 255}px`,
                backgroundColor: "#B443B7",
                borderRadius: "5px",
              }}
            >
              {spdefense}
            </div>
          </div>
        </div>
      </div>
      {end ? (
        <div className="inventoryFull">
          <div>THE END:</div>
          <div>YOUR INVENTORY IS FULL !</div>
        </div>
      ) : (
        <div className="regame" onClick={regame}>
          PLAY AGAIN
        </div>
      )}
    </div>
  );
}

export default Stats;

Stats.defaultProps = {
  name: "error",
  src: "error",
  attack: 1,
  hp: 1,
  defense: 1,
  spattack: 1,
  spdefense: 1,
  speed: 1,
  weight: 1,
  setProgress: 1,
  first: "error",
  setFirst: 1,
  setNumber: 1,
  second: "error",
  setSecond: 1,
  third: "error",
  setThird: 1,
  fourth: "error",
  setFourth: 1,
};

Stats.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  attack: PropTypes.number,
  hp: PropTypes.number,
  defense: PropTypes.number,
  spattack: PropTypes.number,
  spdefense: PropTypes.number,
  speed: PropTypes.number,
  weight: PropTypes.number,
  setProgress: PropTypes.func,
  first: PropTypes.node,
  setFirst: PropTypes.func,
  setNumber: PropTypes.func,
  second: PropTypes.node,
  setSecond: PropTypes.func,
  third: PropTypes.node,
  setThird: PropTypes.func,
  fourth: PropTypes.node,
  setFourth: PropTypes.func,
};
