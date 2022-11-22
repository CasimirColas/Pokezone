import React from "react";
import Proptypes from "prop-types";
import "../App components/css/Pokefeed.css";

function Berries({ levelProgress, berrieValue, display }) {
  return (
    <div className="berries-bloc">
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      <input
        className="berries-img"
        type="image"
        alt="Bonbon"
        src="src/images/berry.jpg"
        value={berrieValue}
        onClick={levelProgress}
      />
      {display()}
    </div>
  );
}

export default Berries;

Berries.defaultProps = {
  levelProgress: 1,
  berrieValue: 2,
  display: 3,
};

Berries.propTypes = {
  levelProgress: Proptypes.number,
  berrieValue: Proptypes.number,
  display: Proptypes.number,
};
