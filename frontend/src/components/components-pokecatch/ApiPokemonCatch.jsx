/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Navpokemonappears from "./Navpokemonappears";
import MasterBall from "./MasterBall";

function ApiPokemonCatch({ number, setPoke }) {
  const [data, setData] = useState();
  const [pokeball, setPokeball] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((response) => response.data)
      .then((response) => {
        setData(response);
      });
  }, [number]);

  if (!data) {
    return <> </>;
  }

  function handleClick() {
    setPokeball(true);
    setPoke(false);
  }

  return (
    <div>
      {!pokeball ? (
        <>
          <Navpokemonappears name={data.name} id={data.id} />

          <img
            src={data.sprites.other["official-artwork"].front_default}
            onClick={handleClick}
            alt=""
          />
        </>
      ) : (
        <MasterBall />
      )}
    </div>
  );
}

export default ApiPokemonCatch;

ApiPokemonCatch.propTypes = {
  number: PropTypes.number.isRequired,
  setPoke: PropTypes.bool.isRequired,
};
