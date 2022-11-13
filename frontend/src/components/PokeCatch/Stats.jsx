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
          <div className="tourweight">
            <div className="statsweight">{weight}</div>
          </div>
          <div className="hp">Hp:</div>
          <div className="tourhp">
            <div className="statshp">{hp}</div>
          </div>
          <div className="attack">Attack:</div>
          <div className="statsattack">{attack}</div>
          <div className="defense">Defense:</div>
          <div className="statsdefense">{defense}</div>
          <div className="speed">Speed:</div>
          <div className="statsspeed">{speed}</div>
          <div className="spattack">Sp. Attack:</div>
          <div className="statsspattack">{spattack}</div>
          <div className="spdefense">Sp. Defense:</div>
          <div className="statsspdefense">{spdefense}</div>
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
  name: 1,
  src: 1,
  attack: 1,
  hp: 1,
  defense: 1,
  spattack: 1,
  spdefense: 1,
  speed: 1,
  weight: 1,
  setProgress: 1,
  first: 1,
  setFirst: 1,
  setNumber: 1,
  second: 1,
  setSecond: 1,
  third: 1,
  setThird: 1,
  fourth: 1,
  setFourth: 1,
};

Stats.propTypes = {
  name: PropTypes.number,
  src: PropTypes.number,
  attack: PropTypes.number,
  hp: PropTypes.number,
  defense: PropTypes.number,
  spattack: PropTypes.number,
  spdefense: PropTypes.number,
  speed: PropTypes.number,
  weight: PropTypes.number,
  setProgress: PropTypes.number,
  first: PropTypes.number,
  setFirst: PropTypes.number,
  setNumber: PropTypes.number,
  second: PropTypes.number,
  setSecond: PropTypes.number,
  third: PropTypes.number,
  setThird: PropTypes.number,
  fourth: PropTypes.number,
  setFourth: PropTypes.number,
};
