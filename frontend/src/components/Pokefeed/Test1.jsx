/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";

function Test1({ nextPage, name, image }) {
  const [berries, setBerries] = useState("");
  const [berries2, setBerries2] = useState("");
  const [berries3, setBerries3] = useState("");
  const [berries4, setBerries4] = useState("");
  const [berries5, setBerries5] = useState("");
  const [berries6, setBerries6] = useState("");
  const [progress, setProgress] = useState(0);

  function advanceProgress(number) {
    if (progress + number >= 100) {
      setProgress(100);
    }
    setProgress(progress + number);
  }

  function apiCall() {
    return axios
      .get(
        `https://pokeapi.co/api/v2/item/${
          Math.floor(Math.random() * (190 - 126)) + 126
        }`
      )
      .then((response) => response.data)
      .then((data) => {
        const berry = {
          berryImg: data.sprites.default,
          xp: Math.floor(Math.random() * 25) + 1,
        };
        return berry;
      });
  }

  useEffect(() => {
    apiCall().then((r) => setBerries(r));
    apiCall().then((r) => setBerries2(r));
    apiCall().then((r) => setBerries3(r));
    apiCall().then((r) => setBerries4(r));
    apiCall().then((r) => setBerries5(r));
    apiCall().then((r) => setBerries6(r));
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      nextPage();
    }
  }, [progress]);

  return (
    <div className="page1">
      <div className="pokemon-infos">
        <img src={image} alt="Pokemon" className="pokemon-img" />
        <p className="pokemon-name">{name}</p>
      </div>
      <div>
        <p className="click-berries-txt">
          Click on the berries to feed the Pokémon
        </p>
        <div className="berries-box">
          <img
            className="berries"
            src={berries.berryImg}
            alt="Berry"
            onClick={() => advanceProgress(berries.xp)}
          />
          <img
            className="berries"
            src={berries2.berryImg}
            alt="Berry 2"
            onClick={() => advanceProgress(berries2.xp)}
          />
          <img
            className="berries"
            src={berries3.berryImg}
            alt="Berry 3"
            onClick={() => advanceProgress(berries3.xp)}
          />
          <img
            className="berries"
            src={berries4.berryImg}
            alt="Berry 4"
            onClick={() => advanceProgress(berries4.xp)}
          />
          <img
            className="berries"
            src={berries5.berryImg}
            alt="Berry 4"
            onClick={() => advanceProgress(berries5.xp)}
          />
          <img
            className="berries"
            src={berries6.berryImg}
            alt="Berry 4"
            onClick={() => advanceProgress(berries6.xp)}
          />
        </div>
      </div>
      <div className="progress-bar">
        <p className="progress-bar-value" value={progress}>
          {progress} %
        </p>
      </div>
    </div>
  );
}

export default Test1;

Test1.propTypes = {
  nextPage: Proptypes.number.isRequired,
  name: Proptypes.number.isRequired,
  image: Proptypes.string.isRequired,
};
