/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ObFormsBotaoDe = ({ property1, className }) => {
  return (
    <div className={`OB-forms-botao-de property-1-0-${property1} ${className}`}>
      <p className="p">Botao de enviar de forma</p>
    </div>
  );
};

ObFormsBotaoDe.propTypes = {
  property1: PropTypes.oneOf(["default", "focus", "hover", "error", "disabled"]),
};
