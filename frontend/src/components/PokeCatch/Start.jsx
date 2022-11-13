/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./css/start.css";

function Start({ name, src, setProgress, ball }) {
  function clic() {
    setProgress(1);
  }
  return (
    <div className="startGeneral">
      <div className="navAppears">A {name} APPEARS !!!</div>
      <div className="imgPokeAppears">
        <img src={src} alt="" onClick={clic} />
      </div>
      <div className="ballAppears">
        <img src={ball.itemImage} alt="" />
        <div className="ballDescription">{ball.description}</div>
      </div>
    </div>
  );
}

export default Start;

Start.defaultProps = {
  name: 1,
  src: 1,
  setProgress: 1,
  ball: 1,
};

Start.propTypes = {
  name: PropTypes.number,
  src: PropTypes.number,
  ball: PropTypes.number,
  setProgress: PropTypes.number,
};
