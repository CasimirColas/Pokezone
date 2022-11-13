/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./css/catch.css";

function Catch({ setProgress, ball, clic }) {
  const [counter, setCounter] = useState(1);
  const [filled, setFilled] = useState(0);
  const [width, setWidth] = useState(0);

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
  }

  return (
    <div className="catchGeneral">
      {`${filled}%`}
      <div className="pourcentage">
        <div
          className="prog"
          style={{
            height: "20px",
            width: `${filled * 2.5}px`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        />
      </div>
      <div className="catch">
        <img src={ball.itemImage} alt="" onClick={catchThis} />
      </div>
    </div>
  );
}

export default Catch;

Catch.defaultProps = {
  setProgress: 1,
  ball: 1,
  clic: 1,
};

Catch.propTypes = {
  setProgress: PropTypes.number,
  ball: PropTypes.number,
  clic: PropTypes.number,
};
