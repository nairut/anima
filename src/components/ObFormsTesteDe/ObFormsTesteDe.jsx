/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ObFormsTesteDe = ({ property1, className }) => {
  return (
    <div className={`OB-forms-teste-de ${className}`}>
      <div className="teste-de-form">TEste de form</div>
      <div className={`frame ${property1}`}>
        <div className="name">TEste de form</div>
        <div className="min-height" />
      </div>
    </div>
  );
};

ObFormsTesteDe.propTypes = {
  property1: PropTypes.oneOf(["default", "focus", "hover", "error", "disabled"]),
};
