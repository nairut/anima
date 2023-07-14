/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="teste-de-forma-dois">TEste de forma dois</div>
      <div className={`name-wrapper property-1-${property1}`}>
        <div className="text-wrapper">TEste de forma dois</div>
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["default", "focus", "hover", "error", "disabled"]),
};
