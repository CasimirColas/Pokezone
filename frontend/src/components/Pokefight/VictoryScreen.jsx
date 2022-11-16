/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import victoryImg from "../../assets/poke_victory.png";

function VictoryScreen({ img, name, onClick }) {
  return (
    <div className="victoryScreen">
      <div className="vicBar">
        <img
          className="victoryImg"
          src={victoryImg}
          alt="something went wrong"
        />
      </div>
      <div className="msgBarV">
        <h3>
          You won!!! {name.charAt(0).toUpperCase() + name.slice(1)} was
          victorious
        </h3>
      </div>
      <img className="winPoke" src={img} alt="something went wrong" />
      <button typeof="submit" onClick={onClick}>
        Play again
      </button>
    </div>
  );
}

export default VictoryScreen;

VictoryScreen.defaultProps = {
  img: "",
  name: "error",
};
VictoryScreen.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
