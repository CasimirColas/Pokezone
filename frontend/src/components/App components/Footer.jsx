import React from "react";
import "../css/footer.css";

// eslint-disable-next-line react/prop-types
function Footer({ onPage }) {
  return (
    <footer className={onPage === 0 ? "footer-red" : "footer"}>
      <p>©PokeZone</p>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  onPage: 0,
};
