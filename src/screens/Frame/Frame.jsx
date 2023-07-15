import React from "react";
import { Vector1 } from "../../icons/Vector1";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <Vector1 className="vector" />
        <div className="rectangle" />
      </div>
    </div>
  );
};
