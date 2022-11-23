import React from "react";
import "./css/footer.css";
import PropTypes from "prop-types";

function Footer({ onPage }) {
  function displayText(p) {
    switch (p) {
      case 0:
        return "©PokeZone";
      case 1:
        return "by Casimir";
      case 2:
        return "by Yann";
      case 3:
        return "by Didier";
      case 4:
        return "by Scott";
      default:
        return "©PokeZone";
    }
  }
  return (
    <footer className={onPage === 0 ? "footer-red" : "footer"}>
      <p>{displayText(onPage)}</p>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  onPage: 0,
};

Footer.propTypes = {
  onPage: PropTypes.number,
};
