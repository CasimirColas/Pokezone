import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Attack({ pos, info }) {
  const [attack, setAttack] = useState();
  function randomTab(tab) {
    if (!tab) {
      return undefined;
    }
    const nb = Math.floor(Math.random() * tab.length);
    return tab[nb];
  }
  async function getAttack(nameM) {
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${nameM}`);
    const moveData = response.data;
    const move = {
      name: nameM,
      accuracy: moveData.accuracy,
      power: moveData.power,
      type: moveData.type.name,
    };
    return move;
  }
  useEffect(() => {
    const fetchData = async () => {
      setAttack(await getAttack(randomTab(info)));
    };
    fetchData().catch(console.error);
  }, [info]);
  if (!attack) {
    return <>loading ...</>;
  }
  return (
    <div className="attack">
      <p>
        {pos} {attack.name}
      </p>
    </div>
  );
}
Attack.defaultProps = {
  pos: 1,
  info: "a pokemon",
};

Attack.propTypes = {
  pos: PropTypes.number,
  info: PropTypes.arrayOf(PropTypes.string),
};

export default Attack;
