import React from "react";
import Proptypes from "prop-types";
import LevelUp from "./LevelUp";
import "../App components/css/Pokefeed.css";

function ProgressBar({ value }) {
  return (
    <div className="evolution-bar">
      {value < 100 ? <span>{value}</span> : <LevelUp />}
    </div>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  value: Proptypes.number.isRequired,
};
