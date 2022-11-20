/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./css/catch.css";

function Catch({ setProgress, ball, clic, first }) {
  const [counter, setCounter] = useState(1);
  const [filled, setFilled] = useState(0);
  const [width, setWidth] = useState(0);
  const [tips, setTips] = useState(false);

  useEffect(() => {
    if (first === 0) {
      setTips(true);
      setTimeout(() => {
        setTips(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    setWidth(100 / clic);
  });
  function catchThis() {
    setCounter(counter + 1);
    if (counter === clic)
      setTimeout(() => {
        setProgress(2);
      }, 3000);
    if (filled < 100) setFilled(filled + width);
    if (filled > 100) setFilled(100);
  }

  return (
    <div className="catchGeneral">
      {`${Math.trunc(filled)}%`}
      <div className="pourcentage">
        <div
          className="prog"
          style={{
            height: "20px",
            width: `${filled * 2.5}px`,
            backgroundColor: "#E94D4D",
            transition: "width 0.5s",
          }}
        />
      </div>
      <div className="catch">
        <img src={ball.itemImage} alt="" onClick={catchThis} />
      </div>
      {!tips ? (
        false
      ) : (
        <div className="TipsCatch">
          Clic on the <br /> Ball <br /> to catch
        </div>
      )}
    </div>
  );
}

export default Catch;

Catch.defaultProps = {
  setProgress: 1,
  ball: 1,
  clic: 1,
  first: "error",
};

Catch.propTypes = {
  setProgress: PropTypes.func,
  ball: PropTypes.shape({}),
  clic: PropTypes.number,
  first: PropTypes.node,
};
