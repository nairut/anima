import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-group">
          <div className="rectangle-2" />
          <input className="name" />
        </div>
        <Link className="group" to="/thank-you">
          <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
        </Link>
      </div>
    </div>
  );
};
