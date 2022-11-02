import React from "react";
import PropTypes from "prop-types";

function Footer({ onPage }) {
  return (
    <div>
      <p>{onPage}</p>
    </div>
  );
}

export default Footer;

Footer.defaultProps = {
  onPage: 0,
};
Footer.propTypes = {
  onPage: PropTypes.number,
};
