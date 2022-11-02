import React from "react";
import "../css/footer.css";

// eslint-disable-next-line react/prop-types
function Footer({ path }) {
  return (
    <footer className={path === "home" ? "footer-red" : "footer"}>
      <p>©PokeZone</p>
    </footer>
  );
}

export default Footer;
