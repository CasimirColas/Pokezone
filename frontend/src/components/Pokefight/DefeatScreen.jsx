/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import defeatImg from "../../assets/poke_defeat.png";

function DefeatScreen({ img, name, onClick }) {
  return (
    <div className="defeatScreen">
      <div className="defBar">
        <img className="defeatImg" src={defeatImg} alt="something went wrong" />
      </div>
      <div className="msgBarD">
        <h3>You lost, {name.charAt(0).toUpperCase() + name.slice(1)} won</h3>
      </div>
      <img className="winPoke" src={img} alt="something went wrong" />
      <button typeof="submit" onClick={onClick}>
        Play again
      </button>
    </div>
  );
}

export default DefeatScreen;

DefeatScreen.defaultProps = {
  img: "",
  name: "error",
};
DefeatScreen.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
