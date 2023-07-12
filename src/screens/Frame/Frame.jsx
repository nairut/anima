import React from "react";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <Rectangle className="rectangle-6" />
        <img className="vector" alt="Vector" src="/img/vector-5.png" />
        <div className="group">
          <div className="overlap-group">
            <Rectangle className="rectangle-instance" />
            <img className="img" alt="Vector" src="/img/vector-6.png" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <Rectangle className="rectangle-instance" />
            <img className="img" alt="Vector" src="/img/vector-6.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
