/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./css/start.css";

function Start({ name, src, setProgress, ball, first }) {
  const [tips, setTips] = useState(false);

  useEffect(() => {
    if (first === 0) {
      setTips(true);
      setTimeout(() => {
        setTips(false);
      }, 5000);
    }
  }, []);

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
      {!tips ? (
        false
      ) : (
        <div className="TipsStart">
          Clic on the <br /> Pokemon <br /> to catch it
        </div>
      )}
    </div>
  );
}

export default Start;

Start.defaultProps = {
  name: "error",
  src: "error",
  setProgress: 1,
  ball: 1,
  first: "error",
};

Start.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  ball: PropTypes.shape({}),
  setProgress: PropTypes.func,
  first: PropTypes.node,
};
