import React from "react";
import PropTypes from "prop-types";
import "./css/inventory.css";

function Inventory({ first, second, third, fourth }) {
  return (
    <div className="geneInv">
      <div className="inventory">
        <div className="place1">
          <img src={first} alt="" />
        </div>
        <div className="place2">
          <img src={second} alt="" />
        </div>
        <div className="place3">
          <img src={third} alt="" />
        </div>
        <div className="place4">
          <img src={fourth} alt="" />
        </div>
      </div>
      <div className="generalnavinventory">
        <div className="navInventory">
          <div className="textNavInventory">INVENTORY</div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;

Inventory.defaultProps = {
  first: "error",
  second: "error",
  third: "error",
  fourth: "error",
};

Inventory.propTypes = {
  first: PropTypes.node,
  second: PropTypes.node,
  third: PropTypes.node,
  fourth: PropTypes.node,
};
