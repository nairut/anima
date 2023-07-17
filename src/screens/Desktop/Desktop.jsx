import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <input className="name" />
        </div>
        <div className="overlap-group">
          <div className="rectangle-2" />
          <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
        </div>
        <Lady className="lady-instance" />
      </div>
    </div>
  );
};
